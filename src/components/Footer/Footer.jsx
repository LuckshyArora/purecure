import React from 'react';
import { Link } from 'react-router-dom';
import { followData, navItems, shopItems, supportData } from '../Data/navData';
import { FiPhoneCall } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="border-t py-1 bg-gray-100">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 px-2 lg:px-0">
        <div>
          <h3 className="text-lg text-gray-800 mb-1">NewsLetter</h3>
          <p className="text-gray-500 mb-1 text-xs">
            Be the first to hear about new products, exclusive events and online offers.
          </p>
          <p className="text-xs text-gray-500 mb-1">
            Sign up and get 10% off on your first order.
          </p>
          <form action="" className="flex">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="p-2 w-full text-xs border-t border-l border-b border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
              required
            />
            <button
              type="submit"
              className="bg-black text-white px-2 py-1 text-xs rounded-r-md hover:bg-gray-800 transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div className="">
          <h3 className="text-base text-gray-800 mb-1">Shop</h3>
          <ul className="space-y-1 text-gray-800 hover:text-gray-300">
            {shopItems.map(({name}, index) => (
              <li key={index}>
                <Link to="#" className="hover:text-gray-500 text-sm transition-colors">
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <h3 className="text-base text-gray-800 mb-1">Support</h3>
          <ul className="space-y-1 text-gray-800 hover:text-gray-300">
            {supportData.map((item, index) => (
              <li key={index}>
                <Link to="#" className="hover:text-gray-500 text-sm transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg text-gray-800 mb-2">Follow Us</h3>
          <div className="flex items-center space-x-2 mb-2">
            {followData.map(({ name, icon, href }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
                aria-label={name}
              >
                {React.createElement(icon, { className: "h-4 w-4" })}
              </a>
            ))}
          </div>
          <div>
            <p className="text-gray-500">Call Us</p>
            <p className="text-gray-800 hover:text-gray-300">
              <FiPhoneCall className="inline-block mr-1" />
              +91 (0120) 246-493
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-1 px-2 lg:px-0 border-t border-gray-200 pt-1">
        <p className="text-gray-500 text-sm tracking-tighter text-center">
          &copy; 2025, CompileTab. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;