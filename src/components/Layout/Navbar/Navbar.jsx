import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineUser, HiOutlineShoppingBag, HiBars3BottomRight } from 'react-icons/hi2';
import { IoMdClose } from 'react-icons/io';
import SearchBar from '../SearchBar/SearchBar';
import Cart from '../Cart/Cart';
import { navItems, shopItems } from '../../Data/navData';
import { MdKeyboardArrowDown } from 'react-icons/md';
import logo from '../../../assets/logo.png';
import './NavBar.css';

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);

  const toggleNavDrawer = () => setNavDrawerOpen(!navDrawerOpen);
  const toggleCartDrawer = () => setDrawerOpen(!drawerOpen);
  const toggleShopDropdown = () => setShopDropdownOpen(!shopDropdownOpen);

  return (
    <>
      <nav className="navbar-container py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <div>
            <Link to="/">
              <img src={logo} alt="Logo" className="h-12 w-auto object-contain" />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className=" md:flex space-x-6">
            {navItems.map((item, index) => (
              item === "Shop" ? (
                <div key={index} className="relative group">
                  <button 
                    onClick={toggleShopDropdown}
                    className="flex items-center text-gray-700 hover:text-black text-sm font-medium uppercase"
                  >
                    {item} 
                    <MdKeyboardArrowDown className="ml-1 text-lg text-gray-600 group-hover:text-black transition-transform duration-200 transform" 
                      style={{ transform: shopDropdownOpen ? "rotate(180deg)" : "rotate(0deg)" }} 
                    />
                  </button>

                  {/* Dropdown */}
                  <div className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50 
                    ${shopDropdownOpen ? "block" : "hidden"} group-hover:block`}
                  >
                    {shopItems.map((shopItem, idx) => (
                      <Link 
                        key={idx} 
                        to="#" 
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-200 text-sm"
                        onClick={() => setShopDropdownOpen(false)}
                      >
                        {shopItem}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link 
                  key={index} 
                  to="#" 
                  className="text-gray-700 hover:text-black text-sm font-medium uppercase"
                >
                  {item}
                </Link>
              )
            ))}
          </div>

          {/* Icons & Search */}
          <div className="flex items-center space-x-4">
            <Link to="/profile" className="hover:text-black">
              <HiOutlineUser className="h-6 w-6 text-gray-700" />
            </Link>

            <button onClick={toggleCartDrawer} className="relative hover:text-black">
              <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
              <span className="absolute -top-1 bg-orange-700 text-white text-sm rounded-full px-2 py-0.5">
                4
              </span>
            </button>

            <div className="overflow-hidden">
              <SearchBar />
            </div>

            <button onClick={toggleNavDrawer} className="md:hidden">
              <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>
      </nav>

      {/* Cart Drawer */}
      <Cart drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />

      {/* Mobile Navigation Drawer */}
      <div className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
        navDrawerOpen ? "translate-x-0" : "-translate-x-full"
      }`}>
        <div className="flex justify-end p-4">
          <button onClick={toggleNavDrawer}>
            <IoMdClose className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Menu</h2>
          <nav className="space-y-4">
            {navItems.map((item, index) => (
            <Link 
              to="#" 
              key={index} 
              onClick={toggleNavDrawer} 
              className="block text-gray-600 hover:text-black"
            >
            {item}
            </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavBar;