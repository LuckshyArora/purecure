import React from 'react';
import Cart from '../components/Layout/Cart/Cart';

const CartPage = () => {
  return (
    <div>
      <h1>Cart</h1>
      <Cart />
      <p>
        <Link to="/checkout">Proceed to checkout</Link>
      </p>
    </div>
  );
};

export default CartPage;