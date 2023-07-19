const express = require("express");
const mongoose = require("mongoose");
const User = mongoose.model("users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = require("../../config/keys");

const router = express.Router();
router.post("/api/users/signup", async (req, res) => {
  const { username, firstName, lastName, email, password, confirmPassword } = req.body;

  const existingUser = await User.findOne({ username: username });
  if (existingUser) return res.status(400).send({ message: "Username already in use" });

  if (password !== confirmPassword) return res.status(400).send({ message: "Passwords do not match" });

  const hashedPassword = await bcrypt.hash(password, 10);

  const createdUser = await User.create({
    username,
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });

  res.status(200).send({
    message: "Sign-Up Successful",
    token: jwt.sign({ id: createdUser._id }, JWT_SECRET_KEY, {
      expiresIn: "1h",
    }),
    createdUser,
  });
});

module.exports = router;
