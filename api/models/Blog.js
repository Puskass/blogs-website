const mongoose = require("mongoose");
const { Schema } = mongoose;

const blogsSchema = new Schema({
  title: String,
  content: String,
  userId: String,
});

mongoose.model("blogs", blogsSchema);
