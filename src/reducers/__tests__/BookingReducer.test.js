import { timesInitialiser, timesReducer } from '../BookingReducer';
import { fetchAPI } from '../../assets/api';

jest.mock('../../assets/api');

describe('BookingReducer', () => {
  beforeEach(() => {
    fetchAPI.mockReset();
  });

  test('should initialise state', () => {
    fetchAPI.mockReturnValue(['17:00', '18:30']);

    const initialisedState = timesInitialiser();

    expect(initialisedState).toEqual(['17:00', '18:30']);
  });

  describe('timesReducer', () => {
    test('should fetch time for a given date', () => {
      fetchAPI.mockReturnValue(['17:00', '18:30']);
      const state = [];
      const action = {
        date: '2022-06-22',
        type: 'FETCH_AVAILABLE_TIMES',
      };

      const modifiedState = timesReducer(state, action);

      expect(modifiedState).toEqual(['17:00', '18:30']);
      expect(fetchAPI).toHaveBeenCalledWith(new Date('2022-06-22'));
    });

    test('should return same state when action type not present', () => {
      const state = ['21:00', '22:00'];
      const action = {
        date: '2022-06-22',
      };

      const modifiedState = timesReducer(state, action);

      expect(modifiedState).toEqual(['21:00', '22:00']);
      expect(fetchAPI).not.toHaveBeenCalled();
    });
  });
});
