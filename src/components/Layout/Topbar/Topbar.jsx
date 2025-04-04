import React from 'react';
import { TbBrandMeta } from 'react-icons/tb';
import { IoLogoInstagram } from 'react-icons/io';
import { RiTwitterXLine } from 'react-icons/ri';
import './Topbar.css';

const Topbar = () => {
  return (
    <div className="topbar-container">
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="hover:text-blue-800">
            <TbBrandMeta className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-blue-800">
            <IoLogoInstagram className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-blue-800">
            <RiTwitterXLine className="h-4 w-4" />
          </a>
        </div>
        <div className="text-sm text-center flex-grow">
          <span>Free Shipping on all orders above ₹500.</span>
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