"use strict";
const express = require("express");
const router = express.Router();
const mainRoutes = require("./MainRoutes");
router.use("/", mainRoutes);

module.exports = router;
