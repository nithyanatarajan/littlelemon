import React from 'react';
import Logo from '../assets/footerlogo.png';
import './Footer.css';

const Footer = () => (
  <footer className='footer'>
    <div className='logo'>
      <img
        src={Logo}
        alt='Little Lemon Restaurant Logo'
        className='footer-img'
      />
    </div>
    <div className='copyright'>
      <p>©2023 Little Lemon. All rights reserved. </p>
    </div>
  </footer>
);
export default Footer;
