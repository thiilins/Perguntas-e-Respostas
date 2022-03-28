"use strict";
const express = require("express");
const router = express.Router();
const mainRoutes = require("./MainRoutes");
const questionRoutes = require("./QuestionRoutes");
const answerRoutes = require("./AnswerRoutes");
router.use("/", mainRoutes);
router.use("/question", questionRoutes);
router.use("/answer", answerRoutes);

module.exports = router;
