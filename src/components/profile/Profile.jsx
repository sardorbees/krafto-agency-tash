import React, { useEffect, useState } from 'react';
import axios from '../api/axiosInstance';

const Profile = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get('/profile/', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access')}`
      }
    }).then(res => setUser(res.data));
  }, []);

  return (
    <div>
      <h2>{user.username}</h2>
      <p>{user.email}</p>
      <p>{user.bio}</p>
    </div>
  );
};

export default Profile;
