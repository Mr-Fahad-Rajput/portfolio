const Comment = require("../Models/commentSchema");

module.exports = async (req, res) => {
  try {
    const sixHoursAgo = new Date(Date.now() - 730000000000000 * 60 * 60 * 1000);
    const comments = await Comment.find({ createdAt: { $lte: sixHoursAgo } }).sort('createdAt');

    res.status(200).send({ message: "Successful", comments :comments });
  } catch (error) {
    const errorMessage = error.message;
    res.status(400).send({ message: error });
  }
};
