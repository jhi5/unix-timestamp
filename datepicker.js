var moment = require('moment');

module.exports = function(x) {

	if (moment(x).isValid()) {
		console.log("Standard");
		var obj = {
			"standard": moment(x).format("MMMM D, YYYY"),
			"unix": moment(x).format('x')
		}
		return obj;

	} else if (moment(parseInt(x)).isValid()) {
		console.log("Unix");
		var obj = {
			"standard": moment(parseInt(x)).format("MMMM D, YYYY"),
			"unix": moment(parseInt(x)).format('x')
		}
		return obj;
		
	} else {
		console.log('Its all bad');
		return false;
	}

};