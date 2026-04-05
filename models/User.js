const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  role: {
    type: String,
    enum: ["manager", "developer", "learner"],
    default: "developer"
  }
});

module.exports = mongoose.model("User", userSchema);