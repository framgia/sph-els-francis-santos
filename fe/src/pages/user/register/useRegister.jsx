import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import api from '../../../apis/api';

const useRegister = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errorPassword, setErrorPassword] = useState('');

  const [validation, setValidation] = useState(null);

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
      api
        .post('/register', {
          ...formData,
        })
        .then(() => {
          navigate('/');
        })
        .catch((error) => {
          setValidation(error.response.data.message);
        });
    }
  };

  return {
    handleSubmit,
    formData,
    handleChange,
    validation,
    errorPassword,
  };
};
export default useRegister;
