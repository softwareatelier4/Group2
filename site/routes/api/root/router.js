/** @module users/router */
'use strict';

var express = require('express');
var router = express.Router();
var middleware = require('../../middleware');
var rootUrl = require("../../../config").url;

//supported methods
router.all('/', middleware.supportedMethods('GET, OPTIONS'));

//list users
router.get('/', function(req, res, next) {
	res.sendfile('api_reference.html', {
		root: __dirname
	});
});

/** router for /users */
module.exports = router;
