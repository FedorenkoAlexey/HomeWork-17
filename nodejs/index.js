const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// server = http.createServer((req, res) => {
//   res.write("<h1>Header - H1</h1>");
//   res.end("Hello NodeJS!");
// });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.all("/*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers, Content-Type, X-Requested-With");
  next();
});

app.get("/", (req, res) => {
  res.send("Welcome to Node API");
});

app.get("/getData", (req, res) => {
  res.json({ message: "Hello World" });
});

app.post("/postData", bodyParser.json(), (req, res) => {
  res.json(req.body);
});

app.listen(3000, "127.0.0.1", () => {
  console.log("Server is running... port:3000");
});
