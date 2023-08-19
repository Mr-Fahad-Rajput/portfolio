const Users = require("../Models/userSchema");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

module.exports = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    console.log(token);
    if (!token) {
      res.status(401).send("No token");
    } else {
        const payload = process.env.KEY_JWT;
        const verifyToken = jwt.verify(token, payload);
        const rootUser = await Users.findOne({
          _id: verifyToken._id,
          "tokens.token": token,
        });

      if (!rootUser) {
        res.status(401).send("User Not Logged In");
      } else {
        res.status(200).send("Authorized User");
      }
    }

    next();
  } catch (error) {
    const errorMessage = error.message;
    res.status(401).send(errorMessage);
    console.log(error);
  }
};
