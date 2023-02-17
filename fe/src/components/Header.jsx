import React from 'react';
import { useNavigate } from 'react-router-dom';

import api from '../apis/api';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = (event) => {
    event.preventDefault();
    api
      .post('/logout')
      .then(() => {
        navigate('/login');
      });
  };

  return (
    <header className="flex justify-between items-center bg-slate-800 p-4">
      <div className="flex text-white">
        <a href="/" className="flex items-center">
          <span className="self-center text-xl front-semibold whitespace-nowrap dark:text-white">
            E-Learning System
          </span>
        </a>
      </div>

      <div className="flex text-white ">
        <button
          type="button"
          className="py-2 bg-blue-400 w-16 rounded text-blue-50 font-bold hover:bg-blue-700"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </header>
  );
};
export default Header;
