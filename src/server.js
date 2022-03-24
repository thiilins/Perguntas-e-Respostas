"use strict";
const app = require("./app.js");
const normalizePort = require("./helpers/normalizePort");
const PORT = normalizePort(process.env.PORT || 3000);
app.listen(PORT, (erro) => {
  erro ? console.log(erro) : console.log(`Server running  on port ${PORT}`);
});
