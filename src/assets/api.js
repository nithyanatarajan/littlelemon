/* eslint-disable */
export const seededRandom = function (seed) {
  let m = 2 ** 35 - 31;
  let a = 185852;
  let s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

export const fetchAPI = function (date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ':00');
    }
    if (random() < 0.5) {
      result.push(i + ':30');
    }
  }
  return result;
};

export const submitAPI = function (formData) {
  return true;
};

/*
import { seededRandom, fetchAPI, submitAPI } from './assets/api';

jest.mock('./assets/api');

beforeEach(() => {
  seededRandom.mockReset();
  fetchAPI.mockReset();
  submitAPI.mockReset();
});

// Stubbing seededRandom function
seededRandom.mockReturnValue(() => 0.25);

// Stubbing fetchAPI function
fetchAPI.mockReturnValue(['17:00', '18:30']);

// Stubbing submitAPI function
submitAPI.mockReturnValue(true);

*/
