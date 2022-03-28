"use strict";
const express = require("express");
const router = express.Router();
const MainController = require("../controllers/MainController");
router.get("/", MainController.index);
router.get("/ask-a-question", MainController.askView);
router.post("/ask-a-question", MainController.ask);
router.get("/question", MainController.notFound);
router.get("/question/:id", MainController.question);
router.delete("/question/:id", MainController.deleteQuestion);
router.post("/answer/:questionID", MainController.answer)
module.exports = router;
