"use strict";
const { Question } = require("../models");
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
  notFound(req, res) {
    res.redirect("/");
  },
};
module.exports = MainController;
