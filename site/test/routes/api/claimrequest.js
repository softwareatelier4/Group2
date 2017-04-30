'use strict';

var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

var should = require('should');
var utils = require('../../utils');
var app = require('../../../app');
var seedDb = require('../../seedDb');
var request = require('supertest');
var user;
var freelancer;

describe('Testing Read for api/claimrequest', function() {
	describe('GET /api/claimrequest', function() {
		before(seed);
		after(utils.dropDb);

		it('Should return the empty json', function(done) {
			request(app)
				.get('/api/claimrequest')
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/, 'it should respond with json')
				.expect(200)
				.end(function(err, res) {
					var reqClaim = JSON.parse(res.text);
					reqClaim.should.have.length(1);
					done();
				});
		});
	});
});

describe('Testing POST for localhost:3000/api/claimrequest', function() {
	describe('POST /api/claimrequest', function() {
		before(seed);
		after(utils.dropDb);
		it('should respond with redirect on post', function(done) {
			request(app)
				.post('/api/claimrequest')
				.send({
					"user": "b00000000000000000000002",
					"freelancer": "f00000000000000000000002",
					"status": "Pending",
					"notes": "test post"
				}).end()
			request(app)
				.get('/api/claimrequest')
				.set('Accept', 'application/json')
				.expect(200)
				.expect('Content-Type', /json/, 'it should respond with json')
				.end(function(err, res) {
					if (err) done(err);
					let reqClaim = JSON.parse(res.text);
					reqClaim.should.have.length(1);
					done();
				});
		});
	});
});

describe('Testing put for claimrequest', function() {
	describe('PUT /api/claimrequest/claimId', function() {
		before(seed);
		after(utils.dropDb);
		var put_claimRequest = {
			_id: ObjectId("d00000000000000000000002"),
			user: ObjectId("b00000000000000000000002"),
			freelancer: ObjectId("f00000000000000000000002"),
			photos: "../public/uploads/claimRequests/upload_claim.png",
			notes: 'This is my profile',
			status: 'Pending'
		}

		var temp = put_claimRequest;
		temp.status = "Accepted";

		it('Should modify the status of the claim request', function(done) {
			request(app)
				.put('/api/claimrequest/d00000000000000000000002')
				.send(temp)
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/, 'it should respond with json')
				.expect(200)
				.end(function(err, res) {
					let resJson = JSON.parse(res.text);
					resJson.status.should.not.equal("Pending");
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
