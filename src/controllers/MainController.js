"use strict";
const MainController = {
  index(req, res) {
    res.render("index");
  },
  askView(req, res) {
    res.render("ask", { title: "Realizar Perguntas" });
  },
  ask(req, res) {
    const { title, description } = req.body;
    console.log(title, description);
    res.send("Formulario Enviado com Sucesso!");
  },
};
module.exports = MainController;
