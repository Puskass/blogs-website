const express = require("express");
const mongoose = require("mongoose");
const Blog = mongoose.model("blogs");

const router = express.Router();
router.get("/api/blogs", async (req, res) => {
  const blogsList = await Blog.find();

  res.status(201).send(blogsList);
});

module.exports = router;
