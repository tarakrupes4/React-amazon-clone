const functions = require("firebase-functions");

const express = require("express");

const cors = require("cors");
const { response } = require("express");

const stripe = require("stripe")(
  "sk_test_51Ju99nSGCj4ZnEkTE88w2ru7jIfamxs43p8AqVq6vwzxUWuA5UEUYWeCWeJClyV4JR6MwLHTyZBlZojuxaNC6bz800FmhuW0fh"
);

//API

//App config
const app = express();
//middlewars
app.use(cors({ origin: true }));
app.use(express.json());
//Api routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log(total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
//listen command

exports.api = functions.https.onRequest(app);

//http://localhost:5001/clone-bd2ba/us-central1/api
