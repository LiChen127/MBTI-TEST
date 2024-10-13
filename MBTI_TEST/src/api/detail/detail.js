import request from '../index.js';
const prefix = '/detail';
// 查询所有detail
export const getAllDetail = () => request.get(`${prefix}/getAllDetails`);

// 根据类型查询detail
export const getDetailByType = (type) =>
  request.get(`${prefix}/getDetailByType/${type}`);

// 关键字查询
export const getDetalBysearch = (search) =>
  request.get(`${prefix}/getDetalBysearch/${search}`);

// 分页查询
export const getDetailByPage = (page, limit) =>
  request.get(`${prefix}/getDetailByPage`, { query: { page, limit } });
