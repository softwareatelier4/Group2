/* jshint node: true */
'use strict';

//connect to DB
var mongoose = require('mongoose');

var should = require('should');
var utils = require('../utils');

//load model
require('../../models/Freelancer');
require('../../models/Tag');
require('../../models/User');

describe('Model: User', function(done) {
	describe('User model definition', function() {
		it('should have a constructor', function() {
			var User;
			try {
				User = mongoose.model('User');
			} catch (err) {
				console.log(err.stack);
			} finally {
				should.exist(User, 'expected User constructor to exist');
				User.should.be.a.Function;
			}
		})
	});

	describe('When creating a new user', function(done) {
		var Freelancer = mongoose.model('Freelancer');
		var Tag = mongoose.model('Tag');
		var User = mongoose.model('User');
		var tag, user, freelancer;

		before(function(done) {
			//connect and drop db
			utils.connectAndDropDb(function(err) {
				if (err) return done(err);

				tag = new Tag({
					name: 'Plumber',
					freelancer: []
				});

				user = new User({
					firstName: 'Nevio',
					lastName: 'Tollini',
					password: 'ciao',
					email: 'nevio@tollini.it',
					level: 0,
					active: true
				});

				freelancer = new Freelancer({
					firstName: 'Marco',
					lastName: 'Tollini',
					workName: 'BHO',
					email: 'tollim@usi.ch',
					phone: '380474747',
					profilePhoto: '/uploads/5625fc2bd82b84d23d8c7bd5/profile.jpg',
					address: {
						road: 'Via Zurigo',
						number: 10,
						city: 'Lugano',
						cap: 29100,
						lat: 10,
						long: 10
					},
					tags: [tag._id],
					description: 'This is a description',
					emergency: false,
					ownerId: user._id
				});

				user.freelancerId = freelancer._id;
				tag.freelancer.push(freelancer._id);

				freelancer.save(function(err, save) {
					console.log(err);
					if (err) return done(err);

					tag.save(function(err, save) {
						console.log(err);

						if (err) return done(err);

						user.save(function(err, save) {
							console.log(err);

							if (err) return done(err);
							done();
						});
					});
				});
			});
		});

		after(utils.dropDbAndCloseConnection);

		it('should create an instance of the right type', function() {
			var user = new User();
			user.constructor.name.should.equal('model');
			user.should.be.instanceof(User);
		});

		it('should persist a user with valid properties', function(done) {
			var user = new User();
			user.freelancerId = freelancer._id;
			user.firstName = 'Nevio';
			user.lastName = 'Valsantollim';
			user.password = 'password';
			user.email = 'mail@mail.mail';
			user.save(function(err, saved) {
				should.not.exist(err, 'No error should occur');
				saved.should.eql(user);
				done();
			});
		});

		it('should fail if firstName is empty, null, or undefined', function(done) {
			var user = new User();
			user.freelancerId = freelancer._id;
			user.lastName = 'Valsantollim';
			user.password = 'password';
			user.email = 'mail@mail.mail';
			utils.errorIfNullUndefinedOrEmpty(user, 'firstName', done);
		});

		it('should fail if lastName is empty, null, or undefined', function(done) {
			var user = new User();
			user.freelancerId = freelancer._id;
			user.firstName = 'Marco';
			user.password = 'password';
			user.email = 'mail@mail.mail';
			utils.errorIfNullUndefinedOrEmpty(user, 'lastName', done);
		});

		it('should fail if password is empty, null, or undefined', function(done) {
			var user = new User();
			user.freelancerId = freelancer._id;
			user.firstName = 'Marco';
			user.lastName = 'Valsantollim';
			user.email = 'mail@mail.mail';
			utils.errorIfNullUndefinedOrEmpty(user, 'password', done);
		});

		it('should fail if email is empty, null, or undefined', function(done) {
			var user = new User();
			user.freelancerId = freelancer._id;
			user.firstName = 'Marco';
			user.lastName = 'Valsantollim';
			user.password = 'password';
			utils.errorIfNullUndefinedOrEmpty(user, 'email', done);
		});

		it('if freelancerId is empty; null; or undefined, it should not be assigned',
			function(done) {
				var user = new User();
				user.firstName = 'Nevio';
				user.lastName = 'Valsantollim';
				user.password = 'password';
				user.email = 'mail@mail.mail';
				freelancer.save(function(err, saved) {
					should.not.exist(err, 'No error should occur');
					should.not.exist(saved.freelancerId);
					done();
				});
			});

	});
});
