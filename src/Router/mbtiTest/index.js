import Router from 'express';
import MbtiDetailController from '../../Controller/mbti_detail/index.js';
import { resMessage } from '../../utils/resMessage.js';
const router = Router();
// 查询所有
router.get('/getAllDetails', async (req, res) => {
  const details = await MbtiDetailController.getAllDetails();
  if (details) {
    resMessage(res, 200, details);
  } else {
    resMessage(res, 500, '查询失败');
  }
});

// 根据type查询,type为params
router.get('/getDetailByType/:type', async (req, res) => {
  const { type } = req.params;
  let detail = await MbtiDetailController.getDetailByType(type);
  detail.advantages_title = JSON.parse(detail.advantages_title);
  detail.disadvantages_title = JSON.parse(detail.disadvantages_title);
  detail.disadvantages_detail = JSON.parse(detail.disadvantages_detail);
  detail.advantages_detail = JSON.parse(detail.advantages_detail);
  const formatObj = (obj) => {
    return Object.entries(obj).map(([title, content]) => ({ title, content }));
  };
  detail.advantages_detail = formatObj(detail.advantages_detail);
  detail.disadvantages_detail = formatObj(detail.disadvantages_detail);
  if (detail) {
    resMessage(res, 200, detail);
  } else {
    resMessage(res, 500, '查询失败');
  }
});

// 模糊查询
router.get('/getDetailLike/:search', async (req, res) => {
  const { search } = req.params;
  const detail = await MbtiDetailController.getDetailLike(search);
  if (detail) {
    resMessage(res, 200, detail);
  } else {
    resMessage(res, 500, '查询失败');
  }
});

// 分页查询
router.get('/getDetailsBypage', async (req, res) => {
  const { page, limit } = req.query;
  const detail = await MbtiDetailController.getDetailsBypage(
    Number(page),
    Number(limit),
  );
  if (detail) {
    resMessage(res, 200, detail);
  } else {
    resMessage(res, 500, '查询失败');
  }
});

export default router;
