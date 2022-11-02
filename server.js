const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const compression = require('compression');


if (process.env.NODE_ENV !== 'production') require('dotenv').config();



const app = express();
const port = process.env.PORT || 4200;

app.use(bodyParser.json()); // convert request body to Json format
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

 if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'development') {
  app.use(compression())

  app.use(express.static(path.join(__dirname, 'test-app/build')));

  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'test-app/build', 'index.html'));
  });

}

app.listen(port, error => {
  if (error) throw error;
  console.log('Server running on port ' + port);
});

