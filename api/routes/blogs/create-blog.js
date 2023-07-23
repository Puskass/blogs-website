const express = require("express");
const mongoose = require("mongoose");
const Blog = mongoose.model("blogs");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();
router.post("/api/blogs/add-blog", checkAuth, async (req, res) => {
  const { title, description } = req.body;

  if (title.length === 0) return res.status(400).send({ message: "Title must be provided" });
  if (title.length > 50) return res.status(400).send({ message: "Title length out of bounds" });

  if (description.length === 0) return res.status(400).send({ message: "Description must be provided" });
  if (description.length > 5000) return res.status(400).send({ message: "Description length out of bounds" });

  const check = await Blog.findOne({ title: title });
  if (check) return res.status(400).send({ message: "Blog with this title already exists" });

  const createdBlog = await Blog.create({ title, content: description, userId: req.userData.id });

  res.status(201).send({ createdBlog, message: "Blog Created Successfully" });
});

module.exports = router;
