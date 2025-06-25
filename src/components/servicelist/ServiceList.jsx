import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ServiceList = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/services/')
            .then((res) => {
                setServices(res.data);
            })
            .catch((err) => {
                console.error('Ошибка при загрузке сервисов:', err);
            });
    }, []);

    return (
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" style={{display: 'flex', marginTop: '20%'} }>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            {services.map((service) => (
                <div key={service.id} className="border rounded-2xl shadow p-4 bg-white hover:shadow-lg transition">
                    {service.icon && (
                        <img src={service.icon} alt={service.name} className="w-full h-40 object-contain mb-3" />
                    )}
                    <h2 className="text-xl font-semibold">{service.name}</h2>
                    <p className="text-sm text-gray-600 mb-2">{service.description}</p>
                    <a href={service.slug}>salom</a>
                    <p className="text-xs text-gray-400">Добавлено: {new Date(service.created_at).toLocaleDateString()}</p>
                </div>
            ))}
        </div>
    );
};

export default ServiceList;