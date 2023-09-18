const express = require("express");
const router = express.Router();
const multer = require('multer');

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

// IP geo API
router.post("/ipgeo", require("./routes/ipgeo.js"));

// Vision API
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
router.post("/cloudvision", upload.single('image'), require("./routes/cloudvision.js"));

// OpenAI API
router.post("/chat", require("./routes/chat.js"));
router.post("/dalle", require("./routes/dalle.js"));
router.post("/whisper", upload.single('audio'), require("./routes/whisper.js"));


router.get("/", (req, res) => {
  res.send("{Server Connection Un-Authorized, 4/4 Security Keys Missing}");
});

module.exports = router;
