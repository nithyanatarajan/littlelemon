import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import BookingConfirmationPage from './BookingConfirmationPage';

const Main = () => (
  <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/booking' element={<BookingPage />} />
    <Route path='/bookingconfirm' element={<BookingConfirmationPage />} />
  </Routes>
);

export default Main;
