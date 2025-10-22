import { useNavigate, useParams } from 'react-router';
import '../styles/product.css'
import { useApiService } from '../services/api.service';
import { useEffect, useState } from 'react';
import type { DetailedProduct } from '../models/DetailedProduct';
import { Star } from './star';

export function Product() {
    const params = useParams()
    const navigate = useNavigate()
    const {getProductById} = useApiService()
    const [item, setItem] = useState<DetailedProduct>()
    const [stars, setStars] = useState<{checked: boolean, id: number}[]>([])
    
    useEffect( () => {
        getProductById(Number(params.id)).then(data => {
            setItem(data)
            const element = []
            for (let index = 1; index <= 5; index++) {
                element.push({id: index, checked: data.rating.rate >= index})
            }
            console.log(element)
            setStars(element)
        })
    }, [])

  return (
      <section className='product'>
        <img
        className='product-image'
        src={item?.image}
        />
        <div className="product-details">
          <div className='product-rating'>
            <div className='product-rating-stars'>
                {
                    stars.map((star) => <Star key={star.id} checked={star.checked}/>)
                }
            </div>
            <p className='product-rating-count'>{item?.rating.count} votes</p>
          </div>
          <h1 className='product-title'>{item?.title}</h1>
          <p className='product-category'>{item?.category}</p>
          <p className='product-description'>{item?.description}</p>
          <p className="product-price">$ {item?.price}</p>
          <div className='product-actions'>
            <button className='button' onClick={() => navigate("/")}>Go back</button>
          </div>
        </div>
      </section>
  );
}
