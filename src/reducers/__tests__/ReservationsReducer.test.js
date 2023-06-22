import { timesReducer, timesInitialiser } from '../ReservationsReducer';

describe('ReservationsReducer', () => {
  test('should initialise state', () => {
    const initialisedState = timesInitialiser();

    expect(initialisedState).toEqual([
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00',
      '22:00',
    ]);
  });

  test('should update state', () => {
    const availableTimes = ['17:00', '18:00', '19:00'];
    const action = { time: '17:00' };

    const modifiedState = timesReducer(availableTimes, action);

    expect(modifiedState).toEqual(['18:00', '19:00']);
  });
});
