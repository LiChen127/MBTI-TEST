import { DataTypes, Sequelize } from 'sequelize';
import { sequelize } from '../../config/db_config.js';
// import fs from 'fs';
// let jsonData = JSON.parse(fs.readFileSync("../../../mbti_detail/qAndA.json"), 'utf8');
const QuestionAndAnswer = sequelize.define(
  'question_and_answer',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    question: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    answer1: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    answer2: {
      type: DataTypes.JSON,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  },
);
// jsonData = jsonData.map(item => {
//   return {
//     id: item.id,
//     question: item.question,
//     answer1: item.options.answer1,
//     answer2: item.options.answer2
//   }
// })
// console.log(jsonData);
// const saveDataToDb = async () => {
//   for (const item of jsonData) {
//     await QuestionAndAnswer.create({
//       id: item.id,
//       question: item.question,
//       answer1: JSON.stringify(item.answer1),
//       answer2: JSON.stringify(item.answer2)
//     })
//   }
//   console.log('Data saved to database successfully!');
// }
// saveDataToDb();

export default QuestionAndAnswer;
