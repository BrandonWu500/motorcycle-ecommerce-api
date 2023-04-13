require("dotenv").config();
require("express-async-errors");
const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./config/dbConn");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const errorHandler = require("./middleware/errorHandler");

const PORT = process.env.PORT || 3500;

const app = express();

connectDB();

app.use(express.json());

app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

app.use(errorHandler);

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => {
    console.log("Server listening on port", PORT);
  });
});
