import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/add_card/api/cart/');
      const itemsWithChecked = response.data.map(item => ({
        ...item,
        checked: false,
      }));
      setCartItems(itemsWithChecked);
    } catch (error) {
      console.error('Xatolik:', error);
    }
  };

  const handleCheckItem = (id) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setCartItems(prev =>
      prev.map(item => ({ ...item, checked: !selectAll }))
    );
  };

  const handleIncrease = (id) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleDelete = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const total = cartItems
    .filter(item => item.checked)
    .reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Savat</h1>

      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          checked={selectAll}
          onChange={handleSelectAll}
          className="mr-2"
        />
        <span>Hammasini tanlash</span>
      </div>

      {cartItems.map(item => (
        <div key={item.id} className="flex items-center border-b py-4">
          <input
            type="checkbox"
            checked={item.checked}
            onChange={() => handleCheckItem(item.id)}
            className="mr-4"
          />
          <img src={item.image} alt={item.name} className="w-16 h-16 mr-4" />
          <div className="flex-1">
            <p className="font-semibold">{item.name}</p>
            <p className="text-sm text-gray-600">{item.price} so'm</p>
          </div>
          <div className="flex items-center space-x-2">
            <button onClick={() => handleDecrease(item.id)} className="px-2 py-1 bg-gray-200 rounded">-</button>
            <span>{item.quantity}</span>
            <button onClick={() => handleIncrease(item.id)} className="px-2 py-1 bg-gray-200 rounded">+</button>
          </div>
          <button
            onClick={() => handleDelete(item.id)}
            className="ml-4 text-red-600"
          >
            O'chirish
          </button>
        </div>
      ))}

      <div className="mt-6 text-right">
        <p className="text-lg font-semibold">Jami: {total.toLocaleString()} so'm</p>
        <button className="mt-4 px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          Рассмийлаштириш
        </button>
      </div>
    </div>
  );
};

export default CartPage;