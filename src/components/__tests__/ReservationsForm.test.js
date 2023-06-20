import React from 'react';
import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ReservationsForm from '../ReservationsForm';

describe('ReservationsForm', () => {
  describe('render form fields', () => {
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
  });
  describe('invalid form', () => {
    test('should disable button when only firstname is given', async () => {
      const handleSubmit = jest.fn();
      render(<ReservationsForm onSubmit={handleSubmit} />);
      const user = userEvent.setup();

      const firstNameInput = screen.getByLabelText('First Name');
      const button = screen.getByRole('button', { name: 'Reserve a Table' });

      await user.type(firstNameInput, 'John');

      expect(button).toBeDisabled();
    });
    const testErrorMessageOnBlur = async (inputLabel, errorMessage) => {
      const handleSubmit = jest.fn();
      render(<ReservationsForm onSubmit={handleSubmit} />);

      const input = screen.getByLabelText(inputLabel);
      const button = screen.getByRole('button', { name: 'Reserve a Table' });

      await input.focus();
      await act(() => {
        input.blur();
      });

      await waitFor(() => {
        expect(screen.getByText(errorMessage)).toBeInTheDocument();
      });
      expect(button).toBeDisabled();
    };

    test('should show error message when firstname is empty and focus moves out', async () => {
      await testErrorMessageOnBlur('First Name', /First Name is required/i);
    });

    test('should show error message when lastname is empty and focus moves out', async () => {
      await testErrorMessageOnBlur('Last Name', /Last Name is required/i);
    });
  });

  describe('valid form', () => {
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
});
