"use strict";
const { Question, Answer } = require("../models");
const MainController = {
  async index(req, res) {
    //Inicio dos Filtros
    const { filterBy, orderBy } = req.query;
    const filterItem = filterBy !== undefined ? filterBy : "id";
    const filterOder = orderBy !== undefined ? orderBy : "DESC";
    //Fim dos Filtros
    const questionList = await Question.findAll({
      order: [[filterItem, filterOder]],
    });
    res.render("index", { questionList, title: "Perguntas" });
  },
  askView(req, res) {
    res.render("ask", { title: "Adicionar Pergunta" });
  },
  async ask(req, res) {
    const { title, description } = req.body;
    await Question.create({
      title: title,
      description: description,
    });
    res.redirect("/");
  },
  async question(req, res) {
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
      ? res.render("question", { title: question.title, question })
      : res.redirect("/");
  },
  notFound(req, res) {
    res.redirect("/");
  },
  async deleteQuestion(req, res) {
    const { id } = req.params;
    await Question.destroy({ where: { id } });
    res.redirect("/");
  },
  async answer(req, res) {
    const { questionID } = req.params;
    const { content } = req.body;
    await Answer.create({
      content,
      question_id: questionID,
    });
    res.redirect(`/question/${questionID}`);
  },
};
module.exports = MainController;
