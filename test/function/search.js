'use strict';

var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

var should = require('should');
var utils = require('../utils');
var app = require('../../app');
var seedDb = require('../seedDb');
var request = require('supertest');

var freelancers;

function seed(done){
  //seed the db
  seedDb.seed(function(err, seedData){
    if (err) return done(err);
    freelancers = seedData[1].data;
    done();
  });
}


describe('Testing the search algorithm', function(){

  describe('GET /api/freelancer/search', function(){

    before(seed);
    after(utils.dropDb);

    it('should list all the freelancer with correct data', function(done){
      request(app)
        .get('/api/freelancer/search/Lugano')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/, 'it should respond with json' )
        .expect(200)
        .end(function(err, res){
          let resJson = res.json;
          
          done();
        });
    });
  });
});


let matchFreelancerInfoInText = function matchAlbumInfoInText(text, album){
   text.indexOf(album.name).should.be.greaterThan(-1, "name should be there");
   text.indexOf(album.artist.toString()).should.be.greaterThan(-1, "name should be there");
   text.indexOf(album.artwork).should.be.greaterThan(-1, "artwork should be there");
   text.indexOf(album.label).should.be.greaterThan(-1, "label should be there");
   if(! album.tracks) return;
   album.tracks.forEach(function(track){
     text.indexOf(track.toString())
       .should.be.greaterThan(-1, "tracks should be there");
   });
}
