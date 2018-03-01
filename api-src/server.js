const express = require('express');
const router = express.Router();
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/database')

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// CONNECT TO DATABASE
mongoose.connect(config.database, { useMongoClient: true});
// On Connection
mongoose.connection.on('connected', () => {
  console.log('Connected to Database '+config.database);
});
// On Error
mongoose.connection.on('error', (err) => {
  console.log('Database error '+err);
});

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
