const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");
const router = require("express").Router();

router.get("/users", (req, res) => {
  let content = fs.readFileSync(
    path.join(__dirname, "..", "data", "users.json"),
    "utf8"
  );
  let users = JSON.parse(content);
  res.json(users);
});

router.put("/users/edit/:id", (req, res) => {
  console.log("res-PUT-Node: ", req.body);
  let content = JSON.parse(
    fs.readFileSync(path.join(__dirname, "..", "data", "users.json"), "utf8")
  );
  content.forEach(user => {
    if (user.id === req.body.id) {
      user.userName = req.body.userName;
    }
  });
  console.log(content);
  fs.writeFileSync(
    path.join(__dirname, "..", "data", "users.json"),
    JSON.stringify(content)
  );

  res.json(content);
});

router.delete("/users/:id", (req, res) => {
  // console.log("res-DEL-Node: ", req.params.id);
  let userId = req.params.id;
  let content = JSON.parse(
    fs.readFileSync(path.join(__dirname, "..", "data", "users.json"), "utf8")
  );
  let resUser = content.filter((user, id) => user.id !== +userId);
  fs.writeFileSync(
    path.join(__dirname, "..", "data", "users.json"),
    JSON.stringify(resUser)
  );
  res.send(resUser);
  // console.log("resUser: ", resUser);
});

module.exports = router;
