import FoodImg from '../assets/restaurantfood.jpg';
import React from 'react';
import './Main.css';

const Main = () => {
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
            <a href='#reserve' role='button' className='primary-button'>
              Reserve a table
            </a>
          </div>
          <div className='hero-image'>
            <img src={FoodImg} alt='Restaurant Food' />
          </div>
        </div>
      </section>
    </main>
  );
};
export default Main;
