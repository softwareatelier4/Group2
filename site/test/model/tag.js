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

describe('Model: Tag', function(done) {
	describe('Tag model definition', function() {
		it('should have a constructor', function() {
			var Tag;
			try {
				Tag = mongoose.model('Tag');
			} catch (err) {
				console.log(err.stack);
			} finally {
				should.exist(Tag, 'expected Tag constructor to exist');
				Tag.should.be.a.Function;
			}
		})
	});

	describe('When creating a new tag', function(done) {
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
					if (err) return done(err);

					tag.save(function(err, save) {
						if (err) return done(err);

						user.save(function(err, save) {
							if (err) return done(err);
							done();
						});
					});
				});
			});
		});

		after(utils.dropDbAndCloseConnection);

		it('should create an instance of the right type', function() {
			var tag = new Tag();
			tag.constructor.name.should.equal('model');
			tag.should.be.instanceof(Tag);
		});

		it('should fail if name is empty, null, or undefined', function(done) {
			var tag = new Tag();
			tag.freelancer = [freelancer._id];
			utils.errorIfNullUndefinedOrEmpty(tag, 'name', done);
		});

		it('if freelancer is empty; null; or undefined, it should not be assigned',
			function(done) {
				var tag = new Tag();
				tag.name = 'Mechanic';
				tag.save(function(err, saved) {
					should.not.exist(err, 'No error should occur');
					saved.freelancer.should.have.length(0);
					done();
				});
			});
	});
});
