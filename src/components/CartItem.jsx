import React from 'react';
import { useDispatch } from 'react-redux';
import { increment, decrement, remove } from '../redux/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const btnStyle = {
    padding: '0.3rem 0.6rem',
    background: '#2e7d32',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  };

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1rem',
      marginBottom: '1rem',
      background: '#f4fdf4',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <img src={item.image} alt={item.name} style={{ width: '80px', borderRadius: '8px' }} />
      <div style={{ flex: 1, marginLeft: '1rem' }}>
        <h4 style={{ margin: '0 0 0.5rem' }}>{item.name}</h4>
        <p style={{ margin: 0 }}>${item.price} x {item.quantity}</p>
      </div>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <button onClick={() => dispatch(decrement(item.id))} style={btnStyle}>-</button>
        <button onClick={() => dispatch(increment(item.id))} style={btnStyle}>+</button>
        <button onClick={() => dispatch(remove(item.id))} style={{ ...btnStyle, background: '#e53935' }}>Delete</button>
      </div>
    </div>
  );
};

export default CartItem;
