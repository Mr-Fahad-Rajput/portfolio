const Message = require("../Models/msgSchema");

module.exports = async (req, res) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;

    const sendMsg = new Message({
      name: name,
      email: email,
      subject: subject,
      message: message,
    });

    const created = await sendMsg.save();
    console.log(created);
    res.status(200).send("Sent");
  } catch (error) {
    const errorMessage = error.message;
    res.status(400).send(errorMessage);
  }
};
