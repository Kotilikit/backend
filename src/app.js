const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/users");
const bookRouter = require("./routes/books");
const loggerOne = require("./middleware/loggerOne");

dotenv.config();

const {
  PORT = 3005,
  API_URL = "http://127.0.0.1",
  MONGO_URL = "mongodb://localhost:27017/mydb",
} = process.env;

mongoose.connect(MONGO_URL).catch((error) => console.log(error));

const app = express();

const helloWorld = (request, response) => {
  response.status(200);
  response.send("Hello, World!");
};

app.use(cors());
app.use(loggerOne);
app.use(bodyParser.json());

app.get("/", helloWorld);

app.use(userRouter);
app.use(bookRouter);

app.listen(PORT, () => {
  console.log(`Сервер запущен по адресу ${API_URL}:${PORT}`);
});
