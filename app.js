const express = require("express");
const apiRouter = require("./routes/api.router");
const {
  handlePSQLErrors,
  handleCustoms,
  handle500s,
  handleInvalidPaths,
} = require("./errors/index");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", apiRouter);
app.all("/*", handleInvalidPaths);

app.use(handlePSQLErrors);
app.use(handleCustoms);
app.use(handle500s);

module.exports = app;
