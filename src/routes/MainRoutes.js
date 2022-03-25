"use strict";
const express = require("express");
const router = express.Router();
const MainController = require("../controllers/MainController");
router.get("/", MainController.index);
router.get("/perguntar", MainController.viewPerguntar);
router.post("/perguntar", MainController.perguntar);
module.exports = router;
