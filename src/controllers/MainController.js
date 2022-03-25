"use strict";
const { Question } = require("../models");
const MainController = {
  async index(req, res) {
    const questionList = await Question.findAll();
    console.log(questionList);
    res.render("index", { questionList });
  },
  askView(req, res) {
    res.render("ask", { title: "Realizar Perguntas" });
  },
  async ask(req, res) {
    const { title, description } = req.body;
    await Question.create({
      title: title,
      description: description,
    });
    res.redirect("/");
  },
  async listQuestions(req, res) {},
};
module.exports = MainController;
