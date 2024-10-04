// 封装一个函数，包括success和failure
// 内部封装res.send(data)
// 接收两个参数,一个是状态码，一个是数据
export const resMessage = (res, status, data) => {
  res.send({
    status,
    data
  });
};