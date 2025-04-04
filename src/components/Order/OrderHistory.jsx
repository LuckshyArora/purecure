import React from 'react';

const OrderHistory = () => {
  return (
    <div>
      <h1>Order History</h1>
      <p>This is where you'll see a list of your past orders.</p>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Date</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {/* List of orders will go here */}
        </tbody>
      </table>
    </div>
  );
};

export default OrderHistory;