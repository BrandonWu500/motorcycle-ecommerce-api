require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./config/dbConn");

const PORT = process.env.PORT || 3500;

const app = express();

connectDB();

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => {
    console.log("Server listening on port", PORT);
  });
});
