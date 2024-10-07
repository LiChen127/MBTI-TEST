import axios from 'axios';
// import { userStore } from '@/store/user';

/**
 * 将用户token拦截，之后请求带authoraization: token
 */
const request = axios.create({
  baseURL: 'http://localhost:9999',
  timeout: 10000,
});

request.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default request;