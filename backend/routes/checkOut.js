const express = require("express");
const router = express.Router();
const Stripe = require("stripe");
require("dotenv").config();

const stripe = new Stripe(process.env.SECRET_KEY);
const host = process.env.HOST;

router.post("/checkout", async (req, res) => {
  const { body } = req;
  try {
    const date = new Date().toISOString();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "gbp",
            product_data: {
              name: "INV-" + date,
            },
            unit_amount: body?.amount * 100 || 100,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${req.headers.origin}/stripe-success`,
      cancel_url: `${req.headers.origin}/stripe-error`,
    });
    res.status(200).json({ sessionId: session.id });
  } catch (err) {
    res.status(500).json({ error: `Error checkout session: ${err.message}` });
  }
});

module.exports = router;
