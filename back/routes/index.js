var fs = require('fs');
		candies = require('./candies');

module.exports = function(app) {
	candies(app);
};