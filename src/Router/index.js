import Router from 'express';
// 用户相关路由
import userRoutes from '../Router/user/user.js';
// 验证token拦截器
// import authMiddleware from '../Middleaware/token.js';
// mbti_test
import mbtiDetailRoutes from '../Router/mbtiTest/index.js';
// Q & A
import questionAndAnswerRoutes from '../Router/QuestionAndAnswer/index.js';
const router = Router();
// user
router.use('/user', userRoutes);
// 拦截器
// router.use(authMiddleware);
// mbti_detail
router.use('/detail', mbtiDetailRoutes);
// Q & A
router.use('/queAndAnswer', questionAndAnswerRoutes);
export default router;
