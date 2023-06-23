import React from 'react';
import Logo from '../assets/footerlogo.png';
import './Footer.css';

const Footer = () => (
  <footer className='footer'>
    <div className='footer-section'>
      <div className='logo'>
        <img
          src={Logo}
          alt='Little Lemon Restaurant Footer Logo'
          className='footer-img'
        />
      </div>
      <div className='copyright'>
        <p>©2023 Little Lemon. All rights reserved. </p>
      </div>
    </div>
  </footer>
);
export default Footer;
