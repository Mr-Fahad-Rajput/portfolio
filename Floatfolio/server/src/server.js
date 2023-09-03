const express = require("express");
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
app.use(
  cors({
    origin: [process.env.SERVER_URL,"https://checkout.stripe.com"],
    credentials: true,
    methods: "GET,PUT,POST",
  })
);

app.set("trust proxy", 1);

app.use(reqAuth);

app.use(express.urlencoded({ extended: true }));
// RemoteAddress-:remote-addr - RemoteUser-:remote-user
app.use(morgan("tiny"));
app.use(router);

//Server Listing
app.listen(process.env.PORT);
console.log("Server Running");
