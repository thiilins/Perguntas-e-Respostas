"use strict";
const { Question, Answer } = require("../models");
const QuestionController = {
  AddQuestionView(req, res) {
    res.render("make-question", { title: "Adicionar Pergunta" });
  },
  async AddQuestion(req, res) {
    const { title, description } = req.body;
    await Question.create({
      title: title,
      description: description,
    });
    res.redirect("/");
  },
  async viewQuestion(req, res) {
    const { id } = req.params;
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

    question !== undefined
      ? res.render("view-question", { title: question.title, question })
      : res.redirect("/");
  },

  async deleteQuestion(req, res) {
    const { id } = req.params;
    await Question.destroy({ where: { id } });
    res.redirect("/");
  },
};

module.exports = QuestionController;
