import User from '../../Model/User/user.js';
import tokenHooks from '../../utils/jwt/tokenHooks.js';
import { resMessage } from '../../utils/resMessage.js';
// const User = DefineUser(sequelize);
class UserController {
  static async register(req, res) {
    try {
      const { username, password, email } = req.body;
      console.log(username, password, email);
      console.log(typeof User.create);
      const user = await User.create({
        user_name: username,
        pwd: password,
        email
      });
      resMessage(res, 200, user);
    } catch (error) {
      console.error(error);
      resMessage(res, 500, error);
    }
  }

  static async login(req, res) {
    try {
      const { username, password, email } = req.body;
      const user = await User.findOne({
        where: {
          user_name: username
        }
      });
      console.log(user);
      if (!user) return resMessage(res, 400, '用户不存在');
      // token
      const token = await tokenHooks.generateToken(req.body);
      console.log(token);
      return resMessage(res, 200, { token });
    } catch (error) {
      console.error(error);
      return resMessage(res, 500, error);
    }
  }
  static async sendEmail(req, res) {
    try {
      
    } catch (error) {
      console.log(error);
      return resMessage(res, 500, error);
    }
  }
}

export default UserController;