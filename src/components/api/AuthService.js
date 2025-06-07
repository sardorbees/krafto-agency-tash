import axios from 'axios';

const API_URL = 'http://localhost:8000/api/';

export const register = (email, password) =>
  axios.post(`${API_URL}users/`, { email, password });

export const login = (email, password) =>
  axios.post(`${API_URL}jwt/create/`, { email, password });

export const getProfile = (token) =>
  axios.get(`${API_URL}users/me/`, {
    headers: { Authorization: `JWT ${token}` },
  });

export const updateProfile = (token, data) =>
  axios.put(`${API_URL}users/me/`, data, {
    headers: { Authorization: `JWT ${token}` },
  });
