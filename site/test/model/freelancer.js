/* jshint node: true */
'use strict';

//connect to DB
var mongoose = require('mongoose');

var should = require('should');
var utils = require('../utils');

//load model
require('../../models/Freelancer');
require('../../models/Tag');
require('../../models/User');


describe('Model: Freelancer', function(done) {
   describe('Freelancer model definition', function() {
      it('should have a constructor', function() {
         var Freelancer;
         try {
            Freelancer = mongoose.model('Freelancer');
         } catch (err) {
            console.log(err.stack);
         } finally {
            should.exist(Freelancer, 'expected Freelancer constructor to exist');
            Freelancer.should.be.a.Function;
         }
      })
   });

   describe('When creating a new freelancer', function(done) {
      var Freelancer = mongoose.model('Freelancer');
      var Tag = mongoose.model('Tag');
      var User = mongoose.model('User');
      var tag, user, freelancer;

      before(function(done) {
         //connect and drop db
         utils.connectAndDropDb(function(err) {
            if (err) return done(err);

            tag = new Tag({
               name: 'Plumber',
               freelancer: []
            });

            user = new User({
               firstName: 'Nevio',
               lastName: 'Tollini',
               password: 'ciao',
               email: 'nevio@tollini.it'
            });

            freelancer = new Freelancer({
               'firstName': 'Marco',
               'lastName': 'Tollini',
               'workName': 'BHO',
               'email': 'tollim@usi.ch',
               'phone': '380474747',
               'profilePhoto': '/uploads/5625fc2bd82b84d23d8c7bd5/profile.jpg',
               'address': {
                  road: 'Via Zurigo',
                  number: 10,
                  city: 'Lugano',
                  cap: 29100
               },
               'tags': [tag._id],
               'description': 'This is a description',
               ownerId: user._id
            });

            user.freelancerId = freelancer._id;
            tag.freelancer.push(freelancer._id);

            freelancer.save(function(err, save) {
               if (err) return done(err);

               tag.save(function(err, save) {
                  if (err) return done(err);

                  user.save(function(err, save) {
                     if (err) return done(err);
                     done();
                  });
               });
            });
         });
      });

      after(utils.dropDbAndCloseConnection);

      it('should create an instance of the right type', function() {
         var freelancer = new Freelancer();
         freelancer.constructor.name.should.equal('model');
         freelancer.should.be.instanceof(Freelancer);
      });

      it('should persist a freelancer with valid properties', function(done) {
         var freelancer = new Freelancer();
         freelancer.firstName = 'Marco';
         freelancer.lastName = 'Valsangiacomo';
         freelancer.workName = 'Valsantollim';
         freelancer.email = 'mail@valsantollim';
         freelancer.phone = '+442345345645';
         freelancer.profilePhoto = '/a.jpg';
         freelancer.photos = ['/a.jpg', '/b.jpg'];
         freelancer.address = {
            road: 'Via Zurigo',
            number: 10,
            city: 'Lugano',
            cap: 29100
         };
         freelancer.tags = [tag._id];
         freelancer.description = 'Blah';
         freelancer.ownerId = user._id;
         freelancer.save(function(err, saved) {
            should.not.exist(err, 'No error should occur');
            saved.should.eql(freelancer);
            done();
         });
      });

      it('should fail if firstName is empty, null, or undefined', function(done) {
         var freelancer = new Freelancer();
         freelancer.lastName = 'Valsangiacomo';
         freelancer.workName = 'Valsantollim';
         freelancer.email = 'mail@valsantollim';
         freelancer.phone = '+442345345645';
         freelancer.profilePhoto = '/a.jpg';
         freelancer.photos = ['/a.jpg', '/b.jpg'];
         freelancer.address = {
            road: 'Via Zurigo',
            number: 10,
            city: 'Lugano',
            cap: 29100
         };
         freelancer.tags = [tag._id];
         freelancer.description = 'Blah';
         freelancer.ownerId = user._id;
         utils.errorIfNullUndefinedOrEmpty(freelancer, 'firstName', done);
      });

      it('should fail if lastName is empty, null, or undefined', function(done) {
         var freelancer = new Freelancer();
         freelancer.firstName = 'Marco';
         freelancer.workName = 'Valsantollim';
         freelancer.email = 'mail@valsantollim';
         freelancer.phone = '+442345345645';
         freelancer.profilePhoto = '/a.jpg';
         freelancer.photos = ['/a.jpg', '/b.jpg'];
         freelancer.address = {
            road: 'Via Zurigo',
            number: 10,
            city: 'Lugano',
            cap: 29100
         };
         freelancer.tags = [tag._id];
         freelancer.description = 'Blah';
         freelancer.ownerId = user._id;
         utils.errorIfNullUndefinedOrEmpty(freelancer, 'lastName', done);
      });

      it('should fail if email is empty, null, or undefined', function(done) {
         var freelancer = new Freelancer();
         freelancer.firstName = 'Marco';
         freelancer.lastName = 'Valsangiacomo';
         freelancer.workName = 'Valsantollim';
         freelancer.phone = '+442345345645';
         freelancer.profilePhoto = '/a.jpg';
         freelancer.photos = ['/a.jpg', '/b.jpg'];
         freelancer.address = {
            road: 'Via Zurigo',
            number: 10,
            city: 'Lugano',
            cap: 29100
         };
         freelancer.tags = [tag._id];
         freelancer.description = 'Blah';
         freelancer.ownerId = user._id;
         utils.errorIfNullUndefinedOrEmpty(freelancer, 'email', done);
      });

      it('should fail if description is empty, null, or undefined', function(done) {
         var freelancer = new Freelancer();
         freelancer.firstName = 'Marco';
         freelancer.lastName = 'Valsangiacomo';
         freelancer.workName = 'Valsantollim';
         freelancer.email = 'mail@valsantollim';
         freelancer.phone = '+442345345645';
         freelancer.profilePhoto = '/a.jpg';
         freelancer.photos = ['/a.jpg', '/b.jpg'];
         freelancer.address = {
            road: 'Via Zurigo',
            number: 10,
            city: 'Lugano',
            cap: 29100
         };
         freelancer.tags = [tag._id];
         freelancer.ownerId = user._id;
         utils.errorIfNullUndefinedOrEmpty(freelancer, 'description', done);
      });

      it('if workName is empty; null; or undefined, it should get assigned the value ""',
         function(done) {
            var freelancer = new Freelancer();
            freelancer.firstName = 'Marco';
            freelancer.lastName = 'Valsangiacomo';
            freelancer.email = 'mail@valsantollim';
            freelancer.phone = '+442345345645';
            freelancer.profilePhoto = '/a.jpg';
            freelancer.photos = ['/a.jpg', '/b.jpg'];
            freelancer.address = {
               road: 'Via Zurigo',
               number: 10,
               city: 'Lugano',
               cap: 29100
            };
            freelancer.tags = [tag._id];
            freelancer.description = 'Blah';
            freelancer.ownerId = user._id;
            freelancer.save(function(err, saved) {
               should.not.exist(err, 'No error should occur');
               freelancer.workName.should.equal("");
               done();
            });
         }
         );

      it('if photos is empty; null; or undefined, it should get assigned the value []',
         function(done) {
            var freelancer = new Freelancer();
            freelancer.firstName = 'Marco';
            freelancer.lastName = 'Valsangiacomo';
            freelancer.workName = 'Name';
            freelancer.email = 'mail@valsantollim';
            freelancer.phone = '+442345345645';
            freelancer.profilePhoto = '/a.jpg';
            freelancer.address = {
               road: 'Via Zurigo',
               number: 10,
               city: 'Lugano',
               cap: 29100
            };
            freelancer.tags = [tag._id];
            freelancer.description = 'Blah';
            freelancer.ownerId = user._id;
            freelancer.save(function(err, saved) {
               should.not.exist(err, 'No error should occur');
               freelancer.photos.should.have.length(0);
               done();
            });
         }
         );

      it('if ownerId is empty; null; or undefined, it should not be assigned',
         function(done) {
            var freelancer = new Freelancer();
            freelancer.firstName = 'Marco';
            freelancer.lastName = 'Valsangiacomo';
            freelancer.workName = 'Name';
            freelancer.email = 'mail@valsantollim';
            freelancer.phone = '+442345345645';
            freelancer.profilePhoto = '/a.jpg';
            freelancer.photos = ['/a.jpg', '/b.jpg'];
            freelancer.address = {
               road: 'Via Zurigo',
               number: 10,
               city: 'Lugano',
               cap: 29100
            };
            freelancer.tags = [tag._id];
            freelancer.description = 'Blah';
            freelancer.save(function(err, saved) {
               should.not.exist(err, 'No error should occur');
               should.not.exist(saved.ownerId);
               done();
            });
         }
         );

      it('if profilePhoto is empty; null; or undefined, it should not be assigned',
         function(done) {
            var freelancer = new Freelancer();
            freelancer.firstName = 'Marco';
            freelancer.lastName = 'Valsangiacomo';
            freelancer.workName = 'Name';
            freelancer.email = 'mail@valsantollim';
            freelancer.phone = '+442345345645';
            freelancer.photos = ['/a.jpg', '/b.jpg'];
            freelancer.address = {
               road: 'Via Zurigo',
               number: 10,
               city: 'Lugano',
               cap: 29100
            };
            freelancer.tags = [tag._id];
            freelancer.description = 'Blah';
            freelancer.ownerId = user._id;
            freelancer.save(function(err, saved) {
               should.not.exist(err, 'No error should occur');
               should.not.exist(saved.profilePhoto);
               done();
            });
         });
   });
});
