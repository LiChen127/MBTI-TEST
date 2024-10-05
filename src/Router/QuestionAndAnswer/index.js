import Router from "express";
import { resMessage } from "../../utils/resMessage.js";
import QuestionAndAnswerController from "../../Controller/QuestionAndAnswer/index.js";
const router = Router();

// getALL Q & A
router.get("/getAllQA", async (req, res) => {
  try {
    const result = await QuestionAndAnswerController.getAllQuestions();
    if (result) {
      resMessage(res, 200, result);
    } else {
      resMessage(res, 500, "Empty");
    }
  } catch (error) {
    console.log(error);
    resMessage(res, 500, error);
  }
});

// get By Id
router.get("/getQAById/:id", async (req, res) => {
  try {
    const result = await QuestionAndAnswerController.getQuestionById(
      Number(req.params.id),
    );
    if (result) {
      resMessage(res, 200, result);
    } else {
      resMessage(res, 500, "Empty");
    }
  } catch (error) {
    console.log(error);
    resMessage(res, 500, error);
  }
});

// get by page and limit
router.get("/getQAByPage", async (req, res) => {
  try {
    const { page, limit } = req.query;
    if (page && limit) {
      const result = await QuestionAndAnswerController.getQuestionByPage(
        Number(page),
        Number(limit),
      );
      if (result) {
        resMessage(res, 200, result);
      } else {
        resMessage(res, 500, "Empty");
      }
    } else {
      resMessage(res, 401, "Invalid Params");
    }
  } catch (error) {
    console.log(error);
    resMessage(res, 500, error);
  }
});

export default router;
