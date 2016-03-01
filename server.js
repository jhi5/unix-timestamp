var express = require('express');
var moment = require('moment');

var datepicker = require('./datepicker.js');

var app = express();
var PORT = process.env.PORT || 3000;

app.get('/', function(req, res) {
	res.send("Timestamp API Root");
});

app.get('/:time', function(req, res) {
	var date = req.params.time;
	date = datepicker(date);
	res.send(JSON.stringify(date));
});

app.listen(PORT, function() {
	console.log("Express listening on port " + PORT);
});