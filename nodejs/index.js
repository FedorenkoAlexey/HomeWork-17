const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");

const app = express();
const posts = require("./routes/posts");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(posts);

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
  // console.log("res-DEL-Node: ", req.params.id);
  let userId = req.params.id;
  let content = JSON.parse(
    fs.readFileSync(path.join(__dirname, "data", "users.json"), "utf8")
  );
  let resUser = content.filter((user, id) => user.id !== +userId);
  fs.writeFileSync(
    path.join(__dirname, "data", "users.json"),
    JSON.stringify(resUser)
  );
  res.send(resUser);
  // console.log("resUser: ", resUser);
});

app.listen(3000, "127.0.0.1", () => {
  console.log("Server is running... port:3000");
});
