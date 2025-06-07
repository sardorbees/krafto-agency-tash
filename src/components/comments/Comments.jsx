import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/comment/api/comments/';

// Токен авторизации — сюда вставьте свой (или получите из контекста/хранилища)
const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTc0OTE5NDUwMCwiaWF0IjoxNzQ5MTA4MTAwLCJqdGkiOiIwOTM3NDhhMDQwYmY0NjJkOGRlMjYzNmUzYjgyY2RmYSIsInVzZXJfaWQiOjF9.Te9jy5z1lj3tiVlnYEY6tP1QWPk2UUw5sf8ct1GhQVM';

const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        Authorization: `Token ${AUTH_TOKEN}`,
        'Content-Type': 'application/json',
    },
});

export default function Comments() {
    const [comments, setComments] = useState([]);
    const [newText, setNewText] = useState('');
    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState('');

    // Получить комментарии
    const fetchComments = async () => {
        try {
            const res = await axiosInstance.get('/');
            setComments(res.data);
        } catch (error) {
            console.error('Ошибка загрузки комментариев:', error);
        }
    };

    useEffect(() => {
        fetchComments();
    }, []);

    // Создать комментарий
    const createComment = async () => {
        if (!newText.trim()) return;
        try {
            await axiosInstance.post('/', { text: newText });
            setNewText('');
            fetchComments();
        } catch (error) {
            console.error('Ошибка создания комментария:', error);
        }
    };

    // Удалить комментарий
    const deleteComment = async (id) => {
        try {
            await axiosInstance.delete(`/${id}/`);
            fetchComments();
        } catch (error) {
            console.error('Ошибка удаления комментария:', error);
        }
    };

    // Начать редактирование
    const startEdit = (id, text) => {
        setEditId(id);
        setEditText(text);
    };

    // Отменить редактирование
    const cancelEdit = () => {
        setEditId(null);
        setEditText('');
    };

    // Сохранить редактирование
    const saveEdit = async () => {
        if (!editText.trim()) return;
        try {
            await axiosInstance.put(`/${editId}/`, { text: editText });
            cancelEdit();
            fetchComments();
        } catch (error) {
            console.error('Ошибка редактирования комментария:', error);
        }
    };

    return (
        <div style={{ maxWidth: 600, margin: 'auto' }}>
<br /><br /><br /><br /><br /><br /><br /><br />
            <h2>Комментарии</h2>

            <div>
                <textarea
                    rows={3}
                    placeholder="Новый комментарий"
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                    style={{ width: '100%' }}
                />
                <button onClick={createComment}>Добавить</button>
            </div>

            <ul>
                {comments.map(({ id, text, created_at }) => (
                    <li key={id} style={{ marginBottom: 10, borderBottom: '1px solid #ccc', paddingBottom: 8 }}>
                        {editId === id ? (
                            <>
                                <textarea
                                    rows={3}
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                    style={{ width: '100%' }}
                                />
                                <button onClick={saveEdit}>Сохранить</button>
                                <button onClick={cancelEdit}>Отмена</button>
                            </>
                        ) : (
                            <>
                                <p>{text}</p>
                                <small>{new Date(created_at).toLocaleString()}</small>
                                <br />
                                <button onClick={() => startEdit(id, text)}>Редактировать</button>
                                <button onClick={() => deleteComment(id)}>Удалить</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
