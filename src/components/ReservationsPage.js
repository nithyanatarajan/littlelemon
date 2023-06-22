import { useReducer } from 'react';
import ReservationsForm from './ReservationsForm';
import './ReservationsPage.css';
import {
  timesReducer,
  timesInitialiser,
} from '../reducers/ReservationsReducer';

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
    <div className='form-wrapper'>
      <h3>Reserve a table</h3>
      <ReservationsForm
        onSubmit={handleSubmit}
        availableTimes={availableTimes}
        updateAvailableTimesFor={updateAvailableTimesFor}
      />
    </div>
  );
};
export default ReservationsPage;
