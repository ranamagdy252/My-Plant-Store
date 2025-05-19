import React from 'react';
import plants from '../data/plants';
import ProductCard from '../components/ProductCard';

const ProductList = () => {
  // Group plants by category
  const categories = plants.reduce((acc, plant) => {
    if (!acc[plant.category]) acc[plant.category] = [];
    acc[plant.category].push(plant);
    return acc;
  }, {});

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Our Plants</h2>
      {Object.entries(categories).map(([category, plantsInCat]) => (
        <div key={category} style={{ marginBottom: '2rem' }}>
          <h3 style={{ borderBottom: '2px solid #2e7d32', paddingBottom: '0.5rem' }}>{category}</h3>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {plantsInCat.map(plant => (
              <ProductCard key={plant.id} plant={plant} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
