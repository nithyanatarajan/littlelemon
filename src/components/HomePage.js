import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './HomePage.css';
import Hero from './Hero';

const HomePage = () => {
  const navigate = useNavigate();

  const handleReservationClick = () => {
    navigate('/reservations');
  };
  return (
    <main>
      <Hero>
        <NavLink
          to='/reservations'
          role='button'
          className='primary-button'
          onClick={handleReservationClick}
        >
          Reserve a Table
        </NavLink>
      </Hero>
    </main>
  );
};
export default HomePage;
