"use strict";
const express = require("express");
const router = express.Router();
const MainController = require("../controllers/MainController");
router.get("/", MainController.index);
router.get("/ask-a-question", MainController.askView);
router.post("/ask-a-question", MainController.ask);
module.exports = router;
