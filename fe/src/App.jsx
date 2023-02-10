import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import DashboardPage from './pages/user/dashboard/DashboardPage';
import Register from './pages/user/register/Register';

const App = () => (
  <Routes>
    <Route path="/" element={<DashboardPage />} />
    <Route path="/register" element={<Register />} />
  </Routes>
);

export default App;
