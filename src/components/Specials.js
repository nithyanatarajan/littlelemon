import React from 'react';
import { NavLink } from 'react-router-dom';
import GreekSalad from '../assets/greek salad.jpg';
import Bruchetta from '../assets/bruchetta.svg';
import LemonDessert from '../assets/lemon dessert.jpg';
import './Specials.css';

const Specials = () => (
  <section className='specials'>
    <section className='specials-topbar'>
      <h1>This weeks specials!</h1>
      <NavLink to='/menu' role='button' className='primary-button'>
        Online Menu
      </NavLink>
    </section>
    <section className='specials-cards'>
      <article className='menu-card'>
        <img src={GreekSalad} alt='Special Menu' />
        <div className='menu-card-content'>
          <span className='card-heading'>
            <p className='card-title'>Greek Salad</p>
            <p className='menu-price'>$12.99</p>
          </span>
          <p className='menu-description'>
            Refreshing salad, made with tomato, lettuce, feta cheese, and
            olives. Dressed with salt, hot pepper, and olive oil.
          </p>
        </div>
        <NavLink to='/order' role='button' className='primary-button'>
          Order for Delivery
        </NavLink>
      </article>
      <article className='menu-card'>
        <img src={Bruchetta} alt='Special Menu' />
        <div className='menu-card-content'>
          <span className='card-heading'>
            <p className='card-title'>Bruschetta</p>
            <p className='menu-price'>$16.99</p>
          </span>
          <p className='menu-description'>
            Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned
            with salt and olive oil.
          </p>
        </div>
        <NavLink to='/order' role='button' className='primary-button'>
          Order for Delivery
        </NavLink>
      </article>
      <article className='menu-card'>
        <img src={LemonDessert} alt='Special Menu' />
        <div className='menu-card-content'>
          <span className='card-heading'>
            <p className='card-title'>Lemon Dessert</p>
            <p className='menu-price'>$8.50</p>
          </span>
          <p className='menu-description'>
            Fresh baked lemon bread coated in salt and sugar. Powdered in citrus
            and lemon zest.
          </p>
        </div>
        <NavLink to='/order' role='button' className='primary-button'>
          Order for Delivery
        </NavLink>
      </article>
    </section>
  </section>
);

export default Specials;
