// Importing Routers
const { mainRouter } = require("./main.router");

// Using Routers
function importRouters(app) {
  app.use("/", mainRouter);
}

module.exports = importRouters;
