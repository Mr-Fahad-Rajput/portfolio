const Comment = require("../Models/commentSchema");

module.exports = async (req, res) => {
  try {
    const name = req.body.name;
    const profileImg = req.body.profileImg;
    const email = req.body.email;
    const comment = req.body.comment;

    const sendComment = new Comment({
      name: name,
      profileImg: profileImg,
      email: email,
      comment: comment,
    });

    const created = await sendComment.save();
    var setUrl = "";
    setUrl = `${process.env.SERVER_URL}/oauthgoogle#success`
    res.status(200).send({ message: "Successful", urlRes: setUrl });
  } catch (error) {
    setUrl = `${process.env.SERVER_URL}/oauthgoogle#cancel`;
    const errorMessage = error.message;
    res.status(400).send({ message: errorMessage, urlRes: setUrl });
  }
};
