import { useReducer } from 'react';
import ReservationsForm from './ReservationsForm';
import './ReservationsPage.css';
import {
  timesReducer,
  timesInitialiser,
} from '../reducers/ReservationsReducer';
import Hero from './Hero';

const ReservationsPage = () => {
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
        <h2>Reserve a table</h2>
        <ReservationsForm
          onSubmit={handleSubmit}
          availableTimes={availableTimes}
          updateAvailableTimesFor={updateAvailableTimesFor}
        />
      </div>
    </>
  );
};
export default ReservationsPage;
