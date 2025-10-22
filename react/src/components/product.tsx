import { useNavigate, useParams } from 'react-router';
import '../styles/product.css'
import { useApiService } from '../services/api.service';
import { useEffect, useState } from 'react';
import type { DetailedProduct } from '../models/DetailedProduct';
import { Star } from './star';
import { Spinner } from './spinner';
import { Tooltip } from './tooltip';

export function Product() {
    const params = useParams()
    const navigate = useNavigate()
    const {getProductById, setSpinnerStatus, spinnerStatus, tooltip, notify} = useApiService()
    const [item, setItem] = useState<DetailedProduct>()
    const [stars, setStars] = useState<{checked: boolean, id: number}[]>([])
    
    useEffect( () => {
        setSpinnerStatus(true)
        try {
          getProductById(Number(params.id)).then(data => {
            if(data){
              setItem(data)
              const element = []
              for (let index = 1; index <= 5; index++) {
                  element.push({id: index, checked: data.rating.rate >= index})
              }
              setStars(element)
              setSpinnerStatus(false)
            } else {
              notifyAndGoHome('The product does not exist.')
            }
          }).catch(() => {
            notifyAndGoHome('The product could not be obtained.')
          })
        } catch (error) {
          notifyAndGoHome('The product could not be obtained.')
        }
    }, [])

  const notifyAndGoHome = (message: string) => {
    notify(message)
    setTimeout(() => {navigate('/')}, 1500)
  }

  return (
    <>    
      {
        spinnerStatus && <Spinner></Spinner>
      }
      {
        tooltip && (<Tooltip message={tooltip}></Tooltip>)
      }
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
    </>
  );
}
