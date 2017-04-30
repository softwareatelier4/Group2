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
require('../../models/ClaimRequest');


describe('Model: ClaimRequest', function(done) {
	describe('ClaimRequest model definition', function() {
		it('should have a constructor', function() {
			var ClaimRequest;
			try {
				ClaimRequest = mongoose.model('ClaimRequest');
			} catch (err) {
				console.log(err.stack);
			} finally {
				should.exist(ClaimRequest, 'expected ClaimRequest constructor to exist');
				ClaimRequest.should.be.a.Function;
			}
		})
	});

	describe('When creating a new claim request', function(done) {
		var Freelancer = mongoose.model('Freelancer');
		var Tag = mongoose.model('Tag');
		var User = mongoose.model('User');
		var ClaimRequest = mongoose.model('ClaimRequest');
		var tag, user, freelancer, claimrequest;

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
				tag.freelancer.push(freelancer._id);

				claimrequest = new ClaimRequest({
					user: user._id,
					freelancer: freelancer._id,
					identitycard: 'upload/claimRequest/upload_claim.png',
					notes: 'Hi, this is my profile!'
				});

				freelancer.save(function(err, save) {
					if (err) return done(err);

					tag.save(function(err, save) {
						if (err) return done(err);

						user.save(function(err, save) {
							if (err) return done(err);

							claimrequest.save(function(err, save) {
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
			var claimrequest = new ClaimRequest();
			claimrequest.constructor.name.should.equal('model');
			claimrequest.should.be.instanceof(ClaimRequest);
		});

		it('should persist a claim request with valid properties', function(done) {
			var claimrequest = new ClaimRequest();
			claimrequest.user = user._id;
			claimrequest.freelancer = freelancer._id;
			claimrequest.status = 'Pending';
			claimrequest.identitycard = 'upload/claimRequest/upload_claim.png';
			claimrequest.notes = 'Hi, this is my profile!';
			claimrequest.save(function(err, saved) {
				should.not.exist(err, 'No error should occur');
				saved.should.eql(claimrequest);
				done();
			});
		});

		it('should fail if user is empty, null, or undefined', function(done) {
			var claimrequest = new ClaimRequest();
			claimrequest.freelancer = freelancer._id;
			claimrequest.status = 'Pending';
			claimrequest.identitycard = 'upload/claimRequest/upload_claim.png';
			claimrequest.notes = 'Hi, this is my profile!';
			user.save(function(err, saved) {
				should.not.exist(err, 'No error should occur');
				should.not.exist(saved.user);
				done();
			});
		});

		it('should fail if freelancer is empty, null, or undefined', function(done) {
			var claimrequest = new ClaimRequest();
			claimrequest.user = user._id;
			claimrequest.status = 'Pending';
			claimrequest.identitycard = 'upload/claimRequest/upload_claim.png';
			claimrequest.notes = 'Hi, this is my profile!';
			freelancer.save(function(err, saved) {
				should.not.exist(err, 'No error should occur');
				should.not.exist(saved.freelancer);
				done();
			});
		});

		it('should fail if photo is empty, null, or undefined', function(done) {
			var claimrequest = new ClaimRequest();
			claimrequest.user = user._id;
			claimrequest.freelancer = freelancer._id;
			claimrequest.status = 'Pending';
			claimrequest.notes = 'Hi, this is my profile!';
			utils.errorIfNullUndefinedOrEmpty(claimrequest, 'identitycard', done);
		});

		it('should fail if notes is empty, null, or undefined', function(done) {
			var claimrequest = new ClaimRequest();
			claimrequest.user = user._id;
			claimrequest.freelancer = freelancer._id;
			claimrequest.status = 'Pending';
			claimrequest.identitycard = 'upload/claimRequest/upload_claim.png';
			utils.errorIfNullUndefinedOrEmpty(claimrequest, 'notes', done);
		});
	});
});
