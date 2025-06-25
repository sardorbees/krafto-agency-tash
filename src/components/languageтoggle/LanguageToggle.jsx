import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getOrCreateSessionId } from '../utils/session';

const LanguageToggle = () => {
  const [language, setLanguage] = useState('ru');

  useEffect(() => {
    const sessionId = getOrCreateSessionId();
    axios.get(`http://127.0.0.1:8000/api/set-language/?session_id=${sessionId}`)
      .then(res => setLanguage(res.data.language))
      .catch(err => console.error('Ошибка получения языка:', err));
  }, []);

  const switchLanguage = async (lang) => {
    const sessionId = getOrCreateSessionId();
    try {
      await axios.post('http://127.0.0.1:8000/api/language/api/set-language/', {
        session_id: sessionId,
        language: lang,
      });
      setLanguage(lang);
      window.location.reload();
    } catch (error) {
      console.error('Ошибка смены языка:', error);
    }
  };

  return (
    <div style={{ marginBottom: '10px' }}>
      <button onClick={() => switchLanguage('ru')} disabled={language === 'ru'} style={{ marginRight: '8px' }}>
        🇷🇺 Русский
      </button>
      <button onClick={() => switchLanguage('uz')} disabled={language === 'uz'}>
        🇺🇿 O‘zbekcha
      </button>
    </div>
  );
};

export default LanguageToggle;