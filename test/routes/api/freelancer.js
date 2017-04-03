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

describe('Testing Post for localhost:3000/api/freelancer/create/freelancer', function() {
	describe('POST /api/freelancer/create/freelancer', function() {
		before(seed);
		after(utils.dropDb);
		it('should respond with redirect on post', function(done) {
			request(app)
			.post('/api/freelancer/create/freelancer')
			.send({
				"firstName": "Lorenzo",
				"lastName": "Ferri",
				"workName": "Lollo",
				"email": "lorenzo.ferri@usi.ch",
				"phone": "3330003330",
				"address": {
					"city": "Lugano",
					"street": "via Zurigo",
					"number": 23,
					"cap": 6900
				},
				"tags" : ["Informatico", "Photographer"],
				"description" : "AAA"
			})
			.expect(200)
			.expect('Content-Type', /json/)
			.end(function(err, res) {
				if (err) done(err);
				res.body.should.have.property('firstName','Lorenzo');
				res.body.should.have.property('lastName','Ferri');
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
