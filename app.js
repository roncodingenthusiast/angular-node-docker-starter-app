var express = require('express');
var app = express();
var db = require('./db');

app.use('/public', express.static(__dirname + '/public'));
app.use('/bootstrap-js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/bootstrap-css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

module.exports = app;