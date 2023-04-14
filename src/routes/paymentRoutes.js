const express = require("express");
const { startPayment } = require("../controllers/paymentController");
const router = express.Router();

router.route("/").post(startPayment);

module.exports = router;
