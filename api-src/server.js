const express = require('express');
const router = express.Router();
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// CONNECT TO DATABASE

// API ROUTING
// middleware to use for all requests
app.use(function (req, res, next) {
  console.log('using router');
  next();
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// Test route
router.get('/test', function (req, res) {
  res.json({ message: 'api really works!' });
});


// Prefix routes with /api
app.use('/api', router);



// START THE SERVER
app.listen(port, () => {
  console.log('Listening on port ' + port);
});
