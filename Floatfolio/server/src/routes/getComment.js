const Comment = require("../Models/commentSchema");

module.exports = async (req, res) => {
  try {
    const comments = await Comment.find({}).sort({'createdAt': 1});
    res.status(200).send({ message: "Successful", comments :comments });
  } catch (error) {
    const errorMessage = error.message;
    res.status(400).send({ message: errorMessage });
  }
};
