import { useReducer } from 'react';
import ReservationsForm from './ReservationsForm';
import './ReservationsPage.css';
import {
  timesReducer,
  timesInitialiser,
} from '../reducers/ReservationsReducer';

const ReservationsPage = () => {
  const [state, dispatch] = useReducer(timesReducer, {});

  // availableTimesFor returns existing availableTimes or initialState
  const availableTimesFor = (date) => state[date] || [...timesInitialiser()];

  // updateAvailableTimesFor dispatches date and time to reducer
  const updateAvailableTimesFor = (date, time) => {
    dispatch({ type: 'UPDATE_AVAILABLE_TIMES', date, time });
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
        availableTimesFor={availableTimesFor}
        updateAvailableTimesFor={updateAvailableTimesFor}
      />
    </div>
  );
};
export default ReservationsPage;
