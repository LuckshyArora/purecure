import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductList from '../components/Product/ProductList';
import { getProducts } from '../actions/productActions';

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ProductList products={products} />
      <p>
        <Link to="/">Back to home</Link>
      </p>
    </div>
  );
};

export default ProductPage;