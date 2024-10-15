require("dotenv").config();
const express = require("express");
const config = require("./config")[process.env.NODE_ENV || "development"];
const logger = config.logger;

// creating App
const app = express();

// Importing Routers
const {mainRouter} = require("./routers/main.router");


// Using Routers
app.use("/", mainRouter);


// Server Init
app.listen(config.port, () => {
    logger.info(`app is running on port ${config}`)
})