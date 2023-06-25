import { getDateStr, getToday, getDateUpto } from '../dateUtils';

describe('dateUtils', () => {
  const dateStub = new Date('2023-06-26T07:30:15.103Z');
  beforeEach(() => {
    jest.spyOn(global.Date, 'now').mockImplementation(() => dateStub.valueOf());
  });

  afterEach(() => {
    global.Date.now.mockRestore();
  });

  describe('getDateStr', () => {
    test('returns the correct date string', () => {
      const result = getDateStr(dateStub);

      expect(result).toBe('2023-06-26');
    });
  });

  describe('getToday', () => {
    test("returns today's date with zeroed time", () => {
      const expectedDate = 1687764615103;
      const result = getToday();

      expect(result.valueOf()).toEqual(expectedDate);
    });
  });

  describe('getDateUpto', () => {
    test('returns the correct date up to a given number of days', () => {
      const expectedDate = 1688196615103;
      const numberOfDaysToAdd = 5;

      const result = getDateUpto(numberOfDaysToAdd);

      expect(result.valueOf()).toEqual(expectedDate);
    });
  });
});
