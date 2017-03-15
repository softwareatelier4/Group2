'use strict';

var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

var should = require('should');
var utils = require('../../utils');
var app = require('../../../app');
var seedDb = require('../../seedDb');
var request = require('supertest');
var freelancers;

describe('Testing Read for api/freelancer/', function() {
   describe('GET /api/freelancer/:freelancerID', function() {
      before(seed);
      after(utils.dropDb);

      it('Should return the correct freelancer', function(done) {
         request(app)
            .get('/api/freelancer/5625fc2bd82b84d23d8c7bd0/')
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
            .get('/albums/' + ObjectId().toString())
            .set('Accept', 'application/json')
            .expect(404, done);
      });
   });
});


function seed(done) {
   //seed the db
   seedDb.seed(function(err, seedData) {
      if (err) return done(err);
      freelancers = seedData[0].data;
      done();
   });
}
