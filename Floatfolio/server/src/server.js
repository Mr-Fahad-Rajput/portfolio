const express = require("express");
const session = require("express-session");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const router = require("./router");
const cookieParser = require("cookie-parser");
const app = express();
dotenv.config();

const reqAuth = require("./middleWare/requestAuth");
// DB Connection
require("./database/connection");
// Middle wares
app.use(express.json());
app.use(cookieParser());
// Cors Setup
app.use(cors({
     origin: "http://localhost:5173", 
     credentials: true,
     methods: 'GET,PUT,POST' 
    }));

app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "sessionss",
    cookie: {
      maxAge: 1000 * 60 * 60,
      sameSite: "none",
      secure: false,
    },
  })
);
app.set("trust proxy", 1);

app.use(reqAuth);

app.use(express.urlencoded({ extended: false }));
// RemoteAddress-:remote-addr - RemoteUser-:remote-user
app.use(morgan("tiny"));
app.use(router);
app.get("/test", (req, res) => {
  res.cookie("test", "testSuccessfultwice");
  res.status(200).send("end Point HIt Good ");
});

//Server Listing
app.listen(process.env.PORT);
console.log("Server Running");
