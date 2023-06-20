import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import ReservationsPage from './ReservationsPage';

const Main = () => (
  <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/reservations' element={<ReservationsPage />} />
  </Routes>
);

export default Main;
