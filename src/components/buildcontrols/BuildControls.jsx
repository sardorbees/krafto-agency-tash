import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get('https://admin-new-xp8v.onrender.com/base/main-page-service-card-content/');
      setProducts(res.data);
    } catch (error) {
      console.error('Ошибка при получении данных:', error);
    }
  };

  useEffect(() => {
    fetchProducts(); // начальная загрузка

    const interval = setInterval(() => {
      fetchProducts(); // каждые 5 секунд обновлять
    }, 5000);

    return () => clearInterval(interval); // очистка при размонтировании
  }, []);

  return (
    <div>
      <h2>Продукты</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>{p.title} <br />  <br />  <br /> {p.short_desc} <br /></li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
