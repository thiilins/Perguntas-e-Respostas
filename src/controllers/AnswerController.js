"use strict";
const { Answer } = require("../models");
const AnswerController = {
  async addAnswer(req, res) {
    const { questionID } = req.params;
    const { content } = req.body;
    await Answer.create({
      content,
      question_id: questionID,
    });
    res.redirect(`/question/view/${questionID}`);
  },
  async deleteAAnswer(req, res) {
    const { id } = req.params;
    const { questionID } = req.body;
    await Answer.destroy({ where: { id } });
    res.redirect(`/question/view/${questionID}`);
  },
};
module.exports = AnswerController;
