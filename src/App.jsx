import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './containers/Login';
import Register from './containers/Register';
import Profile from './containers/Profile';


// Lazy load the containers
const Home = lazy(() => import('./containers/Home'));
const ProductPage = lazy(() => import('./containers/ProductPage'));
const CartPage = lazy(() => import('./containers/CartPage'));
const OrderPage = lazy(() => import('./containers/OrderPage'));
const AdminPage = lazy(() => import('./containers/AdminPage'));
const SearchPage = lazy(() => import('./containers/SearchPage'));

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<ProductPage />} />
    <Route  path="/login" element={<Login />} />
    <Route  path="/register" element={<Register />} />
    <Route path="/profile" element={<Profile />} />
    {/* <Route path="/cart" element={<CartPage />} /> */}
    <Route path="/orders" element={<OrderPage />} />
    <Route path="/admin" element={<AdminPage />} />
    <Route path="/search" element={<SearchPage />} />
    <Route path="/admin" element={<AdminPage />} />
  </Routes>
);

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      {/* <Navbar /> */}
      <Suspense fallback={<div>Loading...</div>}>
        <AppRoutes />
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
};

export default App;