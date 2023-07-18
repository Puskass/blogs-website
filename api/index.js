// Server Setup
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const keys = require("./config/keys");

const app = express();
app.use(cors());
app.use(express.json());

require("./models/User");
require("./models/Blog");

// Auth Routes
const signInRoute = require("./routes/auth/signin");
const signUpRoute = require("./routes/auth/signup");

// Auth Routes
app.use(signInRoute);
app.use(signUpRoute);

mongoose.connect(keys.mongoURI).then(() => {
  app.listen(5000, () => {
    console.log("Server running on port 5000");
  });
});
