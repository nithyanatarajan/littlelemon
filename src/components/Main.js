import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import BookingPage from './BookingPage';

const Main = () => (
  <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/booking' element={<BookingPage />} />
  </Routes>
);

export default Main;
