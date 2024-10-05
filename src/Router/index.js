import Router from 'express';
// 用户相关路由
import userRoutes from '../Router/user/user.js';
// 拦截器 拦截token
import authRoute from '../../src/Middleaware/authRoute.js';
// 验证token拦截器
// mbti_test
import mbtiDetailRoutes from '../Router/mbtiTest/index.js';
const router = Router();
// user
router.use('/user', userRoutes);
// mbti_detail
router.use('/detail', mbtiDetailRoutes);
// 验证token
// router.use(authRoute);
export default router;