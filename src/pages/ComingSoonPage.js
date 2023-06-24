import React from 'react';
import { NavLink } from 'react-router-dom';
import Hero from '../components/Hero';
import './ComingSoonPage.css';

const ComingSoonPage = () => (
  <main>
    <Hero />
    <section className='comingsoon-section'>
      <h2 className='comingsoon-subtitle'>Feature coming soon!</h2>
      <NavLink to='/' className='primary-button'>
        Go back to homepage
      </NavLink>
    </section>
  </main>
);
export default ComingSoonPage;
