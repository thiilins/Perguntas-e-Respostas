"use strict";
const MainController = {
  index(req, res) {
    res.render("index");
  },
  viewPerguntar(req, res) {
    res.render("perguntar", { title: "Realizar Perguntas" });
  },
  perguntar(req, res) {
    const { title, description } = req.body;
    console.log(title, description);
    res.send("Formulario Enviado com Sucesso!");
  },
};
module.exports = MainController;
