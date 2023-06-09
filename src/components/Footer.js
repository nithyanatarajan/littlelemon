import Logo from '../assets/footerlogo.png';
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className='logo'>
        <img src={Logo} alt='Little Lemon Restaurant Logo' />
      </div>
      <div className='copyright'>
        <p>©2023 Little Lemon. All rights reserved. </p>
      </div>
    </footer>
  );
};
export default Footer;
