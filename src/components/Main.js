import FoodImg from '../assets/restaurantfood.jpg';
import React from 'react';

const Main = () => {
  return (
    <main>
      <section className='hero'>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <a href='#reserve' role='button' className='button'>
          Reserve a table now
        </a>
        <img src={FoodImg} alt='Restaurant Food' />
      </section>
    </main>
  );
};
export default Main;
