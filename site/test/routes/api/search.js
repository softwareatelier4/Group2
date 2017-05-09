'use strict';

var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

var should = require('should');
var utils = require('../../utils');
var app = require('../../../app');
var seedDb = require('../../seedDb');
var request = require('supertest');

describe('Testing the search algorithm', function() {

	describe('GET /api/freelancer/search', function() {

		before(seed);
		after(utils.dropDb);

		it('should list all the freelancer with the tag Idraulico', function(done) {
			request(app)
				.get('/api/freelancer/search/Idraulico|46.0072623,8.955711299999999|Lugano')
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/, 'it should respond with json')
				.expect(200)
				.end(function(err, res) {
					let resJson = JSON.parse(res.text);
					resJson.should.have.length(2);

					done();
				});
		});
		it('should list all the freelancer with the tag Parrucchiere', function(done) {
			request(app)
				.get('/api/freelancer/search/Parrucchiere|46.0072623,8.955711299999999|Lugano')
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/, 'it should respond with json')
				.expect(200)
				.end(function(err, res) {
					let resJson = JSON.parse(res.text);
					resJson.should.have.length(0);

					done();
				});
		});
		it('should list all the freelancer that have Marco as their first name', function(done) {
			request(app)
				.get('/api/freelancer/search/Marco|46.0072623,8.955711299999999|Lugano')
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/, 'it should respond with json')
				.expect(200)
				.end(function(err, res) {
					let resJson = JSON.parse(res.text);
					resJson[0].firstName.should.equal("Marco");

					done();
				});
		});
		it('should list all the freelancer that have Riccardo as their first name', function(done) {
			request(app)
				.get('/api/freelancer/search/Riccardo|46.0072623,8.955711299999999|Lugano')
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/, 'it should respond with json')
				.expect(200)
				.end(function(err, res) {
					let resJson = JSON.parse(res.text);
					resJson.should.have.length(0);

					done();
				});
		});
		it('should list all the freelancer that have Tollini as their last name', function(done) {
			request(app)
				.get('/api/freelancer/search/Tollini|46.0072623,8.955711299999999|Lugano')
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/, 'it should respond with json')
				.expect(200)
				.end(function(err, res) {
					let resJson = JSON.parse(res.text);
					resJson[0].lastName.should.equal("Tollini");

					done();
				});
		});
		it('should list all the freelancer that have Gabriele as last first name', function(done) {
			request(app)
				.get('/api/freelancer/search/Gabriele|46.0072623,8.955711299999999|Lugano')
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/, 'it should respond with json')
				.expect(200)
				.end(function(err, res) {
					let resJson = JSON.parse(res.text);
					resJson.should.have.length(0);

					done();
				});
		});
		it('with multiple results, the first one should be the one with more correspondencies', function(done) {
			request(app)
				.get('/api/freelancer/search/Samantha%20Idraulico|46.0072623,8.955711299999999|Lugano')
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/, 'it should respond with json')
				.expect(200)
				.end(function(err, res) {
					res.text.indexOf('Samantha').should.be.greaterThan(-1, "Freelancer Samantha should be there");
					res.text.indexOf('Costanza').should.be.greaterThan(-1, "Freelancer Costanza should be there");
					done();
				});
		});
		it('should list all the freelancer that have BHO as work name', function(done) {
			request(app)
				.get('/api/freelancer/search/Cocco|46.0072623,8.955711299999999|Lugano')
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/, 'it should respond with json')
				.expect(200)
				.end(function(err, res) {
					let resJson = JSON.parse(res.text);
					resJson[0].workName.should.equal("Cocco");

					done();
				});
		});
		it('should list all the freelancer that have Bru as work name', function(done) {
			request(app)
				.get('/api/freelancer/search/Bru|46.0072623,8.955711299999999|Lugano')
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/, 'it should respond with json')
				.expect(200)
				.end(function(err, res) {
					let resJson = JSON.parse(res.text);
					resJson.should.have.length(0);

					done();
				});
		});
		it('should list all the freelancer that have 380474747 as phone number', function(done) {
			request(app)
				.get('/api/freelancer/search/380474747|46.0072623,8.955711299999999|Lugano')
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/, 'it should respond with json')
				.expect(200)
				.end(function(err, res) {
					res.text.indexOf('Marco').should.be.greaterThan(-1, "Freelancer Marco should be there");
					done();
				});
		});
		it('should list all the freelancer that have 380474748 as phone number', function(done) {
			request(app)
				.get('/api/freelancer/search/380474748|46.0072623,8.955711299999999|Lugano')
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/, 'it should respond with json')
				.expect(200)
				.end(function(err, res) {
					let resJson = JSON.parse(res.text);
					resJson.should.have.length(0);

					done();
				});
		});
		it('should list all the freelancer that have lopred@usi.ch as email', function(done) {
			request(app)
				.get('/api/freelancer/search/lopred@usi.ch|46.0072623,8.955711299999999|Lugano')
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/, 'it should respond with json')
				.expect(200)
				.end(function(err, res) {
					let resJson = JSON.parse(res.text);
					resJson[0].firstName.should.equal("Daniele");

					done();
				});
		});
		it('should list all the freelancer that have valsan@.usi.it as email', function(done) {
			request(app)
				.get('/api/freelancer/search/valsan@usi.it|46.0072623,8.955711299999999|Lugano')
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/, 'it should respond with json')
				.expect(200)
				.end(function(err, res) {
					let resJson = JSON.parse(res.text);
					resJson.should.have.length(0);

					done();
				});
		});
		it('should return a 400 error when called with no search parameters', function(done) {
			request(app)
				.get('/api/freelancer/search/')
				.set('Accept', 'application/json')
				.expect(400)
				.end(function(err, res) {
					done();
				});
		});
		it('should return the correct tags', function(done) {
			request(app)
				.get('/api/freelancer/search/Tollini|46.0072623,8.955711299999999|Lugano')
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/, 'it should respond with json')
				.expect(200)
				.end(function(err, res) {
					let resJson = JSON.parse(res.text);
					resJson[0].tags[0].name.should.equal('Developer');
					resJson[0].tags[1].name.should.equal('Informatico');
					resJson[0].tags[2].name.should.equal('Tecnico');

					done();
				});
		});
		it('should return the correct Score', function(done) {
			request(app)
				.get('/api/freelancer/search/Tollini|46.0072623,8.955711299999999|Lugano')
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/, 'it should respond with json')
				.expect(200)
				.end(function(err, res) {
					let resJson = JSON.parse(res.text);
					resJson[0].score.should.equal(5);

					done();
				});
		});
		it('should return the correct Price', function(done) {
			request(app)
				.get('/api/freelancer/search/Tollini|46.0072623,8.955711299999999|Lugano')
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/, 'it should respond with json')
				.expect(200)
				.end(function(err, res) {
					let resJson = JSON.parse(res.text);
					resJson[0].price.should.equal(20);

					done();
				});
		});
		it('should return the correct Price', function(done) {
			request(app)
				.get('/api/freelancer/search/Tollini|46.0072623,8.955711299999999|Lugano')
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/, 'it should respond with json')
				.expect(200)
				.end(function(err, res) {
					let resJson = JSON.parse(res.text);
					resJson[0].price.should.equal(20);

					done();
				});
		});
		it('should return the correct Distance', function(done) {
			request(app)
				.get('/api/freelancer/search/Developer|46.006923099999995,8.9555978|Lugano')
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/, 'it should respond with json')
				.expect(200)
				.end(function(err, res) {
					let resJson = JSON.parse(res.text);
					resJson[0].distance.should.equal('0.6');
					resJson[1].distance.should.equal('13.1');

					done();
				});
		});
		it('should not return the Distance', function(done) {
			request(app)
				.get('/api/freelancer/search/Tollini')
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/, 'it should respond with json')
				.expect(200)
				.end(function(err, res) {
					let resJson = JSON.parse(res.text);
					resJson.should.have.length(0);

					done();
				});
		});
		it('should return the correct Coordinates', function(done) {
			request(app)
				.get('/api/freelancer/search/Tollini|46.006923099999995,8.9555978|Lugano')
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/, 'it should respond with json')
				.expect(200)
				.end(function(err, res) {
					let resJson = JSON.parse(res.text);
					resJson[0].latitude.should.equal(46.0119793);
					resJson[0].longitude.should.equal(8.9517463);

					done();
				});
		});
		it('should return the correct Time', function(done) {
			request(app)
				.get('/api/freelancer/search/Developer|46.006923099999995,8.9555978|Lugano')
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/, 'it should respond with json')
				.expect(200)
				.end(function(err, res) {
					let resJson = JSON.parse(res.text);
					resJson[0].time.should.equal(0.01);
					resJson[1].time.should.equal(0.21833333333333332);

					done();
				});
		});
	});
});

function seed(done) {
	//seed the db
	seedDb.seed(function(err, seedData) {
		if (err) return done(err);

		done();
	});
}
