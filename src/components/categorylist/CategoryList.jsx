// CategoryList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('https://admin-new-xp8v.onrender.com/api/category/category-page-content/')
      .then(res => {
        setCategories(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <h2>Категории</h2>
      <br /><br /><br /><br /><br /><br />
      <ul>
        {categories.map(cat => (
          <li key={cat.id}>
            {cat.name} — slug: {cat.slug} — порядок: {cat.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
