import React, { useState } from 'react';
import axiosInstance from '../api/Api';

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post('token/', formData);
      localStorage.setItem('access_token', res.data.access);
      localStorage.setItem('refresh_token', res.data.refresh);
      onLogin();
    } catch (err) {
      setError('Неверные данные');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <input name="username" placeholder="Имя" onChange={handleChange} required />
      <input name="password" placeholder="Пароль" type="password" onChange={handleChange} required />
      <button type="submit">Войти</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default Login;
