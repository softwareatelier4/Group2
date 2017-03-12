/** @module users/router */
'use strict';

var express = require('express');
var router = express.Router();
var middleware = require('../../middleware');
var rootUrl = require("../../../config").url;
const mongoose = require('mongoose');
const Freelancer = mongoose.model('Freelancer');

//supported methods
router.all('/', middleware.supportedMethods('GET, OPTIONS'));

router.get('/:freelancerid', function(req, res, next) {
   Freelancer.findById(req.params.freelancerid).populate('tags').populate('ownerId').lean().exec(function(err, freelancer) {
      if (err) {
         res.status(400).send(err);
         return;
      }
      if (!freelancer) {
         res.status(404);
         res.json({
            statusCode: 404,
            message: "Not Found"
         });
         return;
      }
      res.json(freelancer);
   })
});

router.get('/', function(req, res, next) {
   Freelancer.find({}, fieldsFilter).lean().exec(function(err, freelancers){
    if (err) return next (err);
    freelancers.forEach(function(freelancer){
      addLinks(freelancer);
    });
    res.json(freelancers);
  });
});

/** router for /users */
module.exports = router;
