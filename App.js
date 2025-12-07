const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const ConnectDB = require("./Config/DataBase");
const Router = require("./Router/Router");
const port = process.env.PORT || 8000;

const app = express();
dotenv.config();

app.use(express.json());
app.use(morgan("dev"));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  next();
});

ConnectDB();

app.use("/api", Router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
