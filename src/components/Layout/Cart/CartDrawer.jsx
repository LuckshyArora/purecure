import React from 'react';
import { IoMdClose } from 'react-icons/io';
import PropTypes from 'prop-types';
import CartItem from './CartItems';
import './CartDrawer.css';

const Cart = ({ drawerOpen, toggleCartDrawer, cartItems }) => {
  return (
    <div
      className={`fixed top-0 right-0 w-3/4 sm:w-[18rem] md:w-[18rem] h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
        drawerOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {/* Header with Close Button */}
      <div className="flex justify-between items-center p-4 border-b border-gray-300">
        <h2 className="text-xl font-semibold">Shopping Cart</h2>
        <button onClick={toggleCartDrawer}>
          <IoMdClose className="h-6 w-6 text-gray-600" />
        </button>
      </div>

      {/* Cart Content */}
      <div className="flex-grow p-4 overflow-y-auto">
        {cartItems && cartItems.length > 0 ? (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <p className="text-gray-600 text-center mt-6">Your cart is empty.</p>
        )}
      </div>

      {/* Footer with Checkout */}
      <div className="p-4 border-t border-gray-300 bg-white sticky bottom-0">
        <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
          Checkout
        </button>
        <p className="text-xs tracking-tight mt-2 text-gray-500 text-center">
          Shipping, taxes and discount codes calculated at checkout.
        </p>
      </div>
    </div>
  );
};

Cart.propTypes = {
  drawerOpen: PropTypes.bool.isRequired,
  toggleCartDrawer: PropTypes.func.isRequired,
  cartItems: PropTypes.array.isRequired,
};

export default Cart;
