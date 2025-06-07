import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            axios.get('http://127.0.0.1:8000/api/shop/product/1/')
                .then((res) => {
                    setProduct(res.data);
                })
                .catch((err) => {
                    setError('Товар не найден');
                    console.error(err);
                });
        }, 10);
        return () => clearInterval(interval);
    }, [id]);


    const [products, setProducts] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            axios.get('http://127.0.0.1:8000/api/base/banner-image/')
                .then(res => setProducts(res.data))
                .catch(err => console.log(err));
        }, 10);

        return () => clearInterval(interval);
    }, []);

    if (error) return <p>{error}</p>;
    if (!product) return <p>Загрузка...</p>;


    return (
        <div>
            <br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br />
            <h2>Nomi: {product.title}</h2>
            <h2>Цена: {product.price}</h2>
            <h2>Skidka: {product.discount_percent}</h2>
            <h2>Skidka: {product.long_description}</h2>
            {products.map(product => (
                <div key={product.id} className="border p-2 rounded">
                    <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                    <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                    <h3>{product.name}</h3>
                </div>
            ))}
        </div>
    );
};

export default ProductDetail;
