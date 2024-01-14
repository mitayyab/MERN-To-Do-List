const dotenv = require("dotenv").config();

const PORT = process.env.PORT
const MONGO_DB_CONN_STR  = process.env.MONGO_DB_CONN_STR;

module.exports = {
    PORT,
    MONGO_DB_CONN_STR
}