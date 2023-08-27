const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  profileImg: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  } ,
});

// Create Model
const Comment = new mongoose.model("COMMENT", commentSchema);

module.exports = Comment;
