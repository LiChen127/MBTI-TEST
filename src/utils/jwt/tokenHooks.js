import jsonwebtoken from 'jsonwebtoken';
/**
 * jwt思路
 * 主要两个函数
 * 1. 生成token 用户登录的时候服务端生成token
 * 2. 验证token 用户请求的时候服务端验证token
 */
/**
 * 配置token
 * @param { object } payload
 * @param { number } expiresIn
 * @param { string } secret
 */
// const secretKey = 'mbit_test_website_key';
const generateToken = (
  user,
  secretKey = 'mbit_test_website_key',
  expiresIn = '7d',
) => {
  return jsonwebtoken.sign(user, secretKey, { expiresIn });
};
const verifyToken = (token) => {
  try {
    const decoded = jsonwebtoken.verify(token, 'mbit_test_website_key');
    return decoded;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export default { generateToken, verifyToken };
