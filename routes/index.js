const router = require("express").Router();
const paypal = require("paypal-rest-sdk");
const paypalConfig = require("../config/paypal.json");
const { products } = require("../config/products");

// Configuring PayPal
paypal.configure(paypalConfig);

// Route to render the main page (index)
router.get("/", (req, res) => {
  res.render("index", { products });
});

// Route for the purchase, redirecting to PayPal
router.post("/buy", (req, res) => {
  // ...
});

// Route for successful purchase
router.get("/success", (req, res) => {
  // ...
});

// Route for canceled purchase
router.get("/cancel", (req, res) => {
  // ...
});

module.exports = router;
