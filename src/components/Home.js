import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import FoodImg from '../assets/restaurantfood.jpg';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleReservationClick = () => {
    navigate('/reservations');
  };
  return (
    <main>
      <section className='hero'>
        <div className='hero-section'>
          <div className='hero-content'>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <NavLink
              to='/reservations'
              role='button'
              className='primary-button'
              onClick={handleReservationClick}
            >
              Reserve a Table
            </NavLink>
          </div>
          <div className='hero-image'>
            <img src={FoodImg} alt='Restaurant Food' />
          </div>
        </div>
      </section>
    </main>
  );
};
export default Home;
