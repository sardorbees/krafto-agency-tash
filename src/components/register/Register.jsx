import React, { useState } from 'react';
import axiosInstance from '../api/Api';

const Register = () => {
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });
    const [error, setError] = useState('');

    const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await axiosInstance.post('user/api/register/', formData);
            alert('Регистрация успешна! Войдите.');
        } catch (err) {
            setError('Ошибка регистрации');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <input name="username" placeholder="Имя" onChange={handleChange} required />
            <input name="email" placeholder="Email" type="email" onChange={handleChange} required />
            <input name="password" placeholder="Пароль" type="password" onChange={handleChange} required />
            <button type="submit">Зарегистрироваться</button>
            {error && <p>{error}</p>}
        </form>
    );
};

export default Register;
