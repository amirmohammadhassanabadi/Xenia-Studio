const {name, version} = require('../package.json');
const logger = require("pino");

module.exports = {
    development: {
        name: `${name} - [development]`,
        version,
        logger: logger()
    },
    production: {
        name,
        version,
        logger: logger()
    }
}
