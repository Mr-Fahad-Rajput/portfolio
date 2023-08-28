const express = require("express");
const router = express.Router();

// Registration
router.post("/register", require("./routes/register.js"));

//Login
router.post("/login", require("./routes/login.js"));

// Message
router.post("/message", require("./routes/message.js"));

// Comment
router.post("/comment", require("./routes/comment.js"));

// Comment
router.get("/comment", require("./routes/getComment.js"));

//Logout
router.get("/logout", require("./routes/logout.js"));

//authentication Middleware
router.get("/auth", require("./middleWare/authenticate.js"));

// Stripe API
router.post("/stripe", require("./routes/stripe.js"));

// Mail Chimp API
router.post("/mailchimp", require("./routes/mailchimp.js"));

router.get("/", (req, res) => {
  res.send("Hello! I'm Nadeem! Nadeem SERVER");
});

module.exports = router;
