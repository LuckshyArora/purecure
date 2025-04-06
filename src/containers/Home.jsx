import React from 'react';
import { Link } from 'react-router-dom';
import ProductList from '../components/Product/ProductList';
import Hero from '../components/Layout/Hero/Hero';
import CollectionSection from '../components/Product/CollectionSection';
import HealthCheckupSection from '../components/Product/HealthCheckupSection';
import Features from '../components/Product/Features';

const Home = () => {
  return (
    <div>
      <Hero />
      <CollectionSection />
      <ProductList />
      <HealthCheckupSection />
      <Features />
    </div>
  );
};

export default Home;