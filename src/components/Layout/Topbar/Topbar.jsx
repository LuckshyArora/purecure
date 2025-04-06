import React from 'react';
import { followData } from '../../Data/navData.jsx';
import './Topbar.css';

const Topbar = () => {
  return (
    <div className="topbar-container">
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        <div className="hidden md:flex items-center space-x-4">
          {followData.map(({ name, icon: IconComponent, href }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
              aria-label={name}
            >
              <IconComponent />
            </a>
          ))}
        </div>
        <div className="text-sm text-center flex-grow">
          <span>Free Shipping on all orders above ₹200.</span>
        </div>
        <div className="text-sm hidden md:block">
          <a href="tel:+1234567890" className="hover:text-blue-800">
            +91 (0120) 246-493
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;