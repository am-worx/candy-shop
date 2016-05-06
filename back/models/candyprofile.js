var mongoose = require('mongoose');

var schema = mongoose.Schema({
	firstName: { type: String, trim: true },
	lastName: { type: String, trim: true },
	nickname: { type: String, trim: true },
	description: String
	//, author: { type: String, ref: 'User' }
});

schema.statics.edit = function(req, callback) {
	var id = req.param('id');
	var user = req.session.user;

	// validate if current user is owner of this profile
	var query = { _id: id, author: author };

	var profileUpdate = {};
	profileUpdate.firstName = req.param('firstName');
	profileUpdate.lastName = req.param('lastName');
	profileUpdate.nickname = req.param('nickname');
	profileUpdate.description = req.param('description');

	this.update(query, update, function (err, numAffected) {
		if (err) return callback(err);

		if (0 === numAffected) {
			return callback(new Error('No CandyProfile to Modify'));
		}

		callback();
	})
};

//Candy = mongoose.model('CandyProfile');
var Candy = mongoose.model('CandyProfile', schema);

module.exports = Candy;
