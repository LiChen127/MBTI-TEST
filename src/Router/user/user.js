import Router from 'express';
// import authMiddleware from '../../src/Middleaware/token.js';
import tokenHooks from '../../utils/jwt/tokenHooks.js';
import { resMessage } from '../../utils/resMessage.js';
import UserController from '../../Controller/user/index.js';
const router = Router();

// 用户相关路由

// 登录
router.post('/login', (req, res) => {
  UserController.login(req, res);
});

// 注册
router.post('/register', (req, res) => {
  UserController.register(req, res);
});

// 发送邮件
router.post('/sendEmail', (req, res) => {
  res.send('Send Email');
});

export default router;
