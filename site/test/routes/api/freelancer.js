'use strict';

var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

var should = require('should');
var utils = require('../../utils');
var app = require('../../../app');
var seedDb = require('../../seedDb');
var request = require('supertest');
var path = require("path");
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

describe('Testing Read for /api/review/freelancer/', function() {
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
					utils.matchReviewInfoInText(review, reviews[0]);
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
		temp.photos[3] = "/uploads/test/4.jpg";
		it('Should add a photo', function(done) {
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
					resJson.photos[3].should.equal("/uploads/test/4.jpg");
					done();
				});
		});

		temp = put_freelancer;
		temp.photos[0] = undefined;
		temp.photos[1] = undefined;
		temp.photos[2] = undefined;
		it('Should add a photo', function(done) {
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
					resJson.photos.indexOf(0).should.equal(-1);
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

	describe('POST /api/freelancer/create/freelancer', function() {
		before(seed);
		after(utils.dropDb);
		it('should respond with redirect on post', function(done) {
			request(app)
				.post('/api/freelancer/create/freelancer')
				.send({
					firstName: "Federica",
					lastName: "Amica",
					workName: "Mano",
					email: "fede@mano.amica",
					phone: "3330003330",
					address: {
						city: "Lugano",
						street: "via Zurigo",
						number: 23,
						cap: 6900,
						lat: 46.0119793,
						long: 8.9517463
					},
					tags: ["Accompagnatrice", "Falegname"],
					description: "AAA",
					emergency: false,
				})
				.expect(200)
				.expect('Content-Type', /json/)
				.end(function(err, res) {
					if (err) done(err);
					res.body.should.have.property('firstName', 'Federica');
					res.body.should.have.property('lastName', 'Amica');
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

		it('should respond with 404 if the id doesn\'t exist', function(done) {
			request(app)
				.put('/api/freelancer/emergency/3625fc2bd82b84d23d8c7bd1')
				.send({
					emergency: false
				})
				.expect(404, done)
		});

		it('should respond with 500 if the id is invalid', function(done) {
			request(app)
				.put('/api/freelancer/emergency/b100500000001')
				.send({
					emergency: false
				})
				.expect(500, done)
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
				.get('/api/freelancer/emergency/f00000000000000000000039')
				.expect(200)
				.expect('Content-Type', /json/)
				.end(function(err, res) {
					if (err) done(err);
					res.text.should.be.eql("false");
					done();
				});
		});
		it('should respond with a 404 if the freelancer does not exist', function(done) {
			request(app)
				.get('/api/freelancer/emergency/3625fc2bd82b84d23d8c7bd1')
				.set('Accept', 'application/json')
				.expect(404, done);
		});
		it('should respond with a 500 if the id is invalid', function(done) {
			request(app)
				.get('/api/freelancer/emergency/b100500000001')
				.set('Accept', 'application/json')
				.expect(500, done);
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


describe('Testing /api/freelancer/sendEmailFreelancer/:email', function() {
	describe('POST /api/freelancer/sendEmailFreelancer/:email', function() {
		before(seed);
		after(utils.dropDb);
		it('should respond with 200', function(done) {
			request(app)
				.post('/api/freelancer/sendEmailFreelancer/test@nessundominico.de')
				.send([{
					work: 'Puzzolo',
					id: '234234322334234fwefwefwe'
				}])
				.expect(200, done)
		});

		it('should respond with 404 if the freelancer doesn\'t exists', function(done) {
			request(app)
				.post('/api/freelancer/location/3625fc2bd82b84d23d8c7bd1')
				.send([{
					longitude: 0,
					latitude: 0
				}])
				.expect(404, done)
		});

		it('should respond with 500 if the id is invalid', function(done) {
			request(app)
				.post('/api/freelancer/location/b100500000001')
				.send([{
					longitude: 0,
					latitude: 0
				}])
				.expect(500, done)
		});
	});
});

describe('Testing /api/freelancer/galleryUpload/:id', function() {
	describe('PUT /api/freelancer/galleryUpload/:id', function() {
		before(seed);
		after(utils.dropDb);
		it('Should upload the photo and respond with 200', function(done) {
			request(app)
				.put('/api/freelancer/galleryUpload/f00000000000000000000000')
				.type('form')
				.attach('file0', path.join(__dirname, "/../../test.jpg"))
				.attach('file1', path.join(__dirname, "/../../test.jpg"))
				.send({
					title: ["test.jpg"],
					freelancerId: "f00000000000000000000000"
				})
				.expect(200, done)
		});
	});
});

describe('Testing /api/freelancer/galleryModification/:id', function() {
	describe('PUT /api/freelancer/galleryModification/:id', function() {
		before(seed);
		after(utils.dropDb);
		it('Should upload the photos and respond with 200', function(done) {
			request(app)
				.put('/api/freelancer/galleryModification/f00000000000000000000000')
				.type('form')
				.attach('file0', path.join(__dirname, "/../../test.jpg"))
				.attach('file1', path.join(__dirname, "/../../test.jpg"))
				.send({
					profile_check: 'true',
					deletedFiles: ["/uploads/test/0a.jpg"],
					freelancerId: "f00000000000000000000000"
				})
				.expect(200, done)
		});
	});
});

describe('Testing /api/freelancer/userfavorites/:userid', function() {
	describe('GET /api/freelancer/userfavorites/:userid', function() {
		before(seed);
		after(utils.dropDb);
		it('Should get the favorites for that user and respond with a list of favorites', function(done) {
			request(app)
			.get('/api/freelancer/userfavorites/b00000000000000000000010')
			.expect(200)
			.expect('Content-Type', /json/)
			.end(function(err, res) {
				if (err) done(err);
				res.body.favorites.length.should.be.eql(10);
				done();
			});
		});


		it('Should return 400 if the user id is wrong', function(done) {
			request(app)
			.get('/api/freelancer/userfavorites/ciao')
			.expect(400, done);
		});

		it('Should get the favorites for that user and respond with a list of favorites', function(done) {
			request(app)
			.get('/api/freelancer/userfavorites/b00000000000000000000010?lat=0.0&lng=10.0')
			.expect(200)
			.expect('Content-Type', /json/)
			.end(function(err, res) {
				if (err) done(err);
				res.body.favorites.length.should.be.eql(10);
				done();
			});
		});
	});
});

describe('Testing /api/freelancer/favorite/:freelancerid', function() {
	describe('GET /api/freelancer/favorite/:freelancerid', function() {
		before(seed);
		after(utils.dropDb);
		it('Should add a freelancer to favourites', function(done) {
			request(app)
			.post('/api/freelancer/favorite/f00000000000000000000000')
			.send({
				userId: 'b00000000000000000000010'
			})
			.expect(200)
			.expect('Content-Type', /json/)
			.end(function(err, res) {
				if (err) done(err);
				res.body.status.should.be.eql(true);
				done();
			});
		});


		it('Should not add a freelancer to favourites', function(done) {
			request(app)
			.post('/api/freelancer/favorite/f00000000000000000000002')
			.send({
				userId: 'b00000000000000000000010'
			})
			.expect(200)
			.expect('Content-Type', /json/)
			.end(function(err, res) {
				if (err) done(err);
				res.body.status.should.be.eql(false);
				done();
			});
		});


		it('Should return 400 if not valid freelancer', function(done) {
			request(app)
			.post('/api/freelancer/favorite/ciao')
			.send({
				userId: 'b00000000000000000000010'
			})
			.expect(400, done);
		});

		it('Should return 400 if not valid user', function(done) {
			request(app)
			.post('/api/freelancer/favorite/f00000000000000000000002')
			.send({
				userId: 'ciao'
			})
			.expect(400, done);
		});

		it('Should return 404 if user is not present', function(done) {
			request(app)
			.post('/api/freelancer/favorite/f00000000000000000000002')
			.send({
				userId: 'b00000000110000000000000'
			})
			.expect(404, done);
		});

		it('Should return 404 if freelancer is not present', function(done) {
			request(app)
			.post('/api/freelancer/favorite/f00001100000000000000002')
			.send({
				userId: 'b00000000000000000000000'
			})
			.expect(404, done);
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
