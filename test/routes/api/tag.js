'use strict';

var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

var should = require('should');
var utils = require('../../utils');
var app = require('../../../app');
var seedDb = require('../../seedDb');
var request = require('supertest');

describe('Testing get for api/tag/search', function() {
	describe('GET /api/tag/search/:tag', function() {
		before(seed);
		after(utils.dropDb);

		it('Should return the correct tag', function(done) {
			request(app)
				.get('/api/tag/search/Idraulic')
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/, 'it should respond with json')
				.expect(200)
				.end(function(err, res) {
					let resJson = JSON.parse(res.text);
					resJson.should.have.length(1);
					done();
				});
		});

		it('Should return the correct tag', function(done) {
			request(app)
				.get('/api/tag/search/AAA')
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/, 'it should respond with json')
				.expect(200)
				.end(function(err, res) {
					let resJson = JSON.parse(res.text);
					resJson.should.have.length(0);
					done();
				});
		});

		it('Should return the correct tag', function(done) {
			request(app)
				.get('/api/tag/search/I')
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/, 'it should respond with json')
				.expect(200)
				.end(function(err, res) {
					let resJson = JSON.parse(res.text);
					resJson.should.have.length(2);
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
