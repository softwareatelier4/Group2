/** @module passport/router */
'use strict';

var express = require('express');
var router = express.Router();
var middleware = require('../../middleware');
var rootUrl = require("../../../config").url;
var passport = require('passport');
var flash = require('connect-flash');
var LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('User');

//supported methods
router.all('/', middleware.supportedMethods('GET, POST, PUT, OPTIONS'));

passport.use('local-login', new LocalStrategy({
	usernameField: "email",
	passwordField: "password"
},
function(email, password, done){
	User.findOne({ email: email }, function (err, user) {
		if (err) { return done(err); }
		if (!user) { return done(null, false); }
		if (!user.validPassword(password)) { return done(null, false); }
		return done(null, user);
	});
}
));

passport.use('local-signup', new LocalStrategy({
	// by default, local strategy uses username and password, we will override with email
	usernameField : 'email',
	passwordField : 'password',
	passReqToCallback : true // allows us to pass back the entire request to the callback
},
function(req, email, password, done) {

	// asynchronous
	// User.findOne wont fire unless data is sent back
	process.nextTick(function() {

		// find a user whose email is the same as the forms email
		// we are checking to see if the user trying to login already exists
		User.findOne({ 'email' :  email }, function(err, user) {
			// if there are any errors, return the error
			if (err)
			return done(err);

			// check to see if theres already a user with that email
			if (user) {
				return done(null, false);
			} else {

				// if there is no user with that email
				// create the user
				var newUser = new User();

				// set the user's local credentials
				newUser.email    = email;
				newUser.password = newUser.generateHash(password);

				// save the user
				newUser.save(function(err) {
					if (err)
					throw err;
					return done(null, newUser);
				});
			}
		});
	});

}));


passport.serializeUser(function (user, done) {
	done(null,user._id);
});

passport.deserializeUser(function (id,done) {
	User.findById(id , function (err,user) {
		done(err, user);
	});
});

router.post('/login',
passport.authenticate('local-login', { failureRedirect: '/login' }),
function(req, res) {
	res.redirect('/');
});

router.post('/signup', passport.authenticate('local-signup', {
	successRedirect : '/',
	failureRedirect : '/signup'
}));

router.get('/logout', function(req, res) {
	req.logout();
	res.redirect('/');
});

function isLoggedIn(req, res, next) {
    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();
    // if they aren't redirect them to the home page
    res.redirect('/');
}

router.get('/islogged', function(req, res) {
	if(req.isAuthenticated()){
		res.send({logged: true});
	} else{
		res.send({logged: false});
	}
});


module.exports = router;
