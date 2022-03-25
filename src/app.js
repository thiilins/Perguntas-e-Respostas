"use strict";
const express = require("express");
const app = express();
const routes = require("./routes");
const path = require("path");
const logger = require("morgan");
// Habilitando o View Engine
app.set("view engine", "ejs");
// Definindo a pasta view
app.set("views", path.resolve("src", "views"));
// Definindo a Pasta Estática
app.use(express.static(path.resolve("src", "public")));
//Permitindo JSON e Habilitando Recebimento de Forms
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));
app.use(routes);

module.exports = app;
