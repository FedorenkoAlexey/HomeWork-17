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
  let maxId = Math.max(...content.map(post => post.id));
  console.log("MAX: ", maxId);

  let newPost = {
    userId: req.body.userId,
    id: maxId + 1,
    title: req.body.title
  };
  content.push(newPost);
  // console.log("POST_ID: ", newPost);
  fs.writeFileSync(
    path.join(__dirname, "..", "data", "posts.json"),
    JSON.stringify(content)
  );
});

router.delete("/posts/del/:id", (req, res) => {
  // console.log("res-DEL-Node: ", req.params.id);
  let postId = req.params.id;
  let content = JSON.parse(
    fs.readFileSync(path.join(__dirname, "..", "data", "posts.json"), "utf8")
  );
  let resPost = content.filter((post, id) => post.id !== +postId);
  // console.log("resPost", resPost);
  fs.writeFileSync(
    path.join(__dirname, "..", "data", "posts.json"),
    JSON.stringify(resPost)
  );
  res.send(resPost);
});

module.exports = router;
