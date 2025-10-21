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
          <p className="card-price">$19.99</p>
          <p className='card-category'>Category..</p>
          <Link to="/products/1">More details</Link>
        </div>
      </section>
  );
}
