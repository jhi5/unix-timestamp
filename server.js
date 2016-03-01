var express = require('express');
var moment = require('moment');

var datepicker = require('./datepicker.js');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/:time', function(req, res) {
	var date = req.params.time;
	date = datepicker(date);
	res.send(date);
});

app.listen(PORT, function() {
	console.log("Express listening on port " + PORT);
});