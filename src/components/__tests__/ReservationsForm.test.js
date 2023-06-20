import React from 'react';
import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
    expect(button).toBeDisabled();
  });

  test('should disable button when only firstname is given', async () => {
    const handleSubmit = jest.fn();
    render(<ReservationsForm onSubmit={handleSubmit} />);
    const user = userEvent.setup();

    const firstNameInput = screen.getByLabelText('First Name');
    const button = screen.getByRole('button', { name: 'Reserve a Table' });

    await user.type(firstNameInput, 'John');

    expect(button).toBeDisabled();
  });

  test('should show error message when firstname is empty and focus moves out', async () => {
    const handleSubmit = jest.fn();
    render(<ReservationsForm onSubmit={handleSubmit} />);

    const firstNameInput = screen.getByLabelText('First Name');
    const button = screen.getByRole('button', { name: 'Reserve a Table' });
    await firstNameInput.focus();
    await act(() => {
      firstNameInput.blur();
    });

    await waitFor(() => {
      expect(screen.getByText(/First Name is required/i)).toBeInTheDocument();
    });
    expect(button).toBeDisabled();
  });

  test('should show error message when lastname is empty and focus moves out', async () => {
    const handleSubmit = jest.fn();
    render(<ReservationsForm onSubmit={handleSubmit} />);

    const lastNameInput = screen.getByLabelText('Last Name');
    const button = screen.getByRole('button', { name: 'Reserve a Table' });
    await lastNameInput.focus();
    await act(() => {
      lastNameInput.blur();
    });

    await waitFor(() => {
      expect(screen.getByText(/Last Name is required/i)).toBeInTheDocument();
    });
    expect(button).toBeDisabled();
  });

  test('should submit the form with valid data and clear on submission', async () => {
    const handleSubmit = jest.fn();
    render(<ReservationsForm onSubmit={handleSubmit} />);
    const user = userEvent.setup();

    const firstNameInput = screen.getByLabelText('First Name');
    const lastNameInput = screen.getByLabelText('Last Name');
    const button = screen.getByRole('button', { name: 'Reserve a Table' });

    await user.type(firstNameInput, 'John');
    await user.type(lastNameInput, 'Dee');

    expect(button).not.toBeDisabled();

    await user.click(button);

    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalledWith({
        firstName: 'John',
        lastName: 'Dee',
      });
    });

    await waitFor(() => {
      expect(firstNameInput.value).toBe('');
      expect(lastNameInput.value).toBe('');
    });
  });
});
