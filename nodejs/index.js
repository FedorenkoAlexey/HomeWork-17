const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");
const cors = require("cors");

const app = express();
const users = require("./routes/users");
const posts = require("./routes/posts");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(users);
app.use(posts);

app.all("/*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header(
    "Access-Control-Allow-Headers, Content-Type, X-Requested-With",
    "GET, PUT, POST, DELETE"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("Welcome to Node API");
});

app.listen(3000, "127.0.0.1", () => {
  console.log("Server is running... port:3000");
});
