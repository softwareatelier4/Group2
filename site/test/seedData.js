'use strict';

var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;


var freelancer = require('./seedData/freelancer').freelancer;

var tag = require('./seedData/tag').tag;

var user = require('./seedData/user').user;

var claimrequest = require('./seedData/claimrequest').claimrequest;

var review = require('./seedData/review').review;

var seedData = [];
seedData.push(freelancer);
seedData.push(tag);
seedData.push(review);
seedData.push(user);
seedData.push(claimrequest);

module.exports = seedData;
