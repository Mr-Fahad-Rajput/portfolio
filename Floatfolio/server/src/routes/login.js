const Users = require("../Models/userSchema");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const user = await Users.findOne({ email: email });
    if (user) {
      const isMatch = await bcryptjs.compare(password, user.password);
      if (isMatch) {
        const token = await user.generateToken();
        res.cookie("jwt", token, {
          expires: new Date(Date.now() + 86400000),
          httpOnly: true,
          secure: false,
          sameSite: 'none'
        });
        res.status(200).send("Logged In");
      } else {
        res.status(400).send("User Credentials Do Not Match");
      }
    } else {
      res.status(400).send("User Details Not Found");
    }
  } catch (error) {
    const errorMessage = error.message;
    res.status(400).send(errorMessage);
  }
};
