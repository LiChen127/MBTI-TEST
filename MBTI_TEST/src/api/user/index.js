import request from '../index.js';

const prefix = '/user';

// 注册
export const register = (data) => request.post(`${prefix}/register`, data);

// 登录
export const login = (data) => request.post(`${prefix}/login`, data);
