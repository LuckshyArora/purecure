import React from 'react';
import Topbar from '../Layout/Topbar/Topbar';
import NavBar from '../Layout/Navbar/Navbar';
import './Header.css';

const Header = () => {
  return (
    <header className="header-container">
      <Topbar />
      <NavBar />
    </header>
  );
};

export default Header;