const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

// eslint-disable-next-line arrow-body-style
export const timesReducer = (availableTimes, action) => {
  /*
  state = availableTimes
  action = {date: selectedDate, time: selectedTime}
  */
  return availableTimes.filter((time) => time !== action.time);
};

export const timesInitialiser = () => initialState;
