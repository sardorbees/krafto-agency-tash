import React, { useState } from 'react';
import axios from 'axios';

const MessageForm = () => {
    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        phone: '',
        text: '',
    });

    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus(null);
        try {
            await axios.post('https://krafto-agency-admin.onrender.com/api/botmessages/messages/', formData); // ← укажи свой API
            setStatus('success');
            setFormData({ full_name: '', email: '', phone: '', text: '' });
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <div style={{ maxWidth: 500, margin: 'auto' }}>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <h2>Свяжитесь с нами</h2>
            <form onSubmit={handleSubmit}>
                <input
                    name="full_name"
                    placeholder="Ваше имя"
                    value={formData.full_name}
                    onChange={handleChange}
                    required
                /><br /><br />
                <input
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                /><br /><br />
                <input
                    name="phone"
                    placeholder="Телефон"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                /><br /><br />
                <textarea
                    name="text"
                    placeholder="Сообщение"
                    value={formData.text}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Отправить</button>
            </form>

            {status === 'success' && <p style={{ color: 'green' }}>✅ Сообщение отправлено</p>}
            {status === 'error' && <p style={{ color: 'red' }}>❌ Ошибка отправки</p>}
        </div>
    );
};

export default MessageForm;