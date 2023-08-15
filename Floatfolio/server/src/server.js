const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const router = require("./router");
const cookieParser = require("cookie-parser");
const app = express();

dotenv.config();
// DB Connection
require("./database/connection");
// Middle wares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// RemoteAddress-:remote-addr - RemoteUser-:remote-user
app.use(morgan("tiny"));
app.use(router);

//Server Listing
app.listen(process.env.PORT);
console.log("Server Running");
