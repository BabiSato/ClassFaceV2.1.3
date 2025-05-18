import axios from 'axios';

const baseURL = 'http://192.168.15.4:3001/api';

export const api = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});