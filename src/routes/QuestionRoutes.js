"use strict";
const express = require("express");
const router = express.Router();
const QuestionController = require("../controllers/QuestionController");
router.get("/add", QuestionController.AddQuestionView);
router.post("/add", QuestionController.AddQuestion);
router.get("/view/:id", QuestionController.viewQuestion);
router.delete("/delete/:id", QuestionController.deleteQuestion);
module.exports = router;
