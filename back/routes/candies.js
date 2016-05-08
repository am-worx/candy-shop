//var loggedIn = require('../middleware/loggedIn');
var mongoose = require('mongoose'),
		CandyProfile = mongoose.model('CandyProfile');

var bodyParser = require('body-parser');

module.exports = function (app) {
	// create

	app.use(bodyParser.json()); // support json encoded bodies
	app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

	app.get('/api/candies', function (req, res, next) {
		CandyProfile.find()/*.sort('created')*/.limit(10).exec(function (err, posts) {
			if (err) return next(err);
			res.send(candies);
			console.log(candies);
		})
	});

	app.post("/api/create-candy-profile", /*loggedIn, */function (req, res, next) {

		var firstName = req.body.firstName,
				lastName = req.body.lastName,
				nickname = req.body.nickname,
				description = req.body.description;

		console.log('creating profile with data', req.body);

		CandyProfile.create({
			firstName: firstName,
			lastName: lastName,
			nickname: nickname,
			description: description
			//, author: user
		}, function (err, post) {
			if (err) return next(err);
			//res.redirect('/post/' + post.id);
		});

	});


	/*// read
	app.get("/api/candy/:id", function (req, res, next) {
		var id = req.param('id');

		var promise = BlogPost.findComments(id)
			.sort('created')
			.select('-_id') // exclude the _id
			.exec();

		var query = BlogPost.findById(id).populate('author');
		query.exec(function (err, post) {
			if (err) return next(err);

			if (!post) return next(); // 404

			res.render('post/view.jade', { post: post, comments: promise });
		})
	});




	// update
	app.get("/post/edit/:id", loggedIn, function (req, res, next) {
		res.render('post/create.jade', {
			post: BlogPost.findById(req.param('id'))
		});
	});

	app.post("/post/edit/:id", loggedIn, function (req, res, next) {
		BlogPost.edit(req, function (err) {
			if (err) return next(err);
			res.redirect("/post/" + req.param('id'));
		})
	});

	// delete
	app.get("/post/remove/:id", loggedIn, function (req, res, next) {
		var id = req.param('id');

		BlogPost.findOne({ _id: id }, function (err, post) {
			if (err) return next(err);

			// validate logged in user authored this post
			if (post.author != req.session.user) {
				return res.send(403);
			}

			post.remove(function (err) {
				if (err) return next(err);

				// TODO display a confirmation msg to user
				res.redirect('/');
			})
		})
	})

	// comments
	app.post("/post/comment/:id", loggedIn, function (req, res, next) {
		var id = req.param('id');
		var text = req.param('text');
		var author = req.session.user;

		Comment.create({
			post: id
			, text: text
			, author: author
		}, function (err, comment) {
			if (err) return next(err);

			// TODO probably want to do this all with with xhr
			res.redirect("/post/" + id);
		});
	});*/
}
