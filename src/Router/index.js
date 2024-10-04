import Router from 'express';
import userRoutes from './user.js';
import authRoute from '../../src/Middleaware/authRoute.js';
// import authMiddleware from '../../src/Middleaware/token.js';
// import { resMessage } from '../utils/resMessage.js';
// import 
const router = Router();
// user
router.use('/user', userRoutes);
// 验证token
router.use(authRoute);
export default router;