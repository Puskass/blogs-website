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

// Blog Routes
const createBlogRoute = require("./routes/blogs/create-blog");
const viewAllBlogsRoute = require("./routes/blogs/get-blogs");
const viewUserBlogsRoute = require("./routes/blogs/get-user-blogs");

// Auth Routes
app.use(signInRoute);
app.use(signUpRoute);

// Blog Routes
app.use(createBlogRoute);
app.use(viewAllBlogsRoute);
app.use(viewUserBlogsRoute);

mongoose.connect(keys.mongoURI).then(() => {
  app.listen(5000, () => {
    console.log("Server running on port 5000");
  });
});
