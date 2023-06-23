/* eslint-disable no-console */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BookingPage from '../BookingPage';
import { fetchAPI } from '../../assets/api';

jest.mock('../../assets/api');

function setupStubs() {
  jest.spyOn(console, 'log').mockImplementation(() => {});
  fetchAPI.mockImplementation((date) => {
    const dateStr = date.toISOString().substring(0, 10);
    if (dateStr === '2023-06-20') {
      return ['18:00', '18:30'];
    }
    if (dateStr === '2023-06-21') {
      return ['17:00', '18:30'];
    }
    return ['19:00'];
  });
}

function resetStubs() {
  fetchAPI.mockReset();
  console.log.mockRestore();
}

describe('BookingPage', () => {
  afterEach(() => {
    resetStubs();
  });

  test('should check availableTimes state changes', async () => {
    setupStubs();
    render(<BookingPage />);
    const user = userEvent.setup();

    const firstNameInput = screen.getByLabelText('First Name');
    const lastNameInput = screen.getByLabelText('Last Name');
    const dateInput = screen.getByLabelText('Choose date');
    const timeInput = screen.getByLabelText('Choose time');
    const guestsInput = screen.getByLabelText('Number of guests');
    const occasionInput = screen.getByLabelText('Occasion');
    const button = screen.getByRole('button', { name: 'Book a table' });

    expect(await screen.queryByRole('option', { name: '18:00' })).toBeNull();
    await user.type(firstNameInput, 'John');
    await user.type(lastNameInput, 'Dee');
    await user.type(dateInput, '2023-06-20');
    await user.tab();
    await waitFor(() => {
      expect(screen.queryByRole('option', { name: '18:00' })).not.toBeNull();
    });

    await user.selectOptions(timeInput, '18:00');
    await user.clear(guestsInput);
    await user.type(guestsInput, '2');
    await user.selectOptions(occasionInput, 'Birthday');

    expect(button).not.toBeDisabled();

    await user.click(button);

    await waitFor(() => {
      expect(console.log).toBeCalledWith({
        firstName: 'John',
        lastName: 'Dee',
        date: '2023-06-20',
        time: '18:00',
        guests: 2,
        occasion: 'Birthday',
      });
    });

    await user.type(dateInput, '2023-06-21');
    await user.tab();
    await waitFor(() => {
      expect(screen.queryByRole('option', { name: '17:00' })).not.toBeNull();
    });
  });
});
