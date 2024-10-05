import { DataTypes } from 'sequelize';
import { sequelize } from '../../config/db_config.js'; // 直接导入 sequelize 实例

// 定义模型
const User = sequelize.define(
  'user',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    user_name: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    pwd: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    test_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    timestamps: false,
    freezeTableName: true, // 禁止 Sequelize 自动修改表名为复数
  },
);

// 导出模型
export default User;
