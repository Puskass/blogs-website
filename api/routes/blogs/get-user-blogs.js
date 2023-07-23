const express = require("express");
const mongoose = require("mongoose");
const Blog = mongoose.model("blogs");
const checkAuth = require("../../middlewares/check-auth");

const router = express.Router();
router.get("/api/user/blogs", checkAuth, async (req, res) => {
  const currentUser = req.userData.id;
  const userBlogsList = await Blog.find({ userId: currentUser });

  res.status(201).send(userBlogsList);
});

module.exports = router;
