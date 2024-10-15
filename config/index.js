const { name, version } = require("../package.json");
const logger = require("pino");
require("dotenv").config({path: "../.env"});

module.exports = {
  development: {
    name: `${name} - [development]`,
    version,
    port: process.env.PORT || 4000,    
    logger: logger(),
  },
  production: {
    name,
    version,
    port: process.env.PORT || 4000,
    logger: logger(),
  },
};
