const express = require('express')
const cors = require('cors');

const connectDB = require("./database/index")
const {PORT} = require("./config/index")
const router = require("./routes/index")
const errorHandler = require("./middleware/errorHandler");

const app = express()

app.use(cors());

const port = PORT;

connectDB();

app.use(express.json())

app.use(router);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})