const mongoose = require("mongoose");
const { Schema } = mongoose;

const usersSchema = new Schema({
  username: String,
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

mongoose.model("users", usersSchema);
