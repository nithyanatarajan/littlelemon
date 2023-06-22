import React from 'react';
import { render, screen } from '@testing-library/react';
import ReservationsPage from '../ReservationsPage';
import ReservationsForm from '../ReservationsForm';
import { fetchAPI } from '../../assets/api';

jest.mock('../ReservationsForm', () => jest.fn(() => null));
jest.mock('../../assets/api');
describe('ReservationsPage', () => {
  beforeEach(() => {
    ReservationsForm.mockReset();
    fetchAPI.mockReset();
  });

  test('should render page title and form', () => {
    fetchAPI.mockReturnValue(['17:00', '18:30']);
    render(<ReservationsPage />);

    const pageTitle = screen.getByText('Reserve a table');

    expect(pageTitle).toBeInTheDocument();
    expect(ReservationsForm).toHaveBeenCalledWith(
      expect.objectContaining({
        availableTimes: ['17:00', '18:30'],
        onSubmit: expect.any(Function),
        updateAvailableTimesFor: expect.any(Function),
      }),
      {}
    );
  });
});
