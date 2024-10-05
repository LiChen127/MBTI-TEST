import { Sequelize } from 'sequelize';
import { my_db_config, sequelize } from '../config/db_config.js'; // 修改了导入方式
import User from '../Model/User/user.js'; // 导入用户模型
import MbtiDetail from '../Model/MbtiMsg/mbtiMsg.js';
import QuestionAndAnswer from '../Model/QAndA/index.js';
// 创建 sequelize 实例

// 同步模型到数据库
const syncModel = async () => {
  await User.sync({ force: false }); // `force: true` 会重新创建表，确保数据丢失风险
  // await saveDataToDb();
  await MbtiDetail.sync({ force: false });
  await QuestionAndAnswer.sync({ force: false });
};

// 数据库连接和模型同步
const dbConnection = async () => {
  try {
    await sequelize.authenticate();
    await syncModel(); // 确保模型同步
    console.log('Connection has been established successfully...');
  } catch (error) {
    console.log('Unable to connect to the database:', error);
  }
};

export default dbConnection;
