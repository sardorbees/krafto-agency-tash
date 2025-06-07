// src/CompareImage.jsx
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios';
import ReactCompareImage from 'react-compare-image';

const CompareImage = () => {

    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/logo/categories/${1}/`)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, [id]);


    const { ides } = useParams(); // получаем ID из URL
    const [products, setProducts] = useState(null);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/logo/categories/${2}/`)
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, [ides]);

    if (!product) return <p>Загрузка...</p>;

    return (
        <div style={{
            backgroundColor: '#2196f3',
            padding: '20px',
            borderRadius: '20px',
            maxWidth: '2000px',
            margin: 'auto'
        }}>
            <ReactCompareImage
                leftImage={product.image}
                rightImage={products.image}
                // leftImageLabel="Oldin"
                // rightImageLabel="Keyin"
                sliderLineWidth={6}
                sliderLineColor="#007bff"
                handle={
                    <div style={{
                        width: 30,
                        height: 30,
                        backgroundColor: '#007bff',
                        borderRadius: '50%',
                        border: '3px solid white'
                    }} />
                }
            />
        </div>
    );
};

export default CompareImage;
