import React from 'react';
import { Link } from 'react-router-dom';
import ProductList from '../components/Product/ProductList';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Pharmacy E-commerce Website</h1>
      <p>Browse our products:</p>
      <ProductList />
      <p>
        <Link to="/products">View all products</Link>
      </p>
    </div>
  );
};

export default Home;