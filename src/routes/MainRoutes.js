"use strict";
const express = require("express");
const router = express.Router();
const MainController = require("../controllers/MainController");

router.get("/", MainController.index);
router.get("/400", (req, res, next) => {
  res.status(400).render("error-400 ", { title: "400  - Erro!" });
});
module.exports = router;
