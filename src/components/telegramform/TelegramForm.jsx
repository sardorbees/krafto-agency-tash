import React, { useState } from 'react';
import axios from 'axios';
import '../../css/animate.css';
import '../../css/bootstrap.min.css';
import '../../css/animate.css';
import '../../css/magic.css';
import '../../css/main.css';
import '../../css/meanmenu.css';
import '../../css/nice-select.css';
import '../../css/odometer-theme-default.css';
import '../../css/swiper-bundle.css';

const TelegramForm = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [mesagge_text, setMesagge_text] = useState('');

    // 🔐 ЗАМЕНИ на свои реальные данные
    const BOT_TOKEN = '7941289654:AAGD6sm2z4SJSuGqXCcykdgwlN8Q6Vp-ytc'; // например: 123456789:ABCdefGhIJKlmnoPQRstuVwxyZ
    const CHAT_ID = '7139975148'; // например: 123456789

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name.trim() || !phone.trim()) {
            alert('Пожалуйста, заполните все поля');
            return;
        }

        const message = `
📥 Новая заявка!
👤 Имя: ${name}
📞 Телефон: ${phone}
❓ Вашы вопрос: ${mesagge_text}
    `;

        const url = `https://api.telegram.org/bot7941289654:AAGD6sm2z4SJSuGqXCcykdgwlN8Q6Vp-ytc/sendMessage`;

        try {
            await axios.post(url, {
                chat_id: CHAT_ID,
                text: message,
                parse_mode: 'Markdown',
            });
            alert('Сообщение успешно отправлено!');
            setName('');
            setPhone('');
        } catch (error) {
            console.error('Ошибка отправки:', error);
            alert('Ошибка при отправке сообщения');
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: 585, margin: '20px auto', fontFamily: 'sans-serif' }}>
            <div class="form-input">
                <label>Ваше имя:</label>
                <input
                    class='form-input'
                    type="text"
                    placeholder="имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div class="form-input">
                <label>Телефон:</label>
                <input
                    type="tel"
                    placeholder="+998"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
            </div>
            <div class="form-input">
                <label>Вашы вопрос:</label>
                <input
                    type="tel"
                    placeholder="?"
                    value={mesagge_text}
                    onChange={(e) => setMesagge_text(e.target.value)}
                    required
                />
            </div>
            <div class="tj-primary-btn tj-hover-btn">
                <div class="form__submit-button">
                    <button type="submit" class="subscribe-btn">
                        Yuborish
                    </button>
                </div>
            </div>
        </form>
    );
};

export default TelegramForm;
