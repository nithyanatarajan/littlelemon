import Nav from './Nav';
import React from 'react';
import Logo from './../assets/headerlogo.png';

const Header = () => {
  return (
    <header>
      <div className='logo'>
        <img src={Logo} alt='Little Lemon Restaurant Logo' />
      </div>
      <Nav />
    </header>
  );
};
export default Header;
