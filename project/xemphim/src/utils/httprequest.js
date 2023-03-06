import axios from 'axios';

export const httprequest = axios.create({
  baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});
