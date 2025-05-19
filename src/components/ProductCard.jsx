import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const ProductCard = ({ plant }) => {
  const dispatch = useDispatch();
  const inCart = useSelector(state =>
    state.cart.items.find(item => item.id === plant.id)
  );

  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '1rem',
      width: '220px',
      textAlign: 'center',
      background: '#f4fdf4',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      transition: '0.3s'
    }}>
      <img src={plant.image} alt={plant.name} style={{ width: '100%', borderRadius: '8px' }} />
      <h3 style={{ margin: '0.5rem 0' }}>{plant.name}</h3>
      <p style={{ margin: '0.5rem 0', color: '#2e7d32', fontWeight: 'bold' }}>${plant.price}</p>
      <button
        onClick={() => dispatch(addToCart(plant))}
        disabled={!!inCart}
        style={{
          padding: '0.5rem 1rem',
          background: inCart ? '#aaa' : '#2e7d32',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: inCart ? 'not-allowed' : 'pointer'
        }}
      >
        {inCart ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductCard;
