// Importing the express library
const express = require("express");
// Importing the EJS library
const ejs = require("ejs");
// Importing the body-parser library
const bodyParser = require("body-parser");
// Execute Express to create an instance of index.js
const app = express();
// Set the default view engine as EJS
app.set('view engine', 'ejs');
// Set the 'public' folder where image files are loaded
app.use(express.static('public'));
// Disable extended configurations
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Routes
app.use('/', require('./routes'));
// Set the default port to 3000 and display the successful connection message
app.listen(3000, () => console.log('Running on port 3000'));

// Import and load the PayPal SDK script
const { loadScript } = require("@paypal/paypal-js");

loadScript({ "client-id": "AWiWW0bdNM31kMgEHbWe6InYV4I1yYZQrHr5SbbajKYr44HGDTxby2ZsLQ3vxTgj4aGAFUNEuVBA_8ax" })
  .then((paypal) => {
    // The PayPal SDK script was loaded successfully
  })
  .catch((err) => {
    console.error("Failed to load the PayPal JS SDK script", err);
  });


module.exports = express;
