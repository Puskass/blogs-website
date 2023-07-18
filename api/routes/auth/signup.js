const { hash } = require("bcrypt");
const express = require("express");
const router = express.Router();

router.post("/api/users/signup", async (req, res) => {
  const { username, firstName, lastName, email, password, confirmPassword } = req.body;

  const existingUser = await User.findOne({ username: username });
  if (existingUser) return res.status(401).send({ message: "Auth failed" });

  if (password !== confirmPassword) return res.status(400).send({ message: "Passwords do not match" });

  const hashedPassword = await bcrypt.hash(password, 10);

  const createdUser = await User.create({
    username,
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });

  res.send(createdUser);
});

module.exports = router;
