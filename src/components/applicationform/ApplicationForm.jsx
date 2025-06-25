import React, { useState } from 'react';
import axios from 'axios';

const SERVICES = {
    'Веб-сайт': ['Landing page', 'Портфолио', 'Туристический', 'Детский сад', 'Другое'],
    'Telegram-бот': ['Заявки', 'Магазин', 'Уведомления', 'Другое'],
    'Баннер': ['YouTube баннер', 'Баннер для сайта', 'Пост', 'Другое'],
    'Логотип': ['Сайт логотип', 'Instagram логотип', 'Пост логотип', 'Другое'],
    'Типография': ['Визитка', 'Листовка', 'Каталог', 'Другое']
};

const TARIFFS = ['Стандарт', 'Премиум'];

const ApplicationForm = () => {
    const [formData, setFormData] = useState({
        full_name: '',
        phone_number: '',
        email: '',
        service_type: '',
        subservice_type: '',
        tariff: '',
        price: '',
        comment: '',
    });

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'service_type') {
            setFormData({ ...formData, service_type: value, subservice_type: '' });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccess(false);
        setError('');

        try {
            // 1. Отправка в Django
            await axios.post('http://127.0.0.1:8000/api/applicationapi/application/', formData);

            // 2. Отправка Telegram уведомления
            await axios.post('http://127.0.0.1:8000/api/applicationsend-telegram/', formData);

            setSuccess(true);
            setFormData({
                full_name: '',
                phone_number: '',
                email: '',
                service_type: '',
                subservice_type: '',
                tariff: '',
                price: '',
                comment: '',
            });
        } catch (err) {
            console.error(err);
            setError('❌ Ошибка при отправке заявки или уведомления.');
        }
    };

    const subserviceOptions = formData.service_type ? SERVICES[formData.service_type] || [] : [];

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <h2>Форма заявки</h2>
            {success && <p style={{ color: 'green' }}>✅ Заявка успешно отправлена!</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            <form onSubmit={handleSubmit}>
                <input name="full_name" placeholder="ФИО" value={formData.full_name} onChange={handleChange} required />
                <input name="phone_number" placeholder="Телефон" value={formData.phone_number} onChange={handleChange} required />
                <input name="email" placeholder="Email (необязательно)" value={formData.email} onChange={handleChange} />

                {/* Тип услуги */}
                <select name="service_type" value={formData.service_type} onChange={handleChange} required>
                    <option value="">Выберите тип услуги</option>
                    {Object.keys(SERVICES).map((service) => (
                        <option key={service} value={service}>{service}</option>
                    ))}
                </select>

                {/* Подкатегория */}
                <select name="subservice_type" value={formData.subservice_type} onChange={handleChange} required>
                    <option value="">Выберите подкатегорию</option>
                    {subserviceOptions.map((sub) => (
                        <option key={sub} value={sub}>{sub}</option>
                    ))}
                </select>

                {/* Тариф */}
                <select name="tariff" value={formData.tariff} onChange={handleChange} required>
                    <option value="">Выберите тариф</option>
                    {TARIFFS.map((tariff) => (
                        <option key={tariff} value={tariff}>{tariff}</option>
                    ))}
                </select>

                <input name="price" placeholder="Цена (например: договорная)" value={formData.price} onChange={handleChange} required />
                <textarea name="comment" placeholder="Комментарий (необязательно)" value={formData.comment} onChange={handleChange}></textarea>

                <button type="submit">Отправить</button>
            </form>
        </div>
    );
};

export default ApplicationForm;