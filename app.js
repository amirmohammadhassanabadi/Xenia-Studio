require("dotenv").config();
const express = require("express");
const path = require("path");
const config = require("./config")[process.env.NODE_ENV || "development"];
const logger = config.logger;

// creating App
const app = express();

// View Engine
app.set("view engine", "ejs");
app.set("views", "./views");

// Routers
require("./routers/config.router")(app);

// Server Init
app.listen(config.port, () => {
  logger.info(`app is running on port ${config}`);
});
