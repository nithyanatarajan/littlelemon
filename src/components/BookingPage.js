import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { timesReducer, timesInitialiser } from '../reducers/BookingReducer';
import BookingForm from './BookingForm';
import Hero from './Hero';
import './BookingPage.css';

const BookingPage = () => {
  const navigate = useNavigate();
  const [availableTimes, dispatch] = useReducer(
    timesReducer,
    [],
    timesInitialiser
  );

  const updateAvailableTimesFor = (date) => {
    dispatch({ type: 'FETCH_AVAILABLE_TIMES', date });
  };

  const handleSubmit = (values) => {
    // eslint-disable-next-line no-console
    console.log(values);
    const { firstName, lastName, date, time } = values;
    const bookingData = { firstName, lastName, date, time };
    navigate('/bookingconfirm', {
      state: { bookingData },
    });
  };

  return (
    <>
      <Hero />
      <div className='form-wrapper'>
        <h1>Book a table</h1>
        <BookingForm
          onSubmit={handleSubmit}
          availableTimes={availableTimes}
          updateAvailableTimesFor={updateAvailableTimesFor}
        />
      </div>
    </>
  );
};
export default BookingPage;
