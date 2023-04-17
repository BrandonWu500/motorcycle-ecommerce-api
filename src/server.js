require("dotenv").config();
require("express-async-errors");
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const connectDB = require("./config/dbConn");
const rootRoutes = require("./routes/rootRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const errorHandler = require("./middleware/errorHandler");

const PORT = process.env.PORT || 3500;

const app = express();

connectDB();

app.use(express.json());

app.use("/", express.static(path.join(__dirname, "/public")));

app.use("/", rootRoutes);
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);
app.use("/payments", paymentRoutes);

app.use(errorHandler);

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => {
    console.log("Server listening on port", PORT);
  });
});
