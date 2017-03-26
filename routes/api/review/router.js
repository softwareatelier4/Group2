/** @module users/router */
'use strict';

var express = require('express');
var router = express.Router();
var middleware = require('../../middleware');
var rootUrl = require("../../../config").url;
const mongoose = require('mongoose');
const Review = mongoose.model('Review');
const Freelancer = mongoose.model('Freelancer');

//supported methods
router.all('/', middleware.supportedMethods('GET, OPTIONS'));

router.all('/freelancer/:freelancerid', middleware.supportedMethods('GET, OPTIONS'));
router.get('/freelancer/:freelancerid', function(req, res, next) {
	Review.find({
		freelancer: req.params.freelancerid
	}).populate('user').populate('freelancer').lean().exec(function(err, review) {
		if (err) {
			res.status(400).send(err);
			return;
		}

		if (review.length == 0) {
			Freelancer.findById(req.params.freelancerid).lean().exec(function(err, freelancer) {
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

				res.json(review);

			});
		} else {
			res.json(review);
		}
	})
})

router.all('/:reviewid', middleware.supportedMethods('POST, OPTIONS'));
router.post('/:reviewid', function(req, res, next) {
	res.json({
		statusCode: 201
	});

});

/** router for /users */
module.exports = router;
