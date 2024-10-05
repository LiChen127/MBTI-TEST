import User from '../../Model/User/user.js';
import tokenHooks from '../../utils/jwt/tokenHooks.js';
import { resMessage } from '../../utils/resMessage.js';
// const User = DefineUser(sequelize);
class UserController {
  static async register(req, res) {
    try {
      const { username, password } = req.body;
      // 先查询是否存在
      const userIsExit = user.findOne({
        where: {
          user_name: username
        }
      });
      if (userIsExit) {
        return resMessage(res, 400, '用户已存在');
      }
      const user = await User.create({
        user_name: username,
        pwd: password,
      });
      resMessage(res, 200, user);
    } catch (error) {
      console.error(error);
      resMessage(res, 500, error);
    }
  }

  static async login(req, res) {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({
        where: {
          user_name: username
        }
      });
      if (!user) return resMessage(res, 400, '用户不存在');
      // token
      const token = await tokenHooks.generateToken(req.body);
      if (!token) {
        return resMessage(res, 400, 'token生成失败');
      }
      return resMessage(res, 200, { token });
    } catch (error) {
      console.error(error);
      return resMessage(res, 500, error);
    }
  }
  // static async sendEmail(req, res) {
  //   try {
      
  //   } catch (error) {
  //     console.log(error);
  //     return resMessage(res, 500, error);
  //   }
  // }
}

export default UserController;