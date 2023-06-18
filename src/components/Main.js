import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';

const Main = () => (
  <Routes>
    <Route path='/' element={<HomePage />} />
  </Routes>
);

export default Main;
