import axios from 'axios';
import { userStore } from '@/store/user';

/**
 * 将用户token拦截，之后请求带authoraization: token
 */
const instance = axios.create({
  baseURL: 'api',
  timeout: 10000,
});

instance.interceptors.request.use(
  (config) => {
    const user = userStore();
    if (user.token) {
      config.headers.authorization = user.token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
)

export default instance;