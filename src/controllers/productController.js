const Product = require("../models/Product");

// @desc Get all products
// @route GET /products
// @access Public
const getAllProducts = async (req, res) => {
  const products = await Product.find().lean();
  return res.json(products);
};

// @desc Get all products
// @route GET /products
// @access Public
const getProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id).lean().exec();

  if (!product) return res.status(404).json({ message: "Product not found" });

  return res.json(product);
};

module.exports = { getAllProducts, getProduct };
