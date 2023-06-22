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

  describe('timesReducer', () => {
    describe('should filter time for a given date', () => {
      test('when date is not present in state', () => {
        const state = {};
        const action = {
          time: '17:00',
          date: '22-06-2022',
          type: 'UPDATE_AVAILABLE_TIMES',
        };

        const modifiedState = timesReducer(state, action);

        const expectedState = {
          '22-06-2022': ['18:00', '19:00', '20:00', '21:00', '22:00'],
        };
        expect(modifiedState).toEqual(expectedState);
      });

      test('when date already present in state', () => {
        const state = {
          '22-06-2022': ['21:00', '22:00'],
        };
        const action = {
          time: '22:00',
          date: '22-06-2022',
          type: 'UPDATE_AVAILABLE_TIMES',
        };

        const modifiedState = timesReducer(state, action);

        const expectedState = {
          '22-06-2022': ['21:00'],
        };
        expect(modifiedState).toEqual(expectedState);
      });
    });
    test('should return same state when action type not present', () => {
      const state = {
        '22-06-2022': ['21:00', '22:00'],
      };
      const action = {
        time: '22:00',
        date: '22-06-2022',
      };

      const modifiedState = timesReducer(state, action);

      const expectedState = {
        '22-06-2022': ['21:00', '22:00'],
      };
      expect(modifiedState).toEqual(expectedState);
    });
  });
});
