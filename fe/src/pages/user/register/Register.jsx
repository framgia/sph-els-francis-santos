import React from 'react';
import useRegister from './useRegister';

const Register = () => {
  const {
    handleSubmit,
    formData,
    handleChange,
    validation,
    errorPassword,
  } = useRegister();

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-center h-screen w-screen items-center">
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <h1 className="text-center text-2xl font-bold text-gray-600 mb-6">SIGNUP</h1>
          <div className="w-3/4 mb-6">
            <input
              className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500"
              placeholder="name"
              name="name"
              value={formData.name}
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
            {validation && <div style={{ color: 'red' }}>{validation}</div>}

          </div>
          <div className="w-3/4 mt-4">
            <button className="py-4 bg-blue-400 w-full rounded text-blue-50 front-bold hover:bg-blue-700" type="submit">Register</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Register;
