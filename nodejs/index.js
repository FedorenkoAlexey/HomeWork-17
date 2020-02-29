const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const fs = require("fs");

// console.log(path.join(__dirname, "data", "users.json"));

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.all("/*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers, Content-Type, X-Requested-With");
  next();
});

app.get("/", (req, res) => {
  res.send("Welcome to Node API");
});

app.get("/users", (req, res) => {
  let content = fs.readFileSync(
    path.join(__dirname, "data", "users.json"),
    "utf8"
  );
  let users = JSON.parse(content);
  res.json(users);
});

app.post("/postData", bodyParser.json(), (req, res) => {
  res.json(req.body);
});

app.listen(3000, "127.0.0.1", () => {
  console.log("Server is running... port:3000");
});
