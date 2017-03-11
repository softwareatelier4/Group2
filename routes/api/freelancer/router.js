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

//list users
router.get('/', function(req, res, next) {
   res.json({
      id:"oggetewnjeajnnjfa"
   })
});

//Examples for next routes

router.get('/:freelancerid', function(req, res, next) {
   Freelancer.findById(req.params.freelancerid).lean().exec(function(err, freelancer){
      if(err){
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
})

// router.get('/:albumid/:albumname', function(req, res, next) {
//    res.json({
//       id:req.params.albumid,
//       name: req.params.albumname
//    })
// })

/** router for /users */
module.exports = router;
