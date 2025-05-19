import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const totalItems = useSelector(state =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <header style={{
      padding: '1rem 2rem',
      background: '#2e7d32',
      color: '#fff',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h1 style={{ margin: 0, fontSize: '1.5rem' }}>🌿 Plant Store</h1>
      <nav style={{ fontSize: '1.1rem' }}>
        <Link to="/products" style={{ color: '#fff', marginRight: '1.5rem', textDecoration: 'none' }}>Shop</Link>
        <Link to="/cart" style={{ color: '#fff', textDecoration: 'none' }}>Cart ({totalItems})</Link>
      </nav>
    </header>
  );
};

export default Header;
