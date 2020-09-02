const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Post = mongoose.model("Post");

router.get("/posts", (req, res) => {
  Post.find()
    .populate("category", "_id name")
    .then((posts) => {
      res.json({ posts });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/new-post", (req, res) => {
  const { title, description, imgUrl, category } = req.body;

  if (title || description || imgUrl || category) {
    res.json({ err: "all fields are required" });
  }
  const post = new Post({
    title,
    description,
    imgUrl,
    category,
  });
  post
    .save()
    .then(() => {
      res.json({ msg: "post created" });
    })
    .catch((err) => {
      console.log(err);
    });
});
module.exports = router;
