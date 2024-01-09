const express = require("express");
const { errorMiddleware } = require("./middleware/errorMiddleware");
const dotenv = require("dotenv").config();

const port = process.env.PORT || 5000;

const app = express();

// Middleware to parse JSON in the request body
app.use(express.json());

// Middleware to parse URL-encoded data in the request body
app.use(express.urlencoded({ extended: true }));

// Middleware to modify throw Errors
app.use(errorMiddleware);

app.use("/api/goals", require("./routes/goalRoutes"));

app.listen(port, () => console.log(`Server started on port ${port}`));
