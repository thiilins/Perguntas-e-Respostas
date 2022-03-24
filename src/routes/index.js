"use strict";
const express = require("express");
const router = express.Router();
const mainRoutes = require("./main.routes");
router.use("/", mainRoutes);

module.exports = router;
