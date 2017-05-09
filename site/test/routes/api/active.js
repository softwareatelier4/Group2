'use strict';

var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

const Freelancer = mongoose.model('Freelancer');
const User = mongoose.model('User');

var should = require('should');
var utils = require('../../utils');
var app = require('../../../app');
var seedDb = require('../../seedDb');
var request = require('supertest');


var users;

describe('Testing Active api/active/', function() {
	describe('GET /api/active/user/:userID', function() {
		before(seed);
		after(utils.dropDb);

		it('Should active the user', function(done) {
			request(app)
				.get('/api/active/user/b00000000000000000000008/')
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/, 'it should respond with json')
				.expect(201)
				.end(function(err, res) {
					User.findById('b00000000000000000000008', function(err, returnUser) {
						returnUser.active.should.be.eql(true);
						done();
					});
				});
		});


		it('Should mantain the active to the user', function(done) {
			request(app)
				.get('/api/active/user/b00000000000000000000001/')
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/, 'it should respond with json')
				.expect(201)
				.end(function(err, res) {
					User.findById('b00000000000000000000001', function(err, returnUser) {
						returnUser.active.should.be.eql(true);
						done();
					});
				});
		});


		it('Should fail if the user not exists', function(done) {
			request(app)
				.get('/api/active/user/b11100000010000500000001/')
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/, 'it should respond with json')
				.expect(404, done);
		});


		it('Should there is an error in the ID, return the error', function(done) {
			request(app)
				.get('/api/active/user/b100500000001/')
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/, 'it should respond with json')
				.expect(400, done);
		});

	});


	describe('GET /api/active/freelancer/:freelancerID', function() {
		before(seed);
		after(utils.dropDb);

		it('Should active the freelancer', function(done) {
			request(app)
				.get('/api/active/freelancer/f00000000000000000000007/')
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/, 'it should respond with json')
				.expect(201)
				.end(function(err, res) {
					Freelancer.findById('f00000000000000000000007', function(err, returnFreelancer) {
						returnFreelancer.active.should.be.eql(true);
						done();
					});
				});
		});


		it('Should mantain the active to the freelancer', function(done) {
			request(app)
				.get('/api/active/freelancer/f00000000000000000000006/')
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/, 'it should respond with json')
				.expect(201)
				.end(function(err, res) {
					Freelancer.findById('f00000000000000000000006', function(err, returnFreelancer) {
						returnFreelancer.active.should.be.eql(true);
						done();
					});
				});
		});


		it('Should fail if the freelancer not exists', function(done) {
			request(app)
				.get('/api/active/freelancer/f11100000010000500000001/')
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/, 'it should respond with json')
				.expect(404, done);
		});


		it('Should there is an error in the ID, return the error', function(done) {
			request(app)
				.get('/api/active/freelancer/f100500000001/')
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/, 'it should respond with json')
				.expect(400, done);
		});

	});
});

function seed(done) {
	//seed the db
	seedDb.seed(function(err, seedData) {
		if (err) return done(err);
		users = seedData[3].data;
		done();
	});
}
