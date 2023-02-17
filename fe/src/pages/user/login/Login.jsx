import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import api from '../../../apis/api';

const Login = () => {
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState(null);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    api
      .post('/login', {
        ...formData,
      })
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        setErrorMessage(error.response.data.message);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-center h-screen w-screen items-center">
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <h1 className="text-center text-2xl font-bold text-gray-600 mb-6">Login</h1>
          <div className="w-3/4 mb-6">
            <input
              className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500"
              placeholder="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="w-3/4 mb-6">
            <input
              className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500"
              type="password"
              placeholder="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errorMessage && <div className="text-red-600">{errorMessage}</div>}
          </div>
          <div className="w-3/4 mt-4">
            <button className="py-4 bg-blue-400 w-full rounded text-blue-50 front-bold hover:bg-blue-700" type="submit">Login</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
