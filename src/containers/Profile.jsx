import React from 'react'
import MyOrdersPage from './MyOrdersPage';

const Profile = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-8 py-6">
      <div className="flex flex-col md:flex-row gap-8">

        <div className="w-full md:w-[300px] bg-white rounded-sm p-6">
          <h1 className="text-[28px] font-bold mb-1">Luxx</h1>
          <p className="text-gray-500 text-lg mb-4">luxx@test.com</p>
          <button className="w-full bg-[#ff0000] text-white py-3 rounded-md text-xl font-normal">
            Logout
          </button>
        </div>

        <div className="flex-1">
          <MyOrdersPage />
        </div>
      </div>
    </div>
  );
};

export default Profile;