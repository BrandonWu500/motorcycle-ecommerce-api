const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// @desc Start payment
// @route POST /payments
// @access Public
const startPayment = async (req, res) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: req.body.amount, // integer, for usd -> cents
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.json({ paymentIntent: paymentIntent.client_secret });
};

module.exports = { startPayment };
