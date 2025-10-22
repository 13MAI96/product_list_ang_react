import { Link } from 'react-router';
import type { ListedProduct } from '../models/ListedProduct';
import '../styles/card.css'

export function Card({item}: {item: ListedProduct}) {
  return (
      <section>
        <div className="card">
          <img
            className='card-image'
            src={item.image}
          />
          <h1 className='card-title'>{item.title}</h1>
          <p className="card-price">$ {item.price}</p>
          <p className='card-category'>{item.category}</p>
          <Link className='card-details' to={{ pathname: `/product/${item.id}`}}>More details</Link>
        </div>
      </section>
  );
}
