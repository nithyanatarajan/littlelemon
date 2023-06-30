import React from 'react';
import { render } from '@testing-library/react';
import { useLocation } from 'react-router-dom';
import BookingConfirmationPage from '../BookingConfirmationPage';

jest.mock('react-router-dom', () => ({
  useLocation: jest.fn(),
}));

describe('BookingConfirmationPage', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should render when location state is empty', async () => {
    useLocation.mockReturnValue({});

    const { container } = render(<BookingConfirmationPage />);

    expect(container).toHaveTextContent('Booking Confirmed!');
    expect(container).toHaveTextContent(
      /Hello Guest, your booking has been confirmed/
    );
  });

  test('should render when location state is present', async () => {
    useLocation.mockReturnValue({
      state: {
        bookingData: {
          firstName: 'first',
          lastName: 'last',
          date: '2023-06-22',
          time: '17:30',
        },
      },
    });

    const { container } = render(<BookingConfirmationPage />);

    expect(container).toHaveTextContent('Booking Confirmed!');
    expect(container).toHaveTextContent(
      /Hello first last, your booking has been confirmed on 2023-06-22 at 17:30\./
    );
  });
});
