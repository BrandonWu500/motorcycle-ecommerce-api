const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  items: {
    type: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Product",
        },
      },
      {
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  subtotal: {
    type: Number,
    required: true,
  },
  shipping: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  customer: {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  ref: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Order", orderSchema);
