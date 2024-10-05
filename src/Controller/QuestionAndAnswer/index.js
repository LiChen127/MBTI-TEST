import QuestionAndAnswer from "../../Model/QAndA/index.js";

class QuestionAndAnswerController {
  static async getAllQuestions() {
    return await QuestionAndAnswer.findAll();
  }
  static async getQuestionById(id = 1) {
    return await QuestionAndAnswer.findOne({
      where: {
        id: id,
      },
    });
  }
  static async getQuestionByPage(page, limit) {
    const offset = (page - 1) * limit;
    return await QuestionAndAnswer.findAndCountAll({
      offset,
      limit,
    });
  }
}
export default QuestionAndAnswerController;
