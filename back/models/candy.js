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

	var profileUpdate = {}
	profileUpdate.firstName;
	profileUpdate.lastName;
	profileUpdate.nickname;
	profileUpdate.description;
};

//Candy = mongoose.model('CandyProfile');
var Candy = mongoose.model('CandyProfile', schema);

module.exports = Candy;
