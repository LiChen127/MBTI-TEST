import Router from 'express';
import MbtiDetailController from '../../Controller/mbti_detail/index.js';
import { resMessage } from '../../utils/resMessage.js';
const router = Router();
// 查询所有
router.get('/getAllDetails', async (req, res) => {
  const details = await MbtiDetailController.getAllDetails();
  console.log(details);
  if (details) {
    resMessage(res, 200, details);
  } else {
    resMessage(res, 500, '查询失败');
  }
})

// 根据type查询,type为params
router.get('/getDetailByType/:type',async  (req, res) => {
  const { type } = req.params;
  const detail = await MbtiDetailController.getDetailByType(type);
  if (detail) {
    resMessage(res, 200, detail);
  } else {
    resMessage(res, 500, '查询失败');
  }
})

// 模糊查询
router.get('/getDetailLike/:search', async (req, res) => {
  const { search } = req.params;
  const detail = await MbtiDetailController.getDetailLike(search);
  if (detail) {
    resMessage(res, 200, detail);
  } else {
    resMessage(res, 500, '查询失败');
  }
})

// 分页查询
router.get('/getDetailsBypage', async (req, res) => {
  const { page, limit } = req.query;
  const detail = await MbtiDetailController.getDetailsBypage(Number(page), Number(limit));
  if (detail) {
    resMessage(res, 200, detail);
  } else {
    resMessage(res, 500, '查询失败');
  }
})

export default router;