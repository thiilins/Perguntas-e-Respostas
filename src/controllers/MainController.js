"use strict";
const { Question } = require("../models");
const MainController = {
  async index(req, res) {
    //Inicio dos Filtros
    const { filterBy, orderBy } = req.query;
    console.log({ filterBy, orderBy });
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
    const question = await Question.findByPk(id);
    question !== undefined
      ? res.render("question", { title: question.title, question })
      : res.redirect("/");
  },
  notFound(req, res) {
    res.redirect("/");
  },
};
module.exports = MainController;
