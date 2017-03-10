/** @module users/router */
'use strict';

var express = require('express');
var router = express.Router();
var middleware = require('../../middleware');
var rootUrl = require("../../../config").url;
// redis
const redis = require('redis');
const REDIS_PORT = process.env.REDIS_PORT;
const client = redis.createClient(REDIS_PORT);

//supported methods
router.all('/', middleware.supportedMethods('GET, OPTIONS'));

//list users
router.get('/', function(req, res, next) {
   const test = {
      ciao: 'test'
   }
   client.set('some key', JSON.stringify({
      ciao: 'come'
   }));

   client.get('some key', function(err, data) {
      console.log(data);
      res.json(JSON.parse(data));
   })
});
/** router for /users */
module.exports = router;
