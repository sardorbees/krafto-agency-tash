import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const NotificationList = () => {
    const [notifications, setNotifications] = useState([]);
    const [lastId, setLastId] = useState(null);
    const audioRef = useRef(null);

    // Функция для загрузки уведомлений
    const fetchNotifications = async () => {
        try {
            const res = await axios.get('http://127.0.0.1:8000/api/notifications/');
            const data = res.data;

            if (data.length > 0 && data[0].id !== lastId) {
                if (lastId !== null) {
                    // Новый звук, только если это не первое получение
                    audioRef.current.play();
                }

                setNotifications(data);
                setLastId(data[0].id);
            }
        } catch (err) {
            console.error('Ошибка загрузки уведомлений:', err);
        }
    };

    useEffect(() => {
        fetchNotifications();
        const interval = setInterval(fetchNotifications, 1000); // проверять каждые 5 сек
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <audio ref={audioRef} src="../assets/iphone.mp3" preload="auto" />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <h3>Уведомления:</h3>
            <ul>
                {notifications.map((notif) => (
                    <li key={notif.id}>
                        <strong>{notif.title}</strong>: {notif.message}<br />
                        <small>{new Date(notif.created_at).toLocaleString()}</small>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NotificationList;