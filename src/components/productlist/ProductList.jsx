// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/inventory/')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Ошибка загрузки:', error));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <h2>Список продуктов</h2>
      {products.map(product => (
        <div
          key={product.id}
          style={{
            marginBottom: '20px',
            border: '1px solid #eee',
            padding: '10px',
            borderRadius: '10px'
          }}
        >
          <h3>{product.name}</h3>

          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
            <div style={{ background: '#D1FAE5', padding: '5px 10px', borderRadius: '6px', marginRight: '8px' }}>✔</div>
            <div>Можно купить: <b>{product.available_quantity}</b> шт</div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
            <div style={{ background: '#FEF3C7', padding: '5px 10px', borderRadius: '6px', marginRight: '8px' }}>🛍️</div>
            <div><b>{product.sold_this_week}</b> человек купил на этой неделе</div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ background: '#E0E7FF', padding: '5px 10px', borderRadius: '6px', marginRight: '8px' }}>📦</div>
            <div>Всего в наличии: <b>{product.total_quantity}</b> шт</div>
          </div>

          <div style={{ marginTop: '10px' }}>
            <p><strong>Статус:</strong> {product.is_active ? '✅ Активна — вы можете купить' : '⛔ Неактивна — вы не можете купить'}</p>

            {/* Кнопка "Купить" только если товар активен */}
            {product.is_active && (
              <button
                style={{
                  marginTop: '10px',
                  padding: '10px 20px',
                  backgroundColor: '#22C55E',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}
              >
                Купить
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;