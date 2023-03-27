import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://ophim1.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
