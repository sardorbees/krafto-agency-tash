import React, { useState } from 'react';
import axios from '../api/axiosInstance';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/register/', form);
    navigate('/login');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={e => setForm({...form, username: e.target.value})} placeholder="Username" />
      <input onChange={e => setForm({...form, email: e.target.value})} placeholder="Email" />
      <input onChange={e => setForm({...form, password: e.target.value})} type="password" placeholder="Password" />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
