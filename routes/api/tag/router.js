/** @module users/router */
'use strict';

var express = require('express');
var router = express.Router();
var middleware = require('../../middleware');
var rootUrl = require("../../../config").url;
const mongoose = require('mongoose');
const Tag = mongoose.model('Tag');

//supported methods

router.all('/', middleware.supportedMethods('GET, OPTIONS'));

router.get('/search/:tag', function(req, res, next) {
	Tag.find({name : new RegExp('^'+ req.params.tag, 'i')}, 'id name', function(err, result) {
		if(err) {
			res.send(err);
		} else {
			res.send(result);
		}
	});
});

module.exports = router;
