const express = require("express");
require("express-async-errors");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");

require("./config/db");

//models

//routes

app.use((req, res, next) => {
  req.status = 404;
  const error = new Error("404! Routes not found");
  next(error);
});

app.use((error, req, res, next) => {
  res.status(req.status || 500).send({
    message: error.message,
    stack: error.stack,
  });
});

var port = process.env.PORT || 4000;

app.listen(port, function () {
  console.log("Server is running on port: " + port);
});
