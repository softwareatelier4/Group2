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

		it('should list all the freelancer with the tag Plumber', function(done) {
			request(app)
				.get('/api/freelancer/search/Plumber|46.0072623,8.955711299999999|Lugano')
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/, 'it should respond with json')
				.expect(200)
				.end(function(err, res) {
					let resJson = JSON.parse(res.text);
					resJson.should.have.length(7);

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
		it('should list all the freelancer that have Francesca as their first name', function(done) {
			request(app)
				.get('/api/freelancer/search/Francesca|46.0072623,8.955711299999999|Lugano')
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/, 'it should respond with json')
				.expect(200)
				.end(function(err, res) {
					let resJson = JSON.parse(res.text);
					resJson[0].firstName.should.equal("Francesca");
					resJson[1].firstName.should.equal("Francesca");
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
		it('should list all the freelancer that have Carozzi as their last name', function(done) {
			request(app)
				.get('/api/freelancer/search/Carozzi|46.0072623,8.955711299999999|Lugano')
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/, 'it should respond with json')
				.expect(200)
				.end(function(err, res) {
					let resJson = JSON.parse(res.text);
					resJson[0].lastName.should.equal("Carozzi");

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
				.get('/api/freelancer/search/Plumber%20Francesco|46.0072623,8.955711299999999|Lugano')
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/, 'it should respond with json')
				.expect(200)
				.end(function(err, res) {
					res.text.indexOf('Francesco').should.be.greaterThan(-1, "Freelancer Samantha should be there");
					res.text.indexOf('Sarah').should.be.greaterThan(-1, "Freelancer Costanza should be there");
					done();
				});
		});
		it('should list all the freelancer that have Pink Plumbers as work name', function(done) {
			request(app)
				.get('/api/freelancer/search/Pink%20Plumbers|46.0072623,8.955711299999999|Lugano')
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/, 'it should respond with json')
				.expect(200)
				.end(function(err, res) {
					let resJson = JSON.parse(res.text);
					resJson[0].workName.should.equal("Pink Plumbers");

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
		it('should list all the freelancer that have +4107362864 as phone number', function(done) {
			request(app)
				.get('/api/freelancer/search/+4107362864|46.0072623,8.955711299999999|Lugano')
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/, 'it should respond with json')
				.expect(200)
				.end(function(err, res) {
					res.text.indexOf('Francesco').should.be.greaterThan(-1, "Freelancer Francesco should be there");
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
		it('should list all the freelancer that have fra.giri99@cc.it as email', function(done) {
			request(app)
				.get('/api/freelancer/search/fra.giri99@cc.it|46.0072623,8.955711299999999|Lugano')
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/, 'it should respond with json')
				.expect(200)
				.end(function(err, res) {
					let resJson = JSON.parse(res.text);
					resJson[0].firstName.should.equal("Francesco");

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
				.get('/api/freelancer/search/fra.giri99@cc.it|46.0072623,8.955711299999999|Lugano')
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/, 'it should respond with json')
				.expect(200)
				.end(function(err, res) {
					let resJson = JSON.parse(res.text);
					resJson[0].tags[0].name.should.equal('Plumber');
					resJson[0].tags[1].name.should.equal('Arts & Crafts');
					done();
				});
		});
		it('should return the correct Score', function(done) {
			request(app)
				.get('/api/freelancer/search/Marianice|46.0072623,8.955711299999999|Lugano')
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/, 'it should respond with json')
				.expect(200)
				.end(function(err, res) {
					let resJson = JSON.parse(res.text);
					resJson[0].score.should.equal(4.5);

					done();
				});
		});
		it('should return the correct Price', function(done) {
			request(app)
				.get('/api/freelancer/search/Marianice|46.0072623,8.955711299999999|Lugano')
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/, 'it should respond with json')
				.expect(200)
				.end(function(err, res) {
					let resJson = JSON.parse(res.text);
					resJson[0].price.should.equal(45);

					done();
				});
		});
		it('should return the correct Distance', function(done) {
			request(app)
				.get('/api/freelancer/search/Plumber|46.006923099999995,8.9555978|Lugano')
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/, 'it should respond with json')
				.expect(200)
				.end(function(err, res) {
					let resJson = JSON.parse(res.text);
					resJson[0].distance.should.equal('1.9');
					resJson[1].distance.should.equal('0.5');

					done();
				});
		});
		it('should return the correct Coordinates', function(done) {
			request(app)
				.get('/api/freelancer/search/Sarah|46.006923099999995,8.9555978|Lugano')
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/, 'it should respond with json')
				.expect(200)
				.end(function(err, res) {
					let resJson = JSON.parse(res.text);
					resJson[0].latitude.should.equal(46.015036);
					resJson[0].longitude.should.equal(8.9768153);

					done();
				});
		});
		it('should return the correct Time', function(done) {
			request(app)
				.get('/api/freelancer/search/Plumber|46.006923099999995,8.9555978|Lugano')
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/, 'it should respond with json')
				.expect(200)
				.end(function(err, res) {
					let resJson = JSON.parse(res.text);
					resJson[0].time.should.equal(0.03166666666666666);
					resJson[1].time.should.equal(0.008333333333333333);

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
