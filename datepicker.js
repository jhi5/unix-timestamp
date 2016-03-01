var moment = require('moment');

module.exports = function(x) {

	var obj = {
		"standard": null,
		"unix": null
	}

	if (moment(x).isValid()) {
		console.log("Standard");
		obj.standard = moment(x).format("MMMM D, YYYY");
		obj.unix = moment(x).format("x");
		obj = JSON.stringify(obj);
		return JSON.parse(obj);

	} else if (moment(parseInt(x)).isValid()) {
		console.log("Unix");
		obj.standard = moment(parseInt(x)).format("MMMM D, YYYY");
		obj.unix = moment(parseInt(x)).format('x');
		obj = JSON.stringify(obj);
		return JSON.parse(obj);
		
	} else {
		console.log('Its all bad');
		obj = JSON.stringify(obj);
		return JSON.parse(obj);
	}

};