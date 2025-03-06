import axios from "axios";

export const api = axios.create({
    baseURL: 'https://devburguer-api.onrender.com' || "http://localhost:4000",
    withCredentials: true
  });

  api.interceptors.request.use((config) => {

    const userData =   localStorage.getItem('devburguer:userData');

    const token = userData && JSON.parse(userData).token

    config.headers.authorization = `Bearer ${token}`;

    return config
  })
