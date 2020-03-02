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
  // console.log("resPost: ", resPost);
  res.json(resPost);
});

router.post("/posts/add/:id", (req, res) => {
  // console.log("NODE_CREATE_POST: ", req.body);
  const content = JSON.parse(
    fs.readFileSync(path.join(__dirname, "..", "data", "posts.json"), "utf8")
  );

  let newPost = {
    userId: req.body.userId,
    title: req.body.title
  };
  content.push(newPost);
  // console.log("content: ", content);
  fs.writeFileSync(
    path.join(__dirname, "..", "data", "posts.json"),
    JSON.stringify(content)
  );
});

module.exports = router;
