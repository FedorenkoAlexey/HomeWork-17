const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");
const router = require("express").Router();

router.get("/posts", (req, res) => {
  let content = fs.readFileSync(
    path.join(__dirname, "..", "data", "posts.json"),
    "utf8"
  );
  let posts = JSON.parse(content);
  res.json(posts);
});

router.get("/posts/:id", (req, res) => {
  let userId = +req.params.id;
  const content = JSON.parse(
    fs.readFileSync(path.join(__dirname, "..", "data", "posts.json"), "utf8")
  );

  let resPost = content.filter(post => post.userId === userId);
  console.log("resPost: ", resPost);
  res.json(resPost);
});

module.exports = router;
