import React from 'react';
import { render, screen } from '@testing-library/react';
import ReservationsPage from '../ReservationsPage';

jest.mock('../ReservationsForm', () => () => (
  <div data-testid='reservations-form' />
));

describe('ReservationsPage', () => {
  test('should render page title and form', () => {
    render(<ReservationsPage />);

    const pageTitle = screen.getByText('Reserve a table');
    const reservationsForm = screen.getByTestId('reservations-form');

    expect(pageTitle).toBeInTheDocument();
    expect(reservationsForm).toBeInTheDocument();
  });
});
