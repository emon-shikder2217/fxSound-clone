import React from 'react';
import './Header.css';
import logo from '../../assets/header-img.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img className='logoImg' src={logo} alt="logo" />
      </div>
      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
