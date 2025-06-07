import React, { useEffect } from 'react';

const Logout = ({ onLogout }) => {
  useEffect(() => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    onLogout();
  }, [onLogout]);

  return <p>Вы вышли из системы.</p>;
};

export default Logout;
