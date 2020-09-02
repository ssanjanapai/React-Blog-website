const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Post = mongoose.model("Category");

router.get("/posts", (req, res) => {
  Post.find()
    .populate("category", "_id name")
    .then((categories) => {
      res.json({ categories });
    })
    .catch((err) => {
      console.log(err);
    });
});
module.exports = router;
