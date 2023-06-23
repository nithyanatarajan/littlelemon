import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Hero from './Hero';

const HomePage = () => {
  const navigate = useNavigate();

  const handleBookingClick = () => {
    navigate('/booking');
  };
  return (
    <main>
      <Hero>
        <NavLink
          to='/booking'
          role='button'
          className='primary-button'
          onClick={handleBookingClick}
        >
          Book a Table
        </NavLink>
      </Hero>
    </main>
  );
};
export default HomePage;
