import { useReducer } from 'react';
import BookingForm from './BookingForm';
import './BookingPage.css';
import { timesReducer, timesInitialiser } from '../reducers/BookingReducer';
import Hero from './Hero';

const BookingPage = () => {
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
  };

  return (
    <>
      <Hero />
      <div className='form-wrapper'>
        <h2>Book a table</h2>
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
