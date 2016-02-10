var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var http = require('http').Server(app);
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(3000);