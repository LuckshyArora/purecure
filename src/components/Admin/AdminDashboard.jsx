import React from 'react';

const AdminDashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome to the admin dashboard!</p>
      <ul>
        <li>
          <a href="#">Manage Products</a>
        </li>
        <li>
          <a href="#">Manage Orders</a>
        </li>
        <li>
          <a href="#">Manage Users</a>
        </li>
      </ul>
    </div>
  );
};

export default AdminDashboard;