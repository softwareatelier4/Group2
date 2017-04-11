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

router.get('/', function(req, res, next) {
	ClaimRequest.find({}).populate('user').populate('freelancer').lean().exec(function(err, requests) {
		if (err) return next(err);

		for (let request of requests) {
			delete request.freelancer.description;
			delete request.freelancer.profilePhoto;
			delete request.freelancer.price;
			delete request.freelancer.score;
			delete request.freelancer.tags;
			delete request.freelancer.address;
			delete request.freelancer.photos;
			delete request.freelancer.workName;
			delete request.freelancer.phone;
			delete request.user.password;
		}

		// let result = {
		// 	request: requests
		// }
		// console.log(result);
		// res.json(result);
		res.json(requests);
	});
});


router.put('/', function(req, res, next) {
	const data = req.body;

	let claimRequest = new ClaimRequest();
	claimRequest.user = data.userId;
	claimRequest.freelancer = data.freelancerId;
	claimRequest.status = 'Pending';
	claimRequest.notes = data.description;

	claimRequest.save(onModelSave(res, 200, true));
});

function onModelSave(res, status, sendItAsResponse) {
	const statusCode = status || 204;
	sendItAsResponse = sendItAsResponse || false;
	return function(err, saved) {
		if (err) {
			if (err.name === 'ValidationError' ||
				err.name === 'TypeError') {
				res.status(400)
				return res.json({
					statusCode: 400,
					message: "Bad Request"
				});
			} else {
				return next(err);
			}
		}

		if (sendItAsResponse) {
			const obj = saved.toObject();
			delete obj.password;
			delete obj.__v;
			// addLinks(obj);
			return res.status(statusCode).json(obj);
		} else {
			return res.status(statusCode).end();
		}
	}
}

module.exports = router;
