const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51JO2z8SDbM1eFeif6B9ikV1YKaCTTxeM9bXxb37LMRnNEAtcqCiBiye5Nn8GVnEnwcF2ymcohA0C9vnGUoQDJihk00Do41tPce"
);

// API


const app = express();


app.use(cors({ origin: true }));
app.use(express.json());


app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "inr",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

