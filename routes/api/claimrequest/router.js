/** @module users/router */
'use strict';

var express = require('express');
var router = express.Router();
var middleware = require('../../middleware');
var rootUrl = require("../../../config").url;
const mongoose = require('mongoose');
const ClaimRequest = mongoose.model('ClaimRequest');

//supported methods

router.all('/', middleware.supportedMethods('GET, POST, PUT, OPTIONS'));

router.put('/', function(req, res, next) {
	console.log("Hello, world!");
	res.status(200);
	res.json({});
});

router.get('/', function(req, res, next) {
	console.log("Hello, GET!");
	res.status(200);
	res.json({});
});

module.exports = router;
