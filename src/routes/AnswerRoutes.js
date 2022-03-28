"use strict";
const express = require("express");
const router = express.Router();
const AnswerController = require("../controllers/AnswerController");
router.post("/add/:questionID", AnswerController.addAnswer);
router.delete("/delete/:id", AnswerController.deleteAAnswer);

module.exports = router;
