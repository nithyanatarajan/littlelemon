import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ReservationsPage from '../ReservationsPage';

describe('ReservationsPage', () => {
  test('should check availableTimes state changes', async () => {
    const consoleLog = jest.spyOn(console, 'log').mockImplementation(() => {});

    render(<ReservationsPage />);
    const user = userEvent.setup();

    const firstNameInput = screen.getByLabelText('First Name');
    const lastNameInput = screen.getByLabelText('Last Name');
    const dateInput = screen.getByLabelText('Choose date');
    const timeInput = screen.getByLabelText('Choose time');
    const guestsInput = screen.getByLabelText('Number of guests');
    const occasionInput = screen.getByLabelText('Occasion');
    const button = screen.getByRole('button', { name: 'Reserve a Table' });

    expect(screen.queryByRole('option', { name: '18:00' })).not.toBeNull();
    await user.type(firstNameInput, 'John');
    await user.type(lastNameInput, 'Dee');
    await user.type(dateInput, '2023-06-20');
    await user.selectOptions(timeInput, '18:00');
    await user.clear(guestsInput);
    await user.type(guestsInput, '2');
    await user.selectOptions(occasionInput, 'Birthday');

    expect(button).not.toBeDisabled();

    await user.click(button);

    await waitFor(() => {
      expect(consoleLog).toBeCalledWith({
        firstName: 'John',
        lastName: 'Dee',
        date: '2023-06-20',
        time: '18:00',
        guests: 2,
        occasion: 'Birthday',
      });
    });

    await waitFor(() => {
      expect(screen.queryByRole('option', { name: '18:00' })).toBeNull();
    });

    consoleLog.mockReset();
  });
});
