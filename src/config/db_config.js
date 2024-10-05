// db_config.js
import { Sequelize } from 'sequelize';

// 数据库配置
const my_db_config = {
  host: 'localhost',
  user_name: 'root',
  password: '121314',
  database: 'mbti_test',
  port: 3306,
  debug: true,
};

// 基于配置创建 Sequelize 实例
const sequelize = new Sequelize(
  my_db_config.database,
  my_db_config.user_name,
  my_db_config.password,
  {
    host: my_db_config.host,
    port: my_db_config.port,
    dialect: 'mysql',
    logging: my_db_config.debug ? console.log : false,
  },
);

// 导出配置和 sequelize 实例
export { my_db_config, sequelize };
