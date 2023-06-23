import React from 'react';
import PropTypes from 'prop-types';
import FoodImg from '../assets/restaurantfood.jpg';
import './Hero.css';

const Hero = ({ children }) => (
  <section className='hero'>
    <div className='hero-section'>
      <div className='hero-content'>
        <h1 className='display-title'>Little Lemon</h1>
        <h2 className='sub-title'>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        {children}
      </div>
      <div className='hero-image'>
        <img src={FoodImg} alt='Restaurant Food' />
      </div>
    </div>
  </section>
);

Hero.propTypes = {
  children: PropTypes.node,
};

Hero.defaultProps = {
  children: '',
};
export default Hero;
