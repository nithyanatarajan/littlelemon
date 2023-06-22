const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

export const timesReducer = (state, action) => {
  /*
  state = { '22-06-2022': availableTimes }
  action = {date: selectedDate, time: selectedTime}
  */
  const availableTimes = state[action.date] || initialState;
  switch (action.type) {
    case 'UPDATE_AVAILABLE_TIMES':
      return {
        ...state,
        [action.date]: availableTimes.filter((time) => time !== action.time),
      };
    default:
      return state;
  }
};
export const timesInitialiser = () => initialState;
