import React from 'react';
import { render, screen } from '@testing-library/react';
import ReservationsPage from '../ReservationsPage';
import ReservationsForm from '../ReservationsForm';

jest.mock('../ReservationsForm', () => jest.fn(() => null));

describe('ReservationsPage', () => {
  test('should render page title and form', () => {
    render(<ReservationsPage />);

    const pageTitle = screen.getByText('Reserve a table');

    expect(pageTitle).toBeInTheDocument();
    expect(ReservationsForm).toHaveBeenCalledWith(
      expect.objectContaining({
        availableTimesFor: expect.any(Function),
        onSubmit: expect.any(Function),
        updateAvailableTimesFor: expect.any(Function),
      }),
      {}
    );
  });
});
