import React from 'react';
import { Route, Routes } from 'react-router-dom';

import DashboardPage from './pages/user/dashboard/DashboardPage';
import Register from './pages/user/register/Register';
import Login from './pages/user/login/Login';

import './App.css';

const App = () => (
  <Routes>
    <Route path="/" element={<DashboardPage />} />
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
  </Routes>
);

export default App;
