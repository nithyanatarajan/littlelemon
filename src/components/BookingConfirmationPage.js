/* eslint-disable react/jsx-one-expression-per-line */
import { useLocation } from 'react-router-dom';
import Hero from './Hero';
import './BookingConfirmationPage.css';

const BookingConfirmationPage = () => {
  const { state } = useLocation();
  const { firstName, lastName, date, time } = state?.bookingData || {};
  const username = firstName ? `${firstName} ${lastName}` : 'Guest';
  const datetime = date ? ` on ${date} at ${time}` : '';
  return (
    <>
      <Hero />
      <section className='confirmation'>
        <h1>Booking Confirmed!</h1>
        <p>
          Hello <span className='card-title'>{username}</span>, your booking has
          been confirmed{datetime}.
        </p>
      </section>
    </>
  );
};

export default BookingConfirmationPage;
