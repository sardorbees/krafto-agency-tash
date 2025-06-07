import React, { useState, useEffect } from 'react';
import axiosInstance from '../api/Api';

const Profile = () => {
  const [profile, setProfile] = useState({ username: '', email: '' });
  const [editMode, setEditMode] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axiosInstance.get('profile/');
        setProfile(res.data);
      } catch (err) {
        setError('Ошибка загрузки профиля');
      }
    };
    fetchProfile();
  }, []);

  const handleChange = e => setProfile({ ...profile, [e.target.name]: e.target.value });

  const handleSave = async () => {
    try {
      await axiosInstance.put('profile/', profile);
      setEditMode(false);
      alert('Профиль обновлен');
    } catch (err) {
      setError('Ошибка обновления');
    }
  };

  if (error) return <p>{error}</p>;

  return (
    <div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      {!editMode ? (
        <>
          <h2>Профиль</h2>
          <p>Имя: {profile.username}</p>
          <p>Email: {profile.email}</p>
          <button onClick={() => setEditMode(true)}>Редактировать</button>
        </>
      ) : (
        <>
          <input name="username" value={profile.username} onChange={handleChange} />
          <input name="email" value={profile.email} onChange={handleChange} />
          <button onClick={handleSave}>Сохранить</button>
          <button onClick={() => setEditMode(false)}>Отмена</button>
        </>
      )}
    </div>
  );
};

export default Profile;
