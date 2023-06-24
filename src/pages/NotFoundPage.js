import React from 'react';
import { NavLink } from 'react-router-dom';
import './NotFoundPage.css';

const NotFoundPage = () => (
  <div>
    <h1 className='not-found-title'>Page Not Found</h1>
    <p className='not-found-subtitle'>
      The Page you have requested is not available!
    </p>
    <NavLink to='/' className='primary-button'>
      Go back to homepage
    </NavLink>
  </div>
);

export default NotFoundPage;
