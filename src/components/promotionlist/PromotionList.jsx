// src/components/PromotionList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PromotionList = () => {
  const [promotions, setPromotions] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/promotions/')
      .then(response => setPromotions(response.data))
      .catch(error => console.error('Ошибка загрузки акций:', error));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <h2>Актуальные акции</h2>
      {promotions.map(promo => (
        <div key={promo.id} style={{
          border: '1px solid #eee',
          padding: '15px',
          borderRadius: '10px',
          marginBottom: '15px',
          background: promo.is_active ? '#F0FFF4' : '#F9FAFB'
        }}>
          <h3>🛍 {promo.title}</h3>
          <p><strong>📦 Товар:</strong> {promo.product_name}</p>
          <p><strong>🔻 Скидка:</strong> {promo.discount_percent}%</p>
          <p><strong>📅 Период:</strong> {promo.start_date} — {promo.end_date}</p>
          <p><strong>Статус:</strong> {promo.is_active ? '✅ Активна' : '⛔ Неактивна'}</p>
        </div>
      ))}
    </div>
  );
};

export default PromotionList;