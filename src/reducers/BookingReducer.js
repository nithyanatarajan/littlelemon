import { fetchAPI } from '../assets/api';
import { getToday } from '../utils/dateUtils';

export const timesReducer = (state, action) => {
  /*
  state = availableTimes
  action = {date: selectedDate}
  */

  switch (action.type) {
    case 'FETCH_AVAILABLE_TIMES': {
      const { date } = action;
      return fetchAPI(new Date(date));
    }
    default:
      return state;
  }
};
export const timesInitialiser = () => fetchAPI(getToday());
