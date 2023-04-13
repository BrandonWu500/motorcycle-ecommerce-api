const Order = require("../models/Order");

// @desc Create order
// @route POST /orders
// @access Public
const createOrder = async (req, res) => {
  const orderData = req.body;

  // generate shorter id for reference
  orderData.ref = (Math.random() + 1).toString(36).substring(7);

  const newOrder = await Order.create(orderData);

  if (newOrder) {
    res.status(201).json(newOrder);
  } else {
    res.status(400).json({ message: "Invalid order data received" });
  }
};

// @desc Get product
// @route GET /products/:ref
// @access Public
const getOrderByRef = async (req, res) => {
  const { ref } = req.params;
  const order = await Order.findOne({ ref }).lean().exec();

  if (!order) return res.status(404).json({ message: "Order not found" });

  return res.json(order);
};

module.exports = { createOrder, getOrderByRef };
