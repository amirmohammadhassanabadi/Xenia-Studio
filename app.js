require("dotenv").config();
const express = require("express");
const config = require("./config")[process.env.NODE_ENV || "development"];
const logger = config.logger;

// creating App
const app = express();

// Server Init
app.listen(config.port, () => {
    logger.info(`app is running on port ${config}`)
})