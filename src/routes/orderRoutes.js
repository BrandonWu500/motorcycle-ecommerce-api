const express = require("express");
const {
  createOrder,
  getOrderByRef,
} = require("../controllers/orderController");
const router = express.Router();

router.route("/").post(createOrder);
router.route("/:ref").get(getOrderByRef);

module.exports = router;
