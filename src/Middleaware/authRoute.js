import Router from 'express';
// import 
const router = Router();

// 认证中间件
const authRoute = (req, res, next) => {
  console.log('is by authRoute');
  next();
};

router.use(authRoute);

export default router;