import axios from 'axios';

const API_URL = 'http://localhost:8000/api/';

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Добавляем токен в заголовок, если есть
axiosInstance.interceptors.request.use(config => {
  const token = localStorage.getItem('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzQ5MTExNzE5LCJpYXQiOjE3NDkxMTE0MTksImp0aSI6ImFmMGI3NTFlMGY4YjQzODRhMzcxMmE2MTM0YWI2NGU4IiwidXNlcl9pZCI6MX0.iqWw6QLV6G3tL1kzH-KaALUzPLEzckpKWf_MpqCsNq0');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
