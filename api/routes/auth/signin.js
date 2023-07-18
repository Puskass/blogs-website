const express = require("express");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const User = mongoose.model("users");
const { JWT_SECRET_KEY } = require("../config/keys");

const router = express.Router();

router.post("/api/users/signin", async (req, res) => {
  const { username, password } = req.body;

  const existingUser = await User.findOne({ username: username });
  if (!existingUser) return res.status(404).send({ message: "User Not Found" });

  const isMatch = await bcrypt.compare(password, existingUser.password);
  if (!isMatch) return res.status(400).send({ message: "Incorrect Password" });

  res.send({
    message: "Auth Successful",
    token: jwt.sign({ id: existingUser._id }, JWT_SECRET_KEY, {
      expiresIn: "1h",
    }),
  });
});

module.exports = router;
