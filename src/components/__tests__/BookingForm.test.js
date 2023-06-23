import React from 'react';
import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BookingForm from '../BookingForm';

describe('BookingForm', () => {
  describe('render form fields', () => {
    test('should render the form with fields and a submit button', () => {
      render(
        <BookingForm
          onSubmit={() => {}}
          availableTimes={['17:00', '18:00', '19:00']}
          updateAvailableTimesFor={() => {}}
        />
      );

      const firstNameInput = screen.getByLabelText('First Name');
      const lastNameInput = screen.getByLabelText('Last Name');
      const dateInput = screen.getByLabelText('Choose date');
      const timeInput = screen.getByLabelText('Choose time');
      const guestsInput = screen.getByLabelText('Number of guests');
      const occasionInput = screen.getByLabelText('Occasion');

      const button = screen.getByRole('button', { name: 'Book a table' });

      expect(firstNameInput).toBeInTheDocument();
      expect(lastNameInput).toBeInTheDocument();
      expect(dateInput).toBeInTheDocument();
      expect(timeInput).toBeInTheDocument();
      expect(guestsInput).toBeInTheDocument();
      expect(occasionInput).toBeInTheDocument();
      expect(button).toBeInTheDocument();
      expect(button).toBeDisabled();
    });

    test('should render the form with no extra fields', () => {
      render(
        <BookingForm
          onSubmit={() => {}}
          availableTimes={['17:00', '18:00', '19:00']}
          updateAvailableTimesFor={() => {}}
        />
      );

      const inputElements = screen.getAllByRole('textbox');
      const buttonElements = screen.getAllByRole('button');
      const dropdownElements = screen.getAllByRole('combobox');
      const numberElements = screen.getAllByRole('spinbutton');

      expect(inputElements.length).toBe(2);
      expect(buttonElements.length).toBe(1);
      expect(dropdownElements.length).toBe(2);
      expect(numberElements.length).toBe(1);
    });
  });

  describe('invalid form', () => {
    const testErrorMessageOnBlur = async (inputLabel, errorMessage) => {
      render(
        <BookingForm
          onSubmit={() => {}}
          availableTimes={['17:00', '18:00', '19:00']}
          updateAvailableTimesFor={() => {}}
        />
      );

      const input = screen.getByLabelText(inputLabel);
      const button = screen.getByRole('button', { name: 'Book a table' });

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

    test('should show error message when date is empty and focus moves out', async () => {
      await testErrorMessageOnBlur('Choose date', /Date is required/i);
    });

    test('should show error message when time is empty and focus moves out', async () => {
      await testErrorMessageOnBlur('Choose time', /Time is required/i);
    });

    test('should show error message when occasion is empty and focus moves out', async () => {
      await testErrorMessageOnBlur('Occasion', /Occasion is required/i);
    });
  });

  describe('valid form', () => {
    test('should submit the form with valid data', async () => {
      const handleSubmit = jest.fn().mockReturnValue(true);

      render(
        <BookingForm
          onSubmit={handleSubmit}
          availableTimes={['17:00', '18:00', '19:00']}
          updateAvailableTimesFor={() => {}}
        />
      );
      const user = userEvent.setup();

      const firstNameInput = screen.getByLabelText('First Name');
      const lastNameInput = screen.getByLabelText('Last Name');
      const dateInput = screen.getByLabelText('Choose date');
      const timeInput = screen.getByLabelText('Choose time');
      const guestsInput = screen.getByLabelText('Number of guests');
      const occasionInput = screen.getByLabelText('Occasion');
      const button = screen.getByRole('button', { name: 'Book a table' });

      await user.type(firstNameInput, 'John');
      await user.type(lastNameInput, 'Dee');
      await user.type(dateInput, '2023-06-20');
      await user.selectOptions(timeInput, '17:00');
      await user.type(guestsInput, '2');
      await user.selectOptions(occasionInput, 'Birthday');

      expect(button).not.toBeDisabled();

      await user.click(button);

      await waitFor(() => {
        expect(handleSubmit).toHaveBeenCalledWith({
          firstName: 'John',
          lastName: 'Dee',
          date: '2023-06-20',
          time: '17:00',
          guests: 12,
          occasion: 'Birthday',
        });
      });
    });

    test('should clear form on submission', async () => {
      const handleSubmit = jest.fn().mockReturnValue(true);
      render(
        <BookingForm
          onSubmit={handleSubmit}
          availableTimes={['17:00', '18:00', '19:00']}
          updateAvailableTimesFor={() => {}}
        />
      );
      const user = userEvent.setup();

      const firstNameInput = screen.getByLabelText('First Name');
      const lastNameInput = screen.getByLabelText('Last Name');
      const dateInput = screen.getByLabelText('Choose date');
      const timeInput = screen.getByLabelText('Choose time');
      const guestsInput = screen.getByLabelText('Number of guests');
      const occasionInput = screen.getByLabelText('Occasion');
      const button = screen.getByRole('button', { name: 'Book a table' });

      await user.type(firstNameInput, 'John');
      await user.type(lastNameInput, 'Dee');
      await user.type(dateInput, '2023-06-20');
      await user.selectOptions(timeInput, '17:00');
      await user.type(guestsInput, '2');
      await user.selectOptions(occasionInput, 'Birthday');
      await user.click(button);

      await waitFor(() => {
        expect(firstNameInput.value).toBe('');
        expect(lastNameInput.value).toBe('');
        expect(dateInput.value).toBe('');
        expect(timeInput.value).toBe('');
        expect(guestsInput.value).toBe('1');
        expect(occasionInput.value).toBe('');
      });
    });

    test('should not clear form when submission fails', async () => {
      const handleSubmit = jest.fn().mockReturnValue(false);
      render(
        <BookingForm
          onSubmit={handleSubmit}
          availableTimes={['17:00', '18:00', '19:00']}
          updateAvailableTimesFor={() => {}}
        />
      );
      const user = userEvent.setup();

      const firstNameInput = screen.getByLabelText('First Name');
      const lastNameInput = screen.getByLabelText('Last Name');
      const dateInput = screen.getByLabelText('Choose date');
      const timeInput = screen.getByLabelText('Choose time');
      const guestsInput = screen.getByLabelText('Number of guests');
      const occasionInput = screen.getByLabelText('Occasion');
      const button = screen.getByRole('button', { name: 'Book a table' });

      await user.type(firstNameInput, 'John');
      await user.type(lastNameInput, 'Dee');
      await user.type(dateInput, '2023-06-20');
      await user.selectOptions(timeInput, '17:00');
      await user.type(guestsInput, '2');
      await user.selectOptions(occasionInput, 'Birthday');
      await user.click(button);

      await waitFor(() => {
        expect(firstNameInput.value).not.toBe('');
        expect(lastNameInput.value).not.toBe('');
        expect(dateInput.value).not.toBe('');
        expect(timeInput.value).not.toBe('');
        expect(guestsInput.value).not.toBe('1');
        expect(occasionInput.value).not.toBe('');
      });

      await waitFor(() => {
        expect(
          screen.queryByText('Form submission failed, try again later.')
        ).toBeInTheDocument();
      });
    });
  });
});
