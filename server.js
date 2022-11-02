const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const compression = require('compression');
const enforce = require('express-sslify');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

//const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 4200;

app.use(bodyParser.json()); // convert request body to Json format
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

 if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'development') {
  app.use(compression())
 // app.use(enforce.HTTPS({ trustProtoHeader: true })); // redirect http traffic to https
  app.use(express.static(path.join(__dirname, 'test-app/build')));
console.log("aaaass");
  app.get('/fa', function (req, res) {
    res.sendFile(path.join(__dirname, 'test-app/build', 'index.html'));
  });

}

app.listen(port, error => {
  if (error) throw error;
  console.log('Server running on port ' + port);
});


// app.post('/payment', (req, res) => {
//   const body = {
//     source: req.body.token.id,
//     amount: req.body.amount,
//     currency: 'INR'
//   };

  // stripe.charges.create(body, (stripeErr, stripeRes) => {
  //   if (stripeErr) {
  //     res.status(500).send({ error: stripeErr });
  //   } else {
  //     res.status(200).send({ success: stripeRes });
  //   }
  // });
//});
