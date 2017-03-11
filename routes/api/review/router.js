/** @module users/router */
'use strict';

var express = require('express');
var router = express.Router();
var middleware = require('../../middleware');
var rootUrl = require("../../../config").url;
const mongoose = require('mongoose');
const Review = mongoose.model('Review');

//supported methods
router.all('/', middleware.supportedMethods('GET, OPTIONS'));


router.get('/freelancer/:freelancerid', function(req, res, next) {
   Review.find({
      freelancer: req.params.freelancerid
   }).populate('user').populate('freelancer').lean().exec(function(err, review) {
      if (err) {
         res.status(400).send(err);
         return;
      }
      if (!review) {
         res.status(404);
         res.json({
            statusCode: 404,
            message: "Not Found"
         });
         return;
      }
      res.json(review);
   })
})

/** router for /users */
module.exports = router;
