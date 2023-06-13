import React from 'react';
import Nav from './Nav';
import Logo from '../assets/headerlogo.png';
import Hamburger from './Hamburger';
import './Header.css';

const Header = () => (
  <header className='header'>
    <Hamburger />
    <div className='logo'>
      <img
        src={Logo}
        alt='Little Lemon Restaurant Logo'
        className='header-img'
      />
    </div>
    <Nav />
  </header>
);
export default Header;
