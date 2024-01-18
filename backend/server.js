const express = require("express");
const colors = require("colors");
const { errorMiddleware } = require("./middleware/errorMiddleware");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");

const port = process.env.PORT || 5000;

connectDB();

const app = express();

// Middleware to parse JSON in the request body
app.use(express.json());

// Middleware to parse URL-encoded data in the request body
app.use(express.urlencoded({ extended: true }));

app.use("/api/goals", require("./routes/goalRoutes"));

// Middleware to modify throw Errors
app.use(errorMiddleware);

app.listen(port, () => console.log(`Server started on port ${port}`));
