import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import BookingConfirmationPage from './pages/BookingConfirmationPage';
import './App.css';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/booking' element={<BookingPage />} />
      <Route path='/bookingconfirm' element={<BookingConfirmationPage />} />
    </Routes>
    <Footer />
  </>
);

export default App;
