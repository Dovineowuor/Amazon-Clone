const functions = require('firebase-functions');

const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51HeJNDK860DkztEz6AO2xQRmY7ZObIPc57RoDX3a83YhEctV2rM5a9FOIeN1Tr5miGCa9TybC3JYWeevk3iSpe5u00WlMcnLrt')

//API

//App config
const app = express();

//Midlewares
app.use(cors ({ origin: true}));
app.use(express.json());
//Api routes

app.get('/', (req, res) => res.status(200).send('Hello World'));

app.post('/payments/create', async (req, res) => {
    const total = req.query.total;
    console.log('Payment recieved ', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd'
    });

    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})


//Listen command

exports.api = functions.https.onRequest(app);

//http://localhost:5001/challege-329f3/us-central1/api