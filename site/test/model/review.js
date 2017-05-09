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
require('../../models/Review');

describe('Model: Review', function(done) {
	describe('Review model definition', function() {
		it('should have a constructor', function() {
			var Review;
			try {
				Review = mongoose.model('Review');
			} catch (err) {
				console.log(err.stack);
			} finally {
				should.exist(Review, 'expected Review constructor to exist');
				Review.should.be.a.Function;
			}
		})
	});

	describe('When creating a new review', function(done) {
		var Freelancer = mongoose.model('Freelancer');
		var Tag = mongoose.model('Tag');
		var User = mongoose.model('User');
		var Review = mongoose.model('Review');
		var tag, user, freelancer, review;

		before(function(done) {
			// connect and drop db
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


				review = new Review({
					title: 'R1',
					description: 'This is some text',
					score: 1,
					photo: [
						'/uploads/review/134324242342.jpg'
					],
					user: user._id,
					answer: 'This is an answer',
					freelancer: freelancer._id

				})

				user.freelancerId = freelancer._id;
				tag.freelancer.push(freelancer._id);

				freelancer.save(function(err, save) {
					if (err) return done(err);

					tag.save(function(err, save) {
						if (err) return done(err);

						user.save(function(err, save) {
							if (err) return done(err);

							review.save(function(err, save) {
								if (err) return done(err);
								done();
							});
						});
					});
				});
			});
		});

		after(utils.dropDbAndCloseConnection);

		it('should create an instance of the right type', function() {
			var review = new Review();
			review.constructor.name.should.equal('model');
			review.should.be.instanceof(Review);
		});

		it('should persist a review with valid properties', function(done) {
			var review = new Review();
			review.title = 'Good service';
			review.description = 'This is a description';
			review.score = '3';
			review.photo = ['/uploads/review/134324242342.jpg'];
			review.user = user._id;
			review.answer = 'This is an answer';
			review.freelancer = freelancer._id;
			review.save(function(err, saved) {
				should.not.exist(err, 'No error should occur');
				saved.should.eql(review);
				done();
			});
		});

		it('should fail if title is empty, null, or undefined', function(done) {
			var review = new Review();
			review.description = 'This is a description';
			review.score = '3';
			review.photo = ['/uploads/review/134324242342.jpg'];
			review.user = user._id;
			review.answer = 'This is an answer';
			review.freelancer = freelancer._id;
			utils.errorIfNullUndefinedOrEmpty(review, 'title', done);
		});

		it('should fail if score is empty, null, or undefined', function(done) {
			var review = new Review();
			review.title = 'Good service';
			review.description = 'This is a description';
			review.photo = ['/uploads/review/134324242342.jpg'];
			review.user = user._id;
			review.answer = 'This is an answer';
			review.freelancer = freelancer._id;
			utils.errorIfNullUndefinedOrEmpty(review, 'score', done);
		});

		it('if answer is empty; null; or undefined, it should not be assigned',
			function(done) {
				var review = new Review();
				review.title = 'Good service';
				review.description = 'This is a description';
				review.score = '3';
				review.photo = ['/uploads/review/134324242342.jpg'];
				review.user = user._id;
				review.freelancer = freelancer._id;
				review.save(function(err, saved) {
					should.not.exist(err, 'No error should occur');
					should.not.exist(saved.answer);
					done();
				});
			});

		it('if answer is empty; null; or undefined, it should not be assigned',
			function(done) {
				var review = new Review();
				review.title = 'Good service';
				review.description = 'This is a description';
				review.score = '3';
				review.photo = ['/uploads/review/134324242342.jpg'];
				review.user = user._id;
				review.freelancer = freelancer._id;
				review.save(function(err, saved) {
					should.not.exist(err, 'No error should occur');
					should.not.exist(saved.answer);
					done();
				});
			});

		it('score schould be within values 1 and 5 ',
			function(done) {
				var review = new Review();
				review.title = 'Good service';
				review.description = 'This is a description';
				review.score = '3';
				review.user = user._id;
				review.freelancer = freelancer._id;
				review.answer = 'This is an answer';
				review.save(function(err, saved) {
					should.not.exist(err, 'No error should occur');
					review.score.should.be.within(1, 5);
					done();
				});
			});


		it('score schould be not be out of values 1 and 5',
			function(done) {
				var review = new Review();
				review.title = 'Good service';
				review.description = 'This is a description';
				review.score = '6';
				review.user = user._id;
				review.freelancer = freelancer._id;
				review.answer = 'This is an answer';
				review.save(function(err, saved) {
					should.exist(err, 'Error should occur');
					done();
				});
			});



	});
});
