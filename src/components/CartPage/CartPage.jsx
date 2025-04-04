import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import './CartPage.css';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  useEffect(() => {
    const calculateSubtotal = () => {
      let subtotal = 0;
      cartItems.forEach((item) => {
        subtotal += item.price * item.quantity;
      });
      setSubtotal(subtotal);
    };
    calculateSubtotal();
  }, [cartItems]);

  useEffect(() => {
    const calculateTax = () => {
      const taxRate = 0.08; // 8% tax rate
      setTax(subtotal * taxRate);
    };
    calculateTax();
  }, [subtotal]);

  useEffect(() => {
    const calculateTotal = () => {
      setTotal(subtotal + tax);
    };
    calculateTotal();
  }, [subtotal, tax]);

  const handleQuantityChange = (id, quantity) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id) {
        item.quantity = quantity;
      }
      return item;
    });
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const handleRemoveItem = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  return (
    <div className="cart-page">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-lg text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              handleQuantityChange={handleQuantityChange}
              handleRemoveItem={handleRemoveItem}
            />
          ))}
        </div>
      )}
      <div className="cart-summary">
        <h2 className="text-2xl font-bold mb-2">Summary</h2>
        <ul>
          <li className="flex justify-between mb-2">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </li>
          <li className="flex justify-between mb-2">
            <span>Tax (8%):</span>
            <span>${tax.toFixed(2)}</span>
          </li>
          <li className="flex justify-between mb-4">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </li>
        </ul>
        <Link to="/checkout" className="btn">
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default CartPage;