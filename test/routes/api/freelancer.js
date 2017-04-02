'use strict';

var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

var should = require('should');
var utils = require('../../utils');
var app = require('../../../app');
var seedDb = require('../../seedDb');
var request = require('supertest');
var freelancers;
var reviews;

describe('Testing Read for api/freelancer/', function() {
	describe('GET /api/freelancer/:freelancerID', function() {
		before(seed);
		after(utils.dropDb);

		it('Should return the correct freelancer', function(done) {
			request(app)
				.get('/api/freelancer/f00000000000000000000000/')
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/, 'it should respond with json')
				.expect(200)
				.end(function(err, res) {
					var freelancer = res.text;
					utils.matchFreelancerInfoInText(freelancer, freelancers[0]);
					done();
				});
		});

		it('should respond with a 404 if the freelancer does not exist', function(done) {
			request(app)
				.get('/api/freelancer/' + ObjectId().toString())
				.set('Accept', 'application/json')
				.expect(404, done);
		});

		it('should respond with a 400 if the id is not correct', function(done) {
			request(app)
				.get('/api/freelancer/abc' + ObjectId().toString())
				.set('Accept', 'application/json')
				.expect(400, done);
		});
	});
});

describe('Testing Read for localhost:3000/api/review/freelancer/', function() {
	describe('GET /api/review/freelancer/:freelancerID', function() {
		before(seed);
		after(utils.dropDb);
		it('Should return the correct review', function(done) {
			request(app)
				.get('/api/review/freelancer/f00000000000000000000000')
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/, 'it should respond with json')
				.expect(200)
				.end(function(err, res) {
					var review = res.text;
					utils.matchReviewInfoInText(review, reviews[6]);
					done();
				});
		});

		it('Should return empty array if the freelancer exists', function(done) {
			request(app)
				.get('/api/review/freelancer/f00000000000000000000002')
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/, 'it should respond with json')
				.expect(200)
				.end(function(err, res) {
					res.text.should.equal('[]');
					done();
				});
		});

		it('should respond with a 404 if the freelancer does not exist', function(done) {
			request(app)
				.get('/api/review/freelancer/3625fc2bd82b84d23d8c7bd1')
				.set('Accept', 'application/json')
				.expect(404, done);
		});

		it('should respond with a 400 if the id is not correct', function(done) {
			request(app)
				.get('/api/review/freelancer/abc' + ObjectId().toString())
				.set('Accept', 'application/json')
				.expect(400, done);
		});
	});
});

describe('Testing put for freelancer', function() {
	describe('PUT /api/freelancer/:freelancerID', function() {
		before(seed);
		after(utils.dropDb);
		var put_freelancer = 	{
						'_id': ObjectId("f00000000000000000000000"),
						'firstName': 'Marco',
						'lastName': 'Tollini',
						'workName': 'Il Tollo',
						'email': 'tollim@usi.ch',
						'phone': '+39 380474747',
						'profilePhoto': '/uploads/test/profile0.jpg',
						'address': {
							road: 'Via Zurigo',
							number: 10,
							city: 'Lugano',
							cap: 69100
						},
						'tags': [
							ObjectId("a00000000000000000000000"),
							ObjectId("a00000000000000000000001")
						],
						'description': 'Hello guys! I am an amazing developer. ',
						'photos': [
							'/uploads/test/1.jpg',
							'/uploads/test/2.jpg',
							'/uploads/test/3.jpg',
						],
						'score': 5,
						price : 10
					}
		var temp = put_freelancer;
		temp.firstName = "Francesco";
		it('Should modify the first name of the freelancer', function(done) {
			request(app)
				.put('/api/freelancer/f00000000000000000000000')
				.send(
					temp
				)
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/, 'it should respond with json')
				.expect(200)
				.end(function(err, res) {
					let resJson = JSON.parse(res.text);
					resJson.firstName.should.not.equal("Marco");
					done();
				});
		});

		temp = put_freelancer;
		temp.lastName = "Mocciolo";
		it('Should modify the last name of the freelancer', function(done) {
			request(app)
				.put('/api/freelancer/f00000000000000000000000')
				.send(
					temp
				)
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/, 'it should respond with json')
				.expect(200)
				.end(function(err, res) {
					let resJson = JSON.parse(res.text);
					resJson.lastName.should.not.equal("Tollini");
					done();
				});
		});

		temp = put_freelancer;
		temp.workName = "Nokia";
		it('Should modify the work name of the freelancer', function(done) {
			request(app)
				.put('/api/freelancer/f00000000000000000000000')
				.send(
					temp
				)
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/, 'it should respond with json')
				.expect(200)
				.end(function(err, res) {
					let resJson = JSON.parse(res.text);
					resJson.workName.should.not.equal("Il Tollo");
					done();
				});
		});

		temp = put_freelancer;
		temp.email = "123@gmail.com";
		it('Should modify the work name of the freelancer', function(done) {
			request(app)
				.put('/api/freelancer/f00000000000000000000000')
				.send(
					temp
				)
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/, 'it should respond with json')
				.expect(200)
				.end(function(err, res) {
					let resJson = JSON.parse(res.text);
					resJson.email.should.not.equal("tollim@usi.ch");
					done();
				});
		});

		temp = put_freelancer;
		temp.phone = "+41797805942";
		it('Should modify the phone of the freelancer', function(done) {
			request(app)
				.put('/api/freelancer/f00000000000000000000000')
				.send(
					temp
				)
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/, 'it should respond with json')
				.expect(200)
				.end(function(err, res) {
					let resJson = JSON.parse(res.text);
					resJson.phone.should.not.equal("+39 380474747");
					done();
				});
		});

		temp = put_freelancer;
		temp.profilePhoto = "/uploads/test/profile1.jpg";
		it('Should modify the phone of the freelancer', function(done) {
			request(app)
				.put('/api/freelancer/f00000000000000000000000')
				.send(
					temp
				)
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/, 'it should respond with json')
				.expect(200)
				.end(function(err, res) {
					let resJson = JSON.parse(res.text);
					resJson.profilePhoto.should.not.equal("/uploads/test/profile0.jpg");
					done();
				});
		});
	});
});

function seed(done) {
	//seed the db
	seedDb.seed(function(err, seedData) {
		if (err) return done(err);
		freelancers = seedData[0].data;
		reviews = seedData[2].data;
		done();
	});
}
