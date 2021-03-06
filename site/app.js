var config = require('./config');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var app = express();
var methodOverride = require('method-override');
var flash = require('connect-flash');
var passport = require('passport');
var session = require('express-session');

// Connect to MongoDB here
var mongoose = require('mongoose');
mongoose.connect(config.mongoUrl + config.mongoDbName);

// Register model definition here
require('./models');

//configure app
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
	extended: false
})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride(
	function(req, res) {
		if (req.body && typeof req.body === 'object' && '_method' in req.body) {
			var method = req.body._method
			delete req.body._method
			return method
		}
	}
));

app.use(session({
	secret: 'jobadvisorsession'
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
// Initialize routers here
var routers = require('./routes/api/routers');
app.use('/api/claimrequest/', routers.claimrequest);
app.use('/api/active/', routers.active);
app.use('/api/freelancer/', routers.freelancer);
app.use('/api/passport/', routers.passport);
app.use('/api/review/', routers.review);
app.use('/api/tag/', routers.tag);
app.use('/api/', routers.root);

module.exports = app;
process.title = 'jobsecondgroup'
