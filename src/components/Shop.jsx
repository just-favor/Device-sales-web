import React from 'react';
import { Link } from 'react-router-dom';
import gadgets from '../data/gadgets';
import './Shop.css';

function Shop({ limit }) {
  const displayedProducts = limit ? gadgets.slice(0, limit) : gadgets;

  return (
    <section className="shop">
      <h2 className='gadgets'>Our Gadgets</h2>
      <div className="product-grid">
        {displayedProducts.map(prod => (
          <div className="product-card" key={prod.id}>
            <img src={prod.image} alt={prod.title} />
            <h3 style={{borderBottom: 'none'}}>{prod.title.slice(0, 18) + '...'}</h3>
            {/* <p>${prod.price}</p> */}
          </div>
        ))}
      </div>

      {limit && (
        <div className="view-all-container">
          <Link to="/products" className="view-all-btn">
            View All
          </Link>
        </div>
      )}
    </section>
  );
}

export default Shop;
