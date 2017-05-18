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

describe('Testing Post for localhost:3000/api/passport/signup', function() {
	describe('POST /api/passport/signup', function() {
		before(seed);
		after(utils.dropDb);
		it('should respond with success', function(done) {
			request(app)
				.post('/api/passport/signup')
				.send({
					"firstName": "Lorenzo",
					"lastName": "Ferri",
					"email": "werfwefwefwefwfwefewfwefewfs@usi.ch",
					"password": "ciao"
				})
				.expect(200)
				.expect('Content-Type', /json/)
				.end(function(err, res) {
					if (err) done(err);
					res.body.should.have.property('success', true);
					done();
				});
		});

		it('should respond with error', function(done) {
			request(app)
				.post('/api/passport/signup')
				.send({
					"firstName": "Lorenzo",
					"lastName": "Ferri",
					"email": "werfwefwefwefwfwefewfwefewfs@usi.ch",
					"password": "ciao"
				})
				.expect(200)
				.expect('Content-Type', /json/)
				.end(function(err, res) {
					if (err) done(err);
					res.body.should.have.property('error', 'email already taken');
					done();
				});
		});

		it('should respond with error', function(done) {
			request(app)
				.post('/api/passport/signup')
				.send({
					"firstName": "Lorenzo",
					"lastName": "Ferri",
					"email": "paroleacaso2@usi.ch",
					"password": ""
				})
				.expect(200)
				.expect('Content-Type', /json/)
				.end(function(err, res) {
					if (err) done(err);
					res.body.should.have.property('message', 'Missing credentials');
					done();
				});
		});
	});
});

describe('Testing Post for localhost:3000/api/passport/login', function() {
	describe('POST /api/passport/login', function() {
		before(seed);
		after(utils.dropDb);
		it('should respond with error if the email is not present in the DB', function(done) {
			request(app)
				.post('/api/passport/login')
				.send({
					"email": "a@a.a",
					"password": "a"
				})
				.expect(200)
				.expect('Content-Type', /json/)
				.end(function(err, res) {
					if (err) done(err);
					res.body.should.have.property('result', 'failed');
					res.body.should.have.property('motivation', 'not-found');
					done();
				});
		});

		it('should respond with error if the password is not present', function(done) {
			request(app)
				.post('/api/passport/login')
				.send({
					"email": "m.t@usi.ch"
				})
				.expect('Content-Type', /json/)
				.end(function(err, res) {
					if (err) done(err);
					res.body.should.have.property('result', 'failed');
					res.body.should.have.property('motivation', 'not-found');
					done();
				});
		});

		it('should respond with success', function(done) {
			request(app)
				.post('/api/passport/login')
				.send({
					"email": "m.b@usi.ch",
					"password": "test"
				})
				.expect(200)
				.expect('Content-Type', /json/)
				.end(function(err, res) {
					if (err) done(err);
					res.body.should.have.property('result', 'success');
					done();
				});
		});
	});
});

describe('Testing GET for localhost:3000/api/passport/islogged', function() {
	describe('GET /api/passport/islogged', function() {
		before(seed);
		after(utils.dropDb);
		it('should respond with false', function(done) {
			request(app)
				.get('/api/passport/islogged')
				.expect(200)
				.expect('Content-Type', /json/)
				.end(function(err, res) {
					if (err) done(err);
					res.body.should.have.property('result', false);
					done();
				});
		});
	});
});

describe('Testing GET for localhost:3000/api/passport/logout', function() {
	describe('GET /api/passport/logout', function() {
		before(seed);
		after(utils.dropDb);
		it('should respond with redirect', function(done) {
			request(app)
				.get('/api/passport/logout')
				.expect(200)
				.expect('Content-Type', /json/)
				.end(function(err, res) {
					res.headers.should.have.property('content-type', 'text/plain; charset=utf-8');
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
