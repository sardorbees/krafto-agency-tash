import React, { useState } from 'react';
import axios from 'axios';

const OrderForm = () => {
    const [form, setForm] = useState({
        phone: '',
        first_name: '',
        last_name: '',
        delivery_method: 'delivery',
        region: '',
        district: '',
        address: '',
        apartment: '',
        delivery_type: 'standard',
        payment_method: 'payme',
        total_price: 4699000, // Пример: итоговая сумма
    });

    const handleChange = (e) => {
        setForm(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async () => {
        try {
            await axios.post('http://127.0.0.1:8000/api/order/create/', form);
            alert('Buyurtma yuborildi!');
        } catch (err) {
            alert('Xatolik yuz berdi');
            console.error(err);
        }
    };

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <h1 className="text-2xl font-bold mb-4">Haridni rasmiylashtirish</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input name="phone" value={form.phone} onChange={handleChange} placeholder="Telefon" className="input" />
                <input name="first_name" value={form.first_name} onChange={handleChange} placeholder="Ism" className="input" />
                <input name="last_name" value={form.last_name} onChange={handleChange} placeholder="Familiya" className="input" />
                <select name="delivery_method" value={form.delivery_method} onChange={handleChange} className="input">
                    <option value="delivery">Etkazib berish</option>
                    <option value="pickup">Doʻkondan olib ketish</option>
                </select>
                <input name="region" value={form.region} onChange={handleChange} placeholder="Viloyat" className="input" />
                <input name="district" value={form.district} onChange={handleChange} placeholder="Tuman" className="input" />
                <input name="address" value={form.address} onChange={handleChange} placeholder="Manzil" className="input" />
                <input name="apartment" value={form.apartment} onChange={handleChange} placeholder="Kvartira (agar boʻlsa)" className="input" />
                <select name="delivery_type" value={form.delivery_type} onChange={handleChange} className="input">
                    <option value="standard">Ertaga yoki keyinroq</option>
                    <option value="fast">Tez etkazib berish (30 000 so'm)</option>
                </select>
                <select name="payment_method" value={form.payment_method} onChange={handleChange} className="input">
                    <option value="payme">Payme</option>
                    <option value="click">Click</option>
                    <option value="card">Onlayn karta orqali</option>
                    <option value="cod">Qabul qilinganda</option>
                    <option value="installment">Muddatli toʻlov</option>
                </select>
            </div>

            <div className="mt-4 text-right">
                <button onClick={handleSubmit} className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded" style={{background: 'black'}}>
                    Xaridni rasmiylashtirish
                </button>
            </div>
        </div>
    );
};

export default OrderForm;