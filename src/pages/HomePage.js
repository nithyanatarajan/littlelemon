import React from 'react';
import { NavLink } from 'react-router-dom';
import Hero from '../components/Hero';
import Specials from '../components/Specials';

const HomePage = () => (
  <main>
    <Hero>
      <NavLink to='/booking' role='button' className='primary-button'>
        Book a Table
      </NavLink>
    </Hero>
    <Specials />
  </main>
);
export default HomePage;
