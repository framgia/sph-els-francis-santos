import React, { useState } from 'react';
import axios from 'axios';
import Modal from '../../../components/Modal';

const Register = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
  });
  const [errorPassword, setErrorPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => {
    setShowModal(false);
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setErrorPassword('Passwords do not match');
    } else {
      setErrorPassword('');
      axios.post('http://127.0.0.1:8000/api/register', {
        ...formData,
      })
        .then(() => {
          window.location.pathname = '/';
        })
        .catch((error) => {
          if (error.response.status === 422) {
            setErrorEmail('The Email has Already Taken');
          }
        });
    }
  };

  const actionBar = (
    <div>
      <button type="button" onClick={handleClose}>Ok</button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>A user Registered Successfully</p>
    </Modal>
  );
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-center h-screen w-screen items-center">
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <h1 className="text-center text-2xl font-bold text-gray-600 mb-6">SIGNUP</h1>
          <div className="w-3/4 mb-6">
            <input
              className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500"
              placeholder="Fullname"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
            />
          </div>
          <div className="w-3/4 mb-6">
            <input
              className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errorEmail && <div style={{ color: 'red' }}>{errorEmail}</div>}
          </div>
          <div className="w-3/4 mb-6">
            <input
              className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500"
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="w-3/4 mb-6">
            <input
              className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500"
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errorPassword && <div style={{ color: 'red' }}>{errorPassword}</div>}
          </div>
          <div className="w-3/4 mt-4">
            <button className="py-4 bg-blue-400 w-full rounded text-blue-50 front-bold hover:bg-blue-700" type="submit">Register</button>
            {showModal && modal}
          </div>
        </div>
      </div>
    </form>
  );
};

export default Register;
