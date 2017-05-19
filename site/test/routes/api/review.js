'use strict';

var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

var path = require("path");

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


describe('Testing POST api/review/edit/:reviewid', function() {
	describe('POST api/review/edit/:reviewid', function() {
		before(seed);
		after(utils.dropDb);

		it('Should respond with a 400 if the review', function(done) {
			request(app)
				.post('/api/review/edit/ciao00000')
				.expect(400, done)
		});

		it('Should respond with a 404 if the review does not exist', function(done) {
			request(app)
				.post('/api/review/edit/c00000000012340000000000')
				.send({
					"title": "ciao",
				})
				.expect(404, done);
		});

		it('Should modify the title', function(done) {
			request(app)
				.post('/api/review/edit/c00000000000000000000000')
				.type('form')
				.field('title', 'ciiiao')
				.expect(202)
				.expect('Content-Type', /json/)
				.end(function(err, res) {
					if (err) done(err);
					res.body.title.should.be.eql('ciiiao');
					done();
				});
		});

		it('Should modify the description', function(done) {

			request(app)
				.post('/api/review/edit/c00000000000000000000000')
				.type('form')
				.field('description', 'this is a test')
				.expect(202)
				.expect('Content-Type', /json/)
				.end(function(err, res) {
					if (err) done(err);
					res.body.description.should.be.eql('this is a test');
					done();
				});
		});

		it('Should modify the score', function(done) {

			request(app)
				.post('/api/review/edit/c00000000000000000000000')
				.type('form')
				.field('score', 2)
				.expect(202)
				.expect('Content-Type', /json/)
				.end(function(err, res) {
					if (err) done(err);
					console.log(path.join(__dirname, "../../test.jpg"));
					res.body.score.should.be.eql(2);
					done();
				});
		});

		it('Should upload the photo', function(done) {

			request(app)
				.post('/api/review/edit/c00000000000000000000000')
				.type('form')
				.attach('file1', path.join(__dirname, "/../../test.jpg"))
				.expect(202)
				.expect('Content-Type', /json/)
				.end(function(err, res) {
					if (err) done(err);
					console.log(path.join(__dirname, "/../../test.jpg"));
					res.body.photo.length.should.be.eql(1);
					done();
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
