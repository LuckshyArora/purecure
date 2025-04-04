import React from 'react';
import CartItem from './CartItems';

const Cart = ({ cartItems, toggleCartDrawer }) => {
  return (
    <div className="cart-drawer">
      <h2>Cart</h2>
      {cartItems && cartItems.length > 0 ? (
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <p className="text-gray-600">Your cart is empty.</p>
      )}
      <button onClick={toggleCartDrawer} className="btn btn-secondary">
        Close
      </button>
    </div>
  );
};

export default Cart;