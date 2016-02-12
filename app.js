var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var http = require('http').Server(app);
var app = express();

// Database Connection
mongoose.connect('mongodb://localhost/devblog');

// Middlewares
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Importing API controllers
app.use('/api/blogs', require('./controllers/blogs'));
app.use('/api/users', require('./controllers/users'));

// Main Route
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(3000);