import tokenHooks from '../utils/jwt/tokenHooks.js';

const { verifyToken } = tokenHooks;

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).send('未登录');
  }
  const decoded = verifyToken(token);
  if (!decoded) {
    return res.status(401).send('token无效');
  }
  req.token = decoded;
  next();
};

export default authMiddleware;
