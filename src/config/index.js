const dotenv = require('dotenv');
const logger = require('./logger-config');

dotenv.config();

module.exports ={
    PORT:process.env.PORT,
    logger
}
