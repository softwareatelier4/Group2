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


router.post('/', function(req, res, next) {
	let form = new formidable.IncomingForm({
		uploadDir: __dirname + '/../../../public/uploads/claimRequests/',
		keepExtensions: true
	});

	form.parse(req, function(err, fields, files) {
		if (err) return next(err);
		let savePath = files.file.path;
		let i = savePath.lastIndexOf('/');

		let fileName = savePath.substring(i + 1, savePath.length);

		let claimRequest = new ClaimRequest();
		claimRequest.user = fields.userid;
		claimRequest.freelancer = fields.freelancerid;
		claimRequest.status = 'Pending';
		claimRequest.notes = fields.description;
		claimRequest.identitycard = '/uploads/claimRequests/' + fileName;
		claimRequest.save(function(err, saved) {
			if (err) res.send(err);

			console.log(saved);
			res.send(saved);
		});
	});
});

router.put('/:id', function(req, res, next) {
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

						freelancer.save();
					}
				});

				User.findById(uId, function(err, user) {
					if (err) return next(err);

					if (user) {
						user.freeLancerId = fId;

						user.save();

						let fHtml = "<a href='http://localhost:3000/#freelancer=" + fId + "'>freelancer</a>";
						const content = {
							title: 'You are a freelancer now!',
							body: 'You request for the ' + fHtml + ' has been accepted.\nGood luck with your job!'
						}
						if (user.email != 'l.f@usi.ch' && user.email != 'm.t@usi.ch') {
							require('./../mail').sendMail(user.email, 'JobAdvisor: Your Freelancer Request', content, function(err, info) {});
						}
					}
				});
			} else if (newStatus == 'Refused') {
				let fId = claim.freelancer;
				let uId = claim.user;

				Freelancer.findById(fId).exec(function(err, freelancer) {
					if (err) return next(err);

					if (freelancer && freelancer.ownerId) {
						if (freelancer.ownerId.toString() == uId) {
							freelancer.ownerId = undefined;
						}
						freelancer.save();
					}
				});

				User.findById(uId, function(err, user) {
					if (err) return next(err);

					if (user) {
						let fHtml = "<a href='http://localhost:3000/#freelancer=" + fId + "'>freelancer</a>";
						const content = {
							title: 'Request Refused!',
							body: 'You request for the ' + fHtml + ' has not been accepted.\nFor further informations contact us!'
						}
						if (user.email != 'l.f@usi.ch' && user.email != 'm.t@usi.ch') {
							require('./../mail').sendMail(user.email, 'JobAdvisor: Your Freelancer Request', content, function(err, info) {});
						}
					}
				});
			}

			claim.save(function(err, saved) {
				if (err) res.send(err);

				console.log(saved);
				res.send(saved);
			});
		}
	});
});

module.exports = router;
