"use strict";
const { Answer } = require("../models");
const AnswerController = {
  async addAnswer(req, res) {
    try {
      const { questionID } = req.params;
      const { content } = req.body;
      await Answer.create({
        content,
        question_id: questionID,
      });
      res.redirect(`/question/view/${questionID}`);
    } catch (error) {
      res.status(400).redirect("/error-400");
    }
  },
  async deleteAAnswer(req, res) {
    try {
      const { id } = req.params;
      const { questionID } = req.body;
      await Answer.destroy({ where: { id } });
      res.redirect(`/question/view/${questionID}`);
    } catch (error) {
      res.status(400).redirect("/error-400");
    }
  },
};
module.exports = AnswerController;
