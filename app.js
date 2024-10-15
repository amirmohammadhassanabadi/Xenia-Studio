require("dotenv").config();
const config = require("./config")[process.env.NODE_ENV || "development"];