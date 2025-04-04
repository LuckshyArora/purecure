import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './containers/Home';
import ProductPage from './containers/ProductPage';
import CartPage from './containers/CartPage';
import OrderPage from './containers/OrderPage';
import AdminPage from './containers/AdminPage';
import SearchPage from './containers/SearchPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Navbar from './components/Layout/Navbar/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/orders" element={<OrderPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;