import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.100.8:2222'
});

export default api;