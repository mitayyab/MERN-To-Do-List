const mongoose = require('mongoose');

const {MONGO_DB_CONN_STR} = require("../config/index")


const connectionString = MONGO_DB_CONN_STR

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(connectionString);
        console.log("DATABASE CONNECTED: ", conn.connection.host);
    } catch (error) {
        console.log("ERROR: ", error);
    }
}

module.exports = connectDB;