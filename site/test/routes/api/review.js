'use strict';

var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

var should = require('should');
var utils = require('../../utils');
var app = require('../../../app');
var seedDb = require('../../seedDb');
var request = require('supertest');
var reviews;

describe('Testing Read for api/review/', function() {
	describe('POST /api/review/:reviewID', function() {
		before(seed);
		after(utils.dropDb);

		it('Should respond with a 404 if the review does not exist', function(done) {
			request(app)
				.post('/api/review/' + ObjectId().toString())
				.set('Accept', 'application/json')
				.expect(404, done);
		});

		it('Should respond with a 201 if the reply is post correctly', function(done) {
			request(app)
				.post('/api/review/c00000000000000000000002')
				.set('Accept', 'application/json')
				.expect(201)
				.end(function(err, res) {
					res = JSON.parse(res.text);

					should.not.exist(err, 'No error should occur');
					should.equal(res.nModified, 1);
					should.equal(res.ok, 1);
					should.equal(res.n, 1);
					done();
				});
		});

		it('Should respond with a 400 if the id is not correct', function(done) {
			request(app)
				.post('/api/review/abc' + ObjectId().toString())
				.set('Accept', 'application/json')
				.expect(400, done);
		});

		it('Should return the most recent post-value', function(done) {
			request(app)
				.post('/api/review/c00000000000000000000002')
				.set('Accept', 'application/json')
				.send({
					"review": "first"
				})
				.expect(201)
				.end(function(err, res) {
					request(app)
						.post('/api/review/c00000000000000000000002')
						.set('Accept', 'application/json')
						.send({
							"review": "second"
						})
						.expect(201)
						.end(function(err, res) {
							res = JSON.parse(res.text);
							should.equal(res.nModified, 1);
							done();
						});
				});
		});
	});
});

function seed(done) {
	//seed the db
	seedDb.seed(function(err, seedData) {
		if (err) return done(err);
		reviews = seedData[2].data;
		done();
	});
}
