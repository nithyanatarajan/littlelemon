/* eslint-disable no-console */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BookingPage from '../BookingPage';
import { fetchAPI } from '../../assets/api';

jest.mock('../../assets/api', () => ({
  fetchAPI: jest.fn(),
}));

describe('BookingPage', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    console.log.mockRestore();
    jest.clearAllMocks();
  });

  test('should submit Booking Form', async () => {
    const selectedDate = '2023-06-20';
    fetchAPI.mockImplementation(() => ['18:00', '19:00']);

    render(<BookingPage />);

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
    await user.type(dateInput, selectedDate);
    await user.tab();
    await user.selectOptions(timeInput, '18:00');
    await user.clear(guestsInput);
    await user.type(guestsInput, '2');
    await user.selectOptions(occasionInput, 'Birthday');

    expect(button).not.toBeDisabled();
    await user.click(button);

    await waitFor(() => {
      expect(fetchAPI).toHaveBeenCalledWith(new Date(selectedDate));
    });

    await waitFor(() => {
      expect(console.log).toHaveBeenCalledWith({
        firstName: 'John',
        lastName: 'Dee',
        date: selectedDate,
        time: '18:00',
        guests: 2,
        occasion: 'Birthday',
      });
    });
  });

  test('should check availableTimes state changes', async () => {
    fetchAPI.mockImplementation((date) => {
      const dateStr = date.toISOString().substring(0, 10);
      const schedule = {
        '2023-06-20': ['18:00', '18:30'],
        '2023-06-21': ['17:00', '18:30'],
      };
      return schedule[dateStr] || ['19:00'];
    });

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

    await user.click(button);

    await user.type(dateInput, '2023-06-21');
    await user.tab();
    await waitFor(() => {
      expect(screen.queryByRole('option', { name: '17:00' })).not.toBeNull();
    });

    await waitFor(() => {
      expect(fetchAPI).toBeCalledTimes(3);
      expect(fetchAPI).toHaveBeenNthCalledWith(2, new Date('2023-06-20'));
      expect(fetchAPI).toHaveBeenNthCalledWith(3, new Date('2023-06-21'));
    });
  });
});
