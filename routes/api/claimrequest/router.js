/** @module users/router */
'use strict';

var express = require('express');
var router = express.Router();
var middleware = require('../../middleware');
var rootUrl = require("../../../config").url;
const mongoose = require('mongoose');
const ClaimRequest = mongoose.model('ClaimRequest');
const Freelancer = mongoose.model('Freelancer');
const User = mongoose.model('User');
const formidable = require('formidable');
const fs = require('fs');

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

		res.json(requests);
	});
});


router.put('/', function(req, res, next) {
	console.log('ciao');
	let form = new formidable.IncomingForm({
		uploadDir: __dirname + '/../../../public/uploads/claimRequests/',
		keepExtensions: true
	});

	form.parse(req, function(err, fields, files) {
		console.log(fields);
		console.log(files);
		let savePath = files.file.path;
		let i = savePath.lastIndexOf('/');

		let fileName = savePath.substring(i + 1, savePath.length);

		let claimRequest = new ClaimRequest();
		claimRequest.user = fields.userid;
		claimRequest.freelancer = fields.freelancerid;
		claimRequest.status = 'Pending';
		claimRequest.notes = fields.description;
		claimRequest.photos = ['/uploads/claimRequests/' + fileName];

		claimRequest.save(onModelSave(res, 200, true));
	});
});

router.post('/:id', function(req, res, next) {
	let claimId = req.params.id;
	let newStatus = req.body.status;

	ClaimRequest.findById(claimId, function(err, claim) {
		if (err) return next(err);

		if (claim) {
			claim.status = newStatus;

			if (newStatus === "Accepted") {
				let fId = claim.freelancer;
				let uId = claim.user;

				Freelancer.findById(fId, function(err, freelancer) {
					if (err) return next(err);

					if (freelancer) {
						freelancer.ownerId = uId;

						freelancer.save(onModelSave(res, 200, false));
					}
				});

				User.findById(uId, function(err, user) {
					if (err) return next(err);

					if (user) {
						user.freeLancerId = fId;

						user.save(onModelSave(res, 200, false));
					}
				});
			}
			claim.save(onModelSave(res, 200, true));
		}
	});


	//claimRequest.save(onModelSave(res, 200, true));
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
