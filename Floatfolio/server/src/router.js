const express = require("express");
const router = express.Router();

// Registration
router.post("/register", require("./routes/register"));

//Login
router.post("/login", require("./routes/login"));

// Message
router.post("/message", require("./routes/message"));

// Stripe API
router.post("/stripe", require("./routes/stripe.js"));

//Logout
router.get("/logout", require("./routes/logout"));

//authentication Middleware
router.get("/auth", require("./middleWare/authenticate"));

router.get("/", (req, res) => {
  res.send("Hello! I'm Nadeem! Nadeem SERVER");
});

module.exports = router;
