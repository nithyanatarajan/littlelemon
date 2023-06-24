import React from 'react';
import { NavLink } from 'react-router-dom';
import Hero from '../components/Hero';

const HomePage = () => (
  <main>
    <Hero>
      <NavLink to='/booking' role='button' className='primary-button'>
        Book a Table
      </NavLink>
    </Hero>
  </main>
);
export default HomePage;
