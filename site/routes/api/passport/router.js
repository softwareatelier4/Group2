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
		passwordField: "password",
	},
	function(email, password, done) {
		User.findOne({
			email: email
		}, function(err, user) {
			if (err) {
				return done(err);
			}
			if (!user) {
				return done(null, false);
			}
			if (!user.validPassword(password)) {
				return done(null, false);
			}
			return done(null, user);
		});
	}
));

passport.use('local-signup', new LocalStrategy({
		// by default, local strategy uses username and password, we will override with email
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true // allows us to pass back the entire request to the callback
	},
	function(req, email, password, done) {

		// asynchronous
		// User.findOne wont fire unless data is sent back
		process.nextTick(function() {

			// find a user whose email is the same as the forms email
			// we are checking to see if the user trying to login already exists
			User.findOne({
				'email': email
			}, function(err, user) {
				// if there are any errors, return the error
				if (err)
					return done(err);

				// check to see if theres already a user with that email
				if (user) {
					return done(null, false, {
						error: "email already taken"
					});
				} else {

					// if there is no user with that email
					// create the user
					let newUser = new User();

					// set the user's local credentials
					newUser.firstName = req.body.firstName;
					newUser.lastName = req.body.lastName;
					newUser.email = email;
					newUser.password = newUser.generateHash(password);

					// save the user
					User.create(newUser, function(err, user) {
						if (err)
							throw err;

						// send an email
						const link = rootUrl + '/api/active/user/' + user._id;
						const content = {
							title: `Your JobAdvisor account is almost ready!`,
							body: `
							<p>Welcome ${user.firstName},</p>
							<p>Please complete your account by verifying your email address.</p>
							<div style="text-align: center">
            				<a href="${link}" class="confirmBtn" style="display: inline-block; margin-top: 20px;">Verify Email</a>
          				</div>
							<p style="font-size: 11px !important; margin-top:30px;">If the link above doesn't work, you can copy and paste the following into your browser:</p>
							<a style="font-size: 11px !important; color: #aaaaaa;" href="${link}">${link}</a>`
						}
						require('./../mail').sendMail(user.email, 'JobAdvisor: registration', content, function(err, info) {
							return done(null, newUser);
						});
					});
				}
			});
		});

	}));


passport.serializeUser(function(user, done) {
	done(null, user._id);
});

passport.deserializeUser(function(id, done) {
	User.findById(id, function(err, user) {
		done(err, user);
	});
});

router.post('/login', function(req, res, next) {
	passport.authenticate('local-login', function(err, user, info) {
		if (err) {
			return next(err);
		}
		if (!user) {
			return res.send({
				result: 'failed',
				motivation: 'not-found'
			});
		}
		if (!user.active) {
			return res.send({
				result: 'failed',
				motivation: 'inactive'
			})
		}
		req.logIn(user, function(err) {
			if (err) {
				return next(err);
			}
			return res.send({
				result: 'success',
				user: user
			});
		});
	})(req, res, next);
});

router.get('/newpassword/:email', function(req, res, next) {
	const email = req.params.email;

	const search = {
		email
	}
	User.find(search).exec(function(err, user) {

		if (err) return res.send(err);

		if (user.length == 0) {
			// no user found
			res.sendStatus(404);
		} else {
			user = user[0];

			const link = rootUrl + '/password.html#token=' + user.password + '&email=' + user.email;
			const content = {
				title: `Forgot your password?`,
				body: `
				<p>Hello ${user.firstName},</p>
				<p>Forgot your password, huh? No big deal.</p>
				<p>To create a new password, just follow this link:</p>
				<div style="text-align: center">
				<a href="${link}" class="confirmBtn" style="display: inline-block; margin-top: 20px;">Create new password</a>
				<p>Link doesn't work? Copy the following link to your browser address bar:</p>
				<p>${link}</p>
				<br />
				<p>If you DID NOT request a new password then please ignore this email and your password will remain the same.</p>
				</div>`
			}

			console.log('email sent', content);

			require('./../mail').sendMail(user.email, 'JobAdvisor: new password', content, function(err, info) {
				return res.send({});
			});


		}
	})
});


router.post('/changepassword/:email', function(req, res, next) {
	const email = req.params.email;
	const newPassword = req.body.password;

	const token = req.body.token;
	const oldPassword = req.body.oldPassword;

	// reset the password given the token
	const search = {
		email
	}

	User.findOne(search).exec(function(err, user) {
		if (err) return res.send(err);

		if (!user) {
			// no user found
			return res.send({
				error: (oldPassword) ? 'No user found with the email insert.' : 'Token is not correct. Try to open again the link in the email.'
			});
		}

		if (oldPassword && !user.validPassword(oldPassword)) {
			return res.send({
				error: 'Old password is not correct.'
			});
		} else if (token && user.password != token) {
			return res.send({
				error: 'Token is not correct. Try to open again the link in the email.'
			});
		}

		user.password = user.generateHash(newPassword);

		user.save(function(err, user) {
			if (err) return res.send(err);

			res.send(user);
		});

	});
})


router.post('/signup', function(req, res, next) {
	passport.authenticate('local-signup', function(err, user, info) {
		if (err) {
			return next(err);
		}
		if (!user) {
			return res.send(info);
		}

		return res.send({
			success: true
		});
	})(req, res, next);
});

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
	if (req.isAuthenticated()) {
		res.send({
			result: req.user
		});
	} else {
		res.send({
			result: false
		});
	}
});

router.get('/logout', function(req, res) {
	req.logOut();
	res.send({
		result: 'logout'
	});
});



module.exports = router;
