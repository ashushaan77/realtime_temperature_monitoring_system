const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const readingRouter = require("./routes/reading_route");
const error_handler = require("./middleware/error_handler");

// Routes
app.use("/api", readingRouter);

// Error handler middleware
app.use(error_handler);

module.exports = app;
