import React from 'react';
import { render, screen } from '@testing-library/react';
import BookingPage from '../BookingPage';
import BookingForm from '../../components/BookingForm';
import { fetchAPI, submitAPI } from '../../assets/api';

jest.mock('../../components/BookingForm', () => jest.fn(() => null));
jest.mock('../../assets/api');
jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(() => {}),
}));

describe('BookingPage', () => {
  beforeEach(() => {
    BookingForm.mockReset();
    fetchAPI.mockReset();
    submitAPI.mockReset();
  });

  test('should render page title and form', () => {
    fetchAPI.mockReturnValue(['17:00', '18:30']);
    submitAPI.mockReturnValue(true);
    render(<BookingPage />);

    const pageTitle = screen.getByText('Book a table');

    expect(pageTitle).toBeInTheDocument();
    expect(BookingForm).toHaveBeenCalledWith(
      expect.objectContaining({
        availableTimes: ['17:00', '18:30'],
        onSubmit: expect.any(Function),
        updateAvailableTimesFor: expect.any(Function),
      }),
      {}
    );
  });
});
