import React from 'react';
import { render, screen } from '@testing-library/react';
import ReservationsForm from '../ReservationsForm';

describe('ReservationsForm', () => {
  test('should render the form with fields and a submit button', () => {
    render(<ReservationsForm onSubmit={() => {}} />);

    const firstNameInput = screen.getByLabelText('First Name');
    const lastNameInput = screen.getByLabelText('Last Name');
    const button = screen.getByRole('button', { name: 'Reserve a Table' });

    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
