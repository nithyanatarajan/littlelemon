import React from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';
import Logo from '../assets/headerlogo.png';
import Hamburger from './Hamburger';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };
  return (
    <header className='header'>
      <Hamburger />
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
      <div
        className='logo'
        onClick={handleClick}
        onKeyDown={handleClick}
        role='img'
      >
        <img
          src={Logo}
          alt='Little Lemon Restaurant Logo'
          className='header-img'
        />
      </div>
      <Nav />
    </header>
  );
};
export default Header;
