import axios from "axios";

export const api = axios.create({
  baseURL: "https://devburguer-api.onrender.com", // URL do backend
  withCredentials: true, // Se o backend usa cookies de autenticação
});

api.interceptors.request.use((config) => {
  const userData = localStorage.getItem('devburguer:userData');
  const token = userData && JSON.parse(userData).token;

  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }

  return config;
});
