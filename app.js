const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const hpp = require("hpp");
const xss = require("xss-clean");
const mongoSanitize = require("express-mongo-sanitize");
const rateLimit = require("express-rate-limit");
const userRoute = require("./routes/userRoute");

const app = express();

app.use(express.json());
app.use(cors());

app.use(helmet());

app.use("/users", userRoute);

module.exports = app;
