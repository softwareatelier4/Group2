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

describe('Testing Read for api/freelancer/', function() {
	describe('GET /api/freelancer/:freelancerID', function() {
		before(seed);
		after(utils.dropDb);

		it('Should return the correct freelancer', function(done) {
			request(app)
			.get('/api/freelancer/f00000000000000000000000/')
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/, 'it should respond with json')
			.expect(200)
			.end(function(err, res) {
				var freelancer = res.text;
				utils.matchFreelancerInfoInText(freelancer, freelancers[0]);
				done();
			});
		});

		it('should respond with a 404 if the freelancer does not exist', function(done) {
			request(app)
			.get('/api/freelancer/' + ObjectId().toString())
			.set('Accept', 'application/json')
			.expect(404, done);
		});

		it('should respond with a 400 if the id is not correct', function(done) {
			request(app)
			.get('/api/freelancer/abc' + ObjectId().toString())
			.set('Accept', 'application/json')
			.expect(400, done);
		});
	});
});

describe('Testing Read for localhost:3000/api/review/freelancer/', function() {
	describe('GET /api/review/freelancer/:freelancerID', function() {
		before(seed);
		after(utils.dropDb);
		it('Should return the correct review', function(done) {
			request(app)
			.get('/api/review/freelancer/f00000000000000000000000')
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/, 'it should respond with json')
			.expect(200)
			.end(function(err, res) {
				var review = res.text;
				utils.matchReviewInfoInText(review, reviews[6]);
				done();
			});
		});

		it('Should return empty array if the freelancer exists', function(done) {
			request(app)
			.get('/api/review/freelancer/f00000000000000000000002')
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/, 'it should respond with json')
			.expect(200)
			.end(function(err, res) {
				res.text.should.equal('[]');
				done();
			});
		});

		it('should respond with a 404 if the freelancer does not exist', function(done) {
			request(app)
			.get('/api/review/freelancer/3625fc2bd82b84d23d8c7bd1')
			.set('Accept', 'application/json')
			.expect(404, done);
		});

		it('should respond with a 400 if the id is not correct', function(done) {
			request(app)
			.get('/api/review/freelancer/abc' + ObjectId().toString())
			.set('Accept', 'application/json')
			.expect(400, done);
		});
	});
});

describe('Testing put for freelancer', function() {
	describe('PUT /api/freelancer/:freelancerID', function() {
		before(seed);
		after(utils.dropDb);
		var put_freelancer = {
			_id: ObjectId("f00000000000000000000000"),
			firstName: 'Marco',
			lastName: 'Tollini',
			workName: 'Il Tollo',
			email: 'tollim@usi.ch',
			phone: '+39 380474747',
			profilePhoto: '/uploads/test/profile0.jpg',
			address: {
				road: 'Via Zurigo',
				number: 10,
				city: 'Lugano',
				cap: 69100,
				lat: 46.0119793,
				long: 8.9517463,
			},
			tags: [
				ObjectId("a00000000000000000000000"),
				ObjectId("a00000000000000000000001")
			],
			description: 'Hello guys! I am an amazing developer. ',
			photos: [
				'/uploads/test/1.jpg',
				'/uploads/test/2.jpg',
				'/uploads/test/3.jpg',
			],
			score: 5,
			price: 10,
			certifications: [
				'Bachelor Informatics',
				'Master Informatics',
				'Doctor',
			],
			emergency: true,
			currentPosition: {
				lat: 46.0119793,
				long: 12.9517463,
			},
		}

		var temp = put_freelancer;

		temp.workName = "Nokia";
		it('Should modify the work name of the freelancer', function(done) {
			request(app)
			.put('/api/freelancer/f00000000000000000000000')
			.send(
				temp
			)
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/, 'it should respond with json')
			.expect(200)
			.end(function(err, res) {
				let resJson = JSON.parse(res.text);
				resJson.workName.should.not.equal("Il Tollo");
				done();
			});
		});


		temp = put_freelancer;
		temp.phone = "+41797805942";
		it('Should modify the phone of the freelancer', function(done) {
			request(app)
			.put('/api/freelancer/f00000000000000000000000')
			.send(
				temp
			)
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/, 'it should respond with json')
			.expect(200)
			.end(function(err, res) {
				let resJson = JSON.parse(res.text);
				resJson.phone.should.not.equal("+39 380474747");
				done();
			});
		});

		temp = put_freelancer;
		temp.profilePhoto = "/uploads/test/profile1.jpg";
		it('Should modify the phone of the freelancer', function(done) {
			request(app)
			.put('/api/freelancer/f00000000000000000000000')
			.send(
				temp
			)
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/, 'it should respond with json')
			.expect(200)
			.end(function(err, res) {
				let resJson = JSON.parse(res.text);
				resJson.profilePhoto.should.not.equal("/uploads/test/profile0.jpg");
				done();
			});
		});

		temp = put_freelancer;
		// temp.tags = ["Tecnico", "Developer", "Informatico", "NEW", "TAGS"];
		// it('Should modify the tags of the freelancer', function(done) {
		// 	request(app)
		// 		.put('/api/freelancer/f00000000000000000000000')
		// 		.send(
		// 			temp
		// 		)
		// 		.set('Accept', 'application/json')
		// 		.expect('Content-Type', /json/, 'it should respond with json')
		// 		.expect(200)
		// 		.end(function(err, res) {
		// 			let resJson = JSON.parse(res.text);
		// 			resJson.tags.should.not.equal(["Tecnico", "Developer", "Informatico"]);
		// 			done();
		// 		});
		// });
	});
});

describe('Testing Post for localhost:3000/api/freelancer/create/freelancer', function() {
	describe('POST /api/freelancer/create/freelancer', function() {
		before(seed);
		after(utils.dropDb);
		it('should respond with redirect on post', function(done) {
			request(app)
			.post('/api/freelancer/create/freelancer')
			.send({
				firstName: "Lorenzo",
				lastName: "Ferri",
				workName: "Lollo",
				email: "lorenzo.ferri@usi.ch",
				phone: "3330003330",
				address: {
					city: "Lugano",
					street: "via Zurigo",
					number: 23,
					cap: 6900,
					lat: 46.0119793,
					long: 8.9517463
				},
				tags: ["Informatico", "Photographer"],
				description: "AAA",
				emergency: false,
			})
			.expect(200)
			.expect('Content-Type', /json/)
			.end(function(err, res) {
				if (err) done(err);
				res.body.should.have.property('firstName', 'Lorenzo');
				res.body.should.have.property('lastName', 'Ferri');
				done();
			});
		});
	});
});

describe('Testing ROUTE for localhost:3000/api/freelancer/emergency/:freelancerid', function() {
	describe('PUT /api/freelancer/emergency/:freelancerid', function() {
		before(seed);
		after(utils.dropDb);
		it('should respond with the same value that we send', function(done) {
			request(app)
			.put('/api/freelancer/emergency/f00000000000000000000000')
			.send({
				emergency: true
			})
			.expect(200)
			.expect('Content-Type', /json/)
			.end(function(err, res) {
				if (err) done(err);
				res.text.should.be.eql("true");
				done();
			});
		});

		it('should respond with the same value that we send', function(done) {
			request(app)
			.put('/api/freelancer/emergency/f00000000000000000000000')
			.send({
				emergency: false
			})
			.expect(200)
			.expect('Content-Type', /json/)
			.end(function(err, res) {
				if (err) done(err);
				res.text.should.be.eql("false");
				done();
			});
		});
	});
	describe('GET /api/freelancer/emergency/:freelancerid', function() {
		before(seed);
		after(utils.dropDb);
		it('should respond with true', function(done) {
			request(app)
			.get('/api/freelancer/emergency/f00000000000000000000000')
			.expect(200)
			.expect('Content-Type', /json/)
			.end(function(err, res) {
				if (err) done(err);
				res.text.should.be.eql("true");
				done();
			});
		});
		it('should respond with false', function(done) {
			request(app)
			.get('/api/freelancer/emergency/f00000000000000000000003')
			.expect(200)
			.expect('Content-Type', /json/)
			.end(function(err, res) {
				if (err) done(err);
				res.text.should.be.eql("false");
				done();
			});
		});
	});
});

describe('Testing ROUTE for localhost:3000/api/freelancer/location/:freelancerid', function() {
	describe('POST /api/freelancer/location/:freelancerid', function() {
		before(seed);
		after(utils.dropDb);
		it('should respond with 200', function(done) {
			request(app)
			.post('/api/freelancer/location/f00000000000000000000000')
			.send([{
				longitude: 0,
				latitude: 0
			}])
			.expect(200, done)
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
