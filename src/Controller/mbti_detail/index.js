import MbtiDetail from '../../Model/MbtiMsg/mbtiMsg.js';
import { resMessage } from '../../utils/resMessage.js';
import { Op } from 'sequelize';

class MbtiDetailController {
  // getAll
  static async getAllDetails() {
    try {
      // return await MbtiDetail.findAll();
      const detail = await MbtiDetail.findAll();
      // console.log(detail);
      return detail;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  // 单个查询
  static async getDetailByType(type = 'INTJ') {
    try {
      return await MbtiDetail.findOne({
        where: {
          type,
        },
      });
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  // 模糊查询
  static async getDetailLike(search) {
    try {
      console.log(search);
      const details = await MbtiDetail.findAll({
        where: {
          type: {
            [Op.like]: `%${search}%`,
          },
        },
      });
      return details;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  // 分页查询
  static async getDetailsBypage(page, limit) {
    try {
      const offset = (page - 1) * limit;
      const details = await MbtiDetail.findAndCountAll({
        offset,
        limit,
      });
      return details;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}

export default MbtiDetailController;
