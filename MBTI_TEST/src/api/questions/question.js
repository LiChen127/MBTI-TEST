import request from '../index.js';

// 获取题目列表
export const getAllQandA = () => request.get('/getAllQA');

// 获取某一个题目
export const getQandA = (id) => request.get(`/getQAById/${id}`);

// 分页
export const getQandAByPage = (page, limit) =>
  request.get(`/getQAByPage`, { query: { page, limit } });
