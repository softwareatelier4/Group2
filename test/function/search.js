'use strict';

var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

var should = require('should');
var utils = require('../utils');
var app = require('../../app');
var seedDb = require('../seedDb');
var request = require('supertest');

describe('Testing the search algorithm', function() {

	describe('GET /api/freelancer/search', function() {

		before(seed);
		after(utils.dropDb);

		it('should list all the freelancer that have Lugano in their city', function(done) {
			request(app)
				.get('/api/freelancer/search/Lugano')
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/, 'it should respond with json')
				.expect(200)
				.end(function(err, res) {
					let resJson = JSON.parse(res.text);
					resJson.should.have.length(2);

					done();
				});
		});
		it('should list all the freelancer that have Vasto in their city', function(done) {
			request(app)
				.get('/api/freelancer/search/Vasto')
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/, 'it should respond with json')
				.expect(200)
				.end(function(err, res) {
					let resJson = JSON.parse(res.text);
					resJson.should.have.length(0);

					done();
				});
		});
		it('should list all the freelancer with the tag Idraulico', function(done) {
			request(app)
				.get('/api/freelancer/search/Idraulico')
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/, 'it should respond with json')
				.expect(200)
				.end(function(err, res) {
					let resJson = JSON.parse(res.text);
					resJson.should.have.length(1);

					done();
				});
		});
		it('should list all the freelancer with the tag Parrucchiere', function(done) {
			request(app)
				.get('/api/freelancer/search/Parrucchiere')
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
				.get('/api/freelancer/search/Marco')
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
				.get('/api/freelancer/search/Riccardo')
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
				.get('/api/freelancer/search/Tollini')
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
				.get('/api/freelancer/search/Gabriele')
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
				.get('/api/freelancer/search/Lugano%20Idraulico')
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/, 'it should respond with json')
				.expect(200)
				.end(function(err, res) {
					let resJson = JSON.parse(res.text);
					resJson[0].firstName.should.equal("Marco");
					resJson[1].firstName.should.equal("Nevio");

					done();
				});
		});
		it('should list all the freelancer that have BHO as work name', function(done) {
			request(app)
				.get('/api/freelancer/search/BHO')
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/, 'it should respond with json')
				.expect(200)
				.end(function(err, res) {
					let resJson = JSON.parse(res.text);
					resJson[0].workName.should.equal("BHO");

					done();
				});
		});
		it('should list all the freelancer that have Bru as work name', function(done) {
			request(app)
				.get('/api/freelancer/search/Bru')
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
	});
});

function seed(done) {
	//seed the db
	seedDb.seed(function(err, seedData) {
		if (err) return done(err);

		done();
	});
}
