/** @module users/router */
'use strict';

var express = require('express');
var router = express.Router();
var middleware = require('../../middleware');
var rootUrl = require("../../../config").url;
const mongoose = require('mongoose');
const Freelancer = mongoose.model('Freelancer');
const User = mongoose.model('User');


router.all('/user/:userid', middleware.supportedMethods('GET'));
router.get('/user/:userid', function(req, res, next) {
	const userId = req.params.userid;
	const set = {
		active: true
	};

	User.findByIdAndUpdate(userId, set, function(err, user) {
		if (err) {
			res.status(400).send(err);
			return;
		} else if (!user) {
			return res.status(404).json();

		}
		res.status(201).redirect('/');
	})
});


router.all('/freelancer/:freelancerid', middleware.supportedMethods('GET'));
router.get('/freelancer/:freelancerid', function(req, res, next) {
	const freelancerId = req.params.freelancerid;
	const set = {
		active: true
	};

	Freelancer.findByIdAndUpdate(freelancerId, set, function(err, freelancer) {
		if (err) {
			res.status(400).send(err);
			return;
		} else if (!freelancer) {
			return res.status(404).json();

		}
		res.status(201).redirect('/');
	})
});

module.exports = router;
