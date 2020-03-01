const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const fs = require("fs");

// console.log(path.join(__dirname, "data", "users.json"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.all("/*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
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

app.post("/postData", bodyParser.json(), async (req, res) => {
  if (!req.body) return response.sendStatus(400);
  console.log("TEST_POST ", req.body);
  await res.json(req.body);
});

app.delete("/users/:id", (req, res) => {
  console.log("res-DEL: ", req.params.id);
});

app.listen(3000, "127.0.0.1", () => {
  console.log("Server is running... port:3000");
});
