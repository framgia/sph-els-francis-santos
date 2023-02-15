import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/user/dashboard/DashboardPage';
import Register from './pages/user/register/Register';
import './App.css';

const App = () => (
  <Routes>
    <Route path="/" element={<DashboardPage />} />
    <Route path="/register" element={<Register />} />
  </Routes>
);

export default App;
