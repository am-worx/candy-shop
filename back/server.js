var http = require('http'),
	url = require('url'),
	fs = require('fs'),
	express = require('express'),
	mongoose = require('mongoose'),
	net = require('net'),
	models = require('./models'),
	routes = require('./routes');

var rootDir = '/Users/am-worx/Desktop/candy-shop/';

// define the schema
var schema = mongoose.Schema({
	title: { type: String, trim: true }
	, body: String
	, author: { type: String, ref: 'User' }
});
var Post = mongoose.model('BlogPost', schema);
BlogPost = mongoose.model('BlogPost');

mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/m101JS', function (err) {
	if (err) throw err;

	var app = express();

	app.use(express.static(rootDir + 'front/'));

	app.get('/api/posts', function (req, res, next) {
		BlogPost.find().sort('created').limit(10).exec(function (err, posts) {
			if (err) return next(err);
			res.send(posts);
			console.log(posts);
		})
	});

	app.post('/api/create-new-candy', function (req, res, next) {
		console.log('new candy post is on the back');
	});

	routes(app);

	app.get('*', function (req, res) {
		fs.readFile(rootDir + 'front/index.html', 'utf8', function (err, data) {
			if (err) {
				throw err;
				console.log('read error', err);
			} else {
				//res.sendFile(rootDir + 'front/index.html');
				res.writeHead(200, {'Content-Type' : 'text/html'});
				res.write(data, 'utf8');
				res.end();
			}
		});
	});

	var port = process.env.PORT || 8080;
	app.listen(port);
	console.log('Running on port', port);
});