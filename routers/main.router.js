const express = require("express");
const mainController = require("../controllers/main.controller");

const mainRouter = express.Router();

mainRouter.get("/", mainController.renderMainPage);

module.exports = {
    mainRouter
}