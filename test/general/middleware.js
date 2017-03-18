'use strict';

var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

var should = require('should');
var utils = require('../utils');
var app = require('../../app');
var request = require('supertest');

describe('Middleware testing', function() {
	describe('NOT GET /api/freelancer/:freelancerID', function() {

		it('should respond with a 405 if using POST', function(done) {
			request(app)
				.post('/api/freelancer/' + ObjectId().toString())
				.set('Accept', 'application/json')
				.expect(405, done);
		});

		it('should respond with a 405 if using PUT', function(done) {
			request(app)
				.put('/api/freelancer/' + ObjectId().toString())
				.set('Accept', 'application/json')
				.expect(405, done);
		});

		it('should respond with a 405 if using DELET', function(done) {
			request(app)
				.delete('/api/freelancer/' + ObjectId().toString())
				.set('Accept', 'application/json')
				.expect(405, done);
		});

		it('should respond with a 405 if using PATCH', function(done) {
			request(app)
				.patch('/api/freelancer/' + ObjectId().toString())
				.set('Accept', 'application/json')
				.expect(405, done);
		});
	});

	describe('NOT GET /api/freelancer/search/:search', function() {

		it('should respond with a 405 if using POST', function(done) {
			request(app)
				.post('/api/freelancer/search/testSearch')
				.set('Accept', 'application/json')
				.expect(405, done);
		});

		it('should respond with a 405 if using PUT', function(done) {
			request(app)
				.put('/api/freelancer/search/testSearch')
				.set('Accept', 'application/json')
				.expect(405, done);
		});

		it('should respond with a 405 if using DELET', function(done) {
			request(app)
				.delete('/api/freelancer/search/testSearch')
				.set('Accept', 'application/json')
				.expect(405, done);
		});

		it('should respond with a 405 if using PATCH', function(done) {
			request(app)
				.patch('/api/freelancer/search/testSearch')
				.set('Accept', 'application/json')
				.expect(405, done);
		});
	});

	describe('NOT GET /api/review/freelancer/:freelancerid', function() {

		it('should respond with a 405 if using POST', function(done) {
			request(app)
				.post('/api/review/freelancer/' + ObjectId().toString())
				.set('Accept', 'application/json')
				.expect(405, done);
		});

		it('should respond with a 405 if using PUT', function(done) {
			request(app)
				.put('/api/review/freelancer/' + ObjectId().toString())
				.set('Accept', 'application/json')
				.expect(405, done);
		});

		it('should respond with a 405 if using DELET', function(done) {
			request(app)
				.delete('/api/review/freelancer/' + ObjectId().toString())
				.set('Accept', 'application/json')
				.expect(405, done);
		});

		it('should respond with a 405 if using PATCH', function(done) {
			request(app)
				.patch('/api/review/freelancer/' + ObjectId().toString())
				.set('Accept', 'application/json')
				.expect(405, done);
		});
	});
});
