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
					var reqClaim = res.text;
					reqClaim.should.equal('[]');
					done();
				});
		});
	});
});

// describe('Testing Post for localhost:3000/api/claimrequest', function() {
// 	var Freelancer = mongoose.model('Freelancer');
// 	var Tag = mongoose.model('Tag');
// 	var User = mongoose.model('User');
// 	var ClaimRequest = mongoose.model('ClaimRequest');
// 	var tag, user, freelancer, claimrequest;
//
// 	describe('POST /api/claimrequest', function() {
// 		before(function(done) {
// 			utils.connectAndDropDb(function(err) {
// 				if (err) return done(err);
//
// 				tag = new Tag({
// 					name: 'Plumber',
// 					freelancer: []
// 				});
//
// 				user = new User({
// 					firstName: 'Nevio',
// 					lastName: 'Tollini',
// 					password: 'ciao',
// 					email: 'nevio@tollini.it'
// 				});
//
// 				freelancer = new Freelancer({
// 					'firstName': 'Marco',
// 					'lastName': 'Tollini',
// 					'workName': 'BHO',
// 					'email': 'tollim@usi.ch',
// 					'phone': '380474747',
// 					'profilePhoto': '/uploads/5625fc2bd82b84d23d8c7bd5/profile.jpg',
// 					'address': {
// 						road: 'Via Zurigo',
// 						number: 10,
// 						city: 'Lugano',
// 						cap: 29100
// 					},
// 					'tags': [tag._id],
// 					'description': 'This is a description',
// 					ownerId: user._id
// 				});
// 				tag.freelancer.push(freelancer._id);
//
// 				claimrequest = new ClaimRequest({
// 					user: user._id,
// 					freelancer: freelancer._id,
// 					photos: 'upload/claimRequest/upload_claim.png',
// 					notes: 'Hi, this is my profile!'
// 				});
//
// 				freelancer.save(function(err, save) {
// 					if (err) return done(err);
//
// 					tag.save(function(err, save) {
// 						if (err) return done(err);
//
// 						user.save(function(err, save) {
// 							if (err) return done(err);
//
// 							claimrequest.save(function(err, save) {
// 								if (err) return done(err);
// 								done();
// 							});
// 						});
// 					});
// 				});
// 			});
// 		});
// 		after(utils.dropDb);
//
// 		it('should respond with redirect on post', function(done) {
// 			// request.post('/your/endpoint')
// 			// 	.field('extra_info', '{"in":"case you want to send json along with your file"}')
// 			// 	.attach('image', 'path/to/file.jpg')
// 			// 	.end(function(err, res) {
// 			// 		res.should.have.status(200); // 'success' status
// 			// 		done();
// 			// 	});
// 			request(app)
// 				.post('/api/claimrequest')
// 				.field('extra_info', {
// 					"user": user._id,
// 					"freelancer": freelancer._id,
// 					"notes": 'Hi, this is my profile!'
// 				})
// 				.attach('image', 'path/to/file.jpg')
// 				.expect(200)
// 				.expect('Content-Type', /json/)
// 				.end(function(err, res) {
// 					if (err) done(err);
// 					res.body.should.have.property('user', user._id);
// 					// res.body.should.have.property('lastName', 'Ferri');
// 					done();
// 				});
// 		});
// 	});
// });
//
//
// describe('Testing put for claimrequest', function() {
// 	describe('PUT /api/freelancer/:freelancerID', function() {
// 		after(utils.dropDb);
// 		var put_freelancer = {
// 			'_id': ObjectId("f00000000000000000000000"),
// 			'firstName': 'Marco',
// 			'lastName': 'Tollini',
// 			'workName': 'Il Tollo',
// 			'email': 'tollim@usi.ch',
// 			'phone': '+39 380474747',
// 			'profilePhoto': '/uploads/test/profile0.jpg',
// 			'address': {
// 				road: 'Via Zurigo',
// 				number: 10,
// 				city: 'Lugano',
// 				cap: 69100
// 			},
// 			'tags': [
// 				ObjectId("a00000000000000000000000"),
// 				ObjectId("a00000000000000000000001")
// 			],
// 			'description': 'Hello guys! I am an amazing developer. ',
// 			'photos': [
// 				'/uploads/test/1.jpg',
// 				'/uploads/test/2.jpg',
// 				'/uploads/test/3.jpg',
// 			],
// 			'score': 5,
// 			price: 10
// 		}
//
// 		var temp = put_freelancer;
// 		temp.firstName = "Francesco";
//
// 		it('Should modify the first name of the freelancer', function(done) {
// 			request(app)
// 				.put('/api/freelancer/f00000000000000000000000')
// 				.send(
// 					temp
// 				)
// 				.set('Accept', 'application/json')
// 				.expect('Content-Type', /json/, 'it should respond with json')
// 				.expect(200)
// 				.end(function(err, res) {
// 					let resJson = JSON.parse(res.text);
// 					resJson.firstName.should.not.equal("Marco");
// 					done();
// 				});
// 		});
//
// 		temp = put_freelancer;
// 		temp.lastName = "Mocciolo";
// 		it('Should modify the last name of the freelancer', function(done) {
// 			request(app)
// 				.put('/api/freelancer/f00000000000000000000000')
// 				.send(
// 					temp
// 				)
// 				.set('Accept', 'application/json')
// 				.expect('Content-Type', /json/, 'it should respond with json')
// 				.expect(200)
// 				.end(function(err, res) {
// 					let resJson = JSON.parse(res.text);
// 					resJson.lastName.should.not.equal("Tollini");
// 					done();
// 				});
// 		});
//
// 		temp = put_freelancer;
// 		temp.workName = "Nokia";
// 		it('Should modify the work name of the freelancer', function(done) {
// 			request(app)
// 				.put('/api/freelancer/f00000000000000000000000')
// 				.send(
// 					temp
// 				)
// 				.set('Accept', 'application/json')
// 				.expect('Content-Type', /json/, 'it should respond with json')
// 				.expect(200)
// 				.end(function(err, res) {
// 					let resJson = JSON.parse(res.text);
// 					resJson.workName.should.not.equal("Il Tollo");
// 					done();
// 				});
// 		});
//
// 		temp = put_freelancer;
// 		temp.email = "123@gmail.com";
// 		it('Should modify the work name of the freelancer', function(done) {
// 			request(app)
// 				.put('/api/freelancer/f00000000000000000000000')
// 				.send(
// 					temp
// 				)
// 				.set('Accept', 'application/json')
// 				.expect('Content-Type', /json/, 'it should respond with json')
// 				.expect(200)
// 				.end(function(err, res) {
// 					let resJson = JSON.parse(res.text);
// 					resJson.email.should.not.equal("tollim@usi.ch");
// 					done();
// 				});
// 		});
//
// 		temp = put_freelancer;
// 		temp.phone = "+41797805942";
// 		it('Should modify the phone of the freelancer', function(done) {
// 			request(app)
// 				.put('/api/freelancer/f00000000000000000000000')
// 				.send(
// 					temp
// 				)
// 				.set('Accept', 'application/json')
// 				.expect('Content-Type', /json/, 'it should respond with json')
// 				.expect(200)
// 				.end(function(err, res) {
// 					let resJson = JSON.parse(res.text);
// 					resJson.phone.should.not.equal("+39 380474747");
// 					done();
// 				});
// 		});
//
// 		temp = put_freelancer;
// 		temp.profilePhoto = "/uploads/test/profile1.jpg";
// 		it('Should modify the phone of the freelancer', function(done) {
// 			request(app)
// 				.put('/api/freelancer/f00000000000000000000000')
// 				.send(
// 					temp
// 				)
// 				.set('Accept', 'application/json')
// 				.expect('Content-Type', /json/, 'it should respond with json')
// 				.expect(200)
// 				.end(function(err, res) {
// 					let resJson = JSON.parse(res.text);
// 					resJson.profilePhoto.should.not.equal("/uploads/test/profile0.jpg");
// 					done();
// 				});
// 		});
//
// 		temp = put_freelancer;
// 		temp.tags = ["Tecnico", "Developer", "Informatico", "NEW", "TAGS"];
// 		it('Should modify the tags of the freelancer', function(done) {
// 			request(app)
// 				.put('/api/freelancer/f00000000000000000000000')
// 				.send(
// 					temp
// 				)
// 				.set('Accept', 'application/json')
// 				.expect('Content-Type', /json/, 'it should respond with json')
// 				.expect(200)
// 				.end(function(err, res) {
// 					let resJson = JSON.parse(res.text);
// 					resJson.tags.should.not.equal(["Tecnico", "Developer", "Informatico"]);
// 					done();
// 				});
// 		});
// 	});
// });

function seed(done) {
	//seed the db
	seedDb.seed(function(err, seedData) {
		if (err) return done(err);
		done();
	});
}
