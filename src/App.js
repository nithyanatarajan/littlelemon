import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import BookingConfirmationPage from './pages/BookingConfirmationPage';
import ComingSoonPage from './pages/ComingSoonPage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/booking' element={<BookingPage />} />
      <Route path='/bookingconfirm' element={<BookingConfirmationPage />} />
      <Route path='/about' element={<ComingSoonPage />} />
      <Route path='/menu' element={<ComingSoonPage />} />
      <Route path='/order' element={<ComingSoonPage />} />
      <Route path='/login' element={<ComingSoonPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
    <Footer />
  </>
);

export default App;
