import React from 'react';

const Checkout = () => {
  return (
    <div>
      <h1>Checkout</h1>
      <form>
        <label>Name:</label>
        <input type="text" />
        <br />
        <label>Email:</label>
        <input type="email" />
        <br />
        <label>Address:</label>
        <input type="text" />
        <br />
        <button>Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;