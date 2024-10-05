import fs from 'fs';
// const jsonData = JSON.parse(fs.readFileSync("../../../mbti_detail/detail.json"), 'utf8');
import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from '../../config/db_config.js';

// 定义模型
const MbtiDetail = sequelize.define(
  'mbti_detail',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    from_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    advantages_title: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    advantages_detail: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    disadvantages_title: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    disadvantages_detail: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    way_to_resolve_problem: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    career_advice: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    initial_advice: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    development_advice: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  },
);

// const saveDataToDb = async () => {
//   try {
//     for (const item of jsonData) {
//       await MbtiDetail.create({
//         id: item.id,
//         type: item.type,
//         from_type: item.from_type,
//         advantages_title: JSON.stringify(item.advantages.title),
//         advantages_detail: JSON.stringify(item.advantages.detail),
//         disadvantages_title: JSON.stringify(item.disadvantages.title),
//         disadvantages_detail: JSON.stringify(item.disadvantages.detail),
//         way_to_resolve_problem: item.way_to_resolve_problem,
//         career_advice: item.career_advice,
//         initial_advice: item.initial_advice,
//         development_advice: item.development_advice
//       });
//     }
//     console.log('数据已保存到数据库');
//   } catch (error) {
//     console.error('保存数据到数据库时出错:', error);
//   }
// };
// saveDataToDb();
// export default saveDataToDb;
export default MbtiDetail;
