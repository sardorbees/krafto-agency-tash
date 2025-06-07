import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import ReactCompareImage from 'react-compare-image';

const CompareImage = () => {
    const { id } = useParams();
    const [photo, setPhoto] = useState(null);

    const fetchPhoto = async () => {
        try {
            const res = await axios.get(`http://127.0.0.1:8000/api/logo/categories/${1}/`);
            setPhoto(res.data);
        } catch (error) {
            console.error('Ошибка при получении фото:', error);
        }
    };

    useEffect(() => {
        fetchPhoto();
        const interval = setInterval(fetchPhoto, 1000);
        return () => clearInterval(interval);
    }, [id]);


    const { ides } = useParams();
    const [photos, setPhotos] = useState(null);

    const fetchPhotoe = async () => {
        try {
            const res = await axios.get(`http://127.0.0.1:8000/api/logo/categories/${2}/`);
            setPhotos(res.data);
        } catch (error) {
            console.error('Ошибка при получении фото:', error);
        }
    };

    useEffect(() => {
        fetchPhotoe();
        const interval = setInterval(fetchPhotoe, 1000);
        return () => clearInterval(interval);
    }, [ides]);

    return (
        <div style={{
            backgroundColor: '#2196f3',
            padding: '20px',
            borderRadius: '20px',
            maxWidth: '1000px',
            margin: 'auto'
        }}>
            {photo?.image && (
                <>
                    <h3 style={{ color: 'white', textAlign: 'center' }}></h3>
                    <ReactCompareImage
                        leftImage={photo.image}
                        rightImage={photos.image}
                        sliderLineWidth={6}
                        sliderLineColor="#007bff"
                        handle={(
                            <div style={{
                                width: 30,
                                height: 30,
                                backgroundColor: '#007bff',
                                borderRadius: '80%',
                                border: '3px solid white'
                            }} />
                        )}
                    />
                </>
            )}
        </div>
    );
};

export default CompareImage;
