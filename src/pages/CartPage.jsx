import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const items = useSelector(state => state.cart.items);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = items.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Your Shopping Cart</h2>

      {items.length === 0 ? (
        <p>Your cart is empty. <Link to="/products">Go shopping!</Link></p>
      ) : (
        <>
          {items.map(item => (
            <CartItem key={item.id} item={item} />
          ))}

          <h3>Total Items: {totalItems}</h3>
          <h3>Total Cost: ${totalCost.toFixed(2)}</h3>

          <button
            onClick={() => alert("Coming Soon")}
            style={{
              padding: '0.7rem 1.5rem',
              background: '#2e7d32',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginRight: '1rem'
            }}
          >
            Checkout
          </button>

          <Link to="/products" style={{
            padding: '0.7rem 1.5rem',
            background: '#aaa',
            color: '#fff',
            borderRadius: '5px',
            textDecoration: 'none'
          }}>
            Continue Shopping
          </Link>
        </>
      )}
    </div>
  );
};

export default CartPage;
