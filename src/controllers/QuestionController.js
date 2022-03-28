"use strict";
const { Question, Answer } = require("../models");
const QuestionController = {
  AddQuestionView(req, res) {
    res.render("make-question", { title: "Adicionar Pergunta" });
  },
  async AddQuestion(req, res) {
    const { title, description } = req.body;
    try {
      let newQuestion = await Question.create({
        title: title,
        description: description,
      });
      res.redirect(`/question/view/${newQuestion.id}`);
    } catch (error) {
      res.status(400).redirect("/400");
    }
  },
  async viewQuestion(req, res) {
    const { id } = req.params;
    try {
      const question = await Question.findOne({
        where: { id },
        include: [
          {
            model: Answer,
            as: "answers",
            required: false,
            order: [["id", "DESC"]],
          },
        ],
      });
      res.render("view-question", { title: question.title, question });
    } catch (error) {
      res.status(404).redirect("/404");
    }
  },

  async deleteQuestion(req, res) {
    const { id } = req.params;
    try {
      await Question.destroy({ where: { id } });
      res.redirect("/");
    } catch (error) {
      res.status(400).redirect("/400");
    }
  },
};

module.exports = QuestionController;
