/** @module users/router */
'use strict';

var express = require('express');
var router = express.Router();
var middleware = require('../../middleware');
var rootUrl = require("../../../config").url;
const mongoose = require('mongoose');
const Review = mongoose.model('Review');
const Freelancer = mongoose.model('Freelancer');

const formidable = require('formidable');


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

//reply to review
router.all('/:reviewid', middleware.supportedMethods('POST, PUT, DELETE, OPTIONS'));
router.post('/:reviewid', function(req, res, next) {
	let answer = req.body.review;
	let reviewId = req.params.reviewid;

	let data = {
		answer
	}

	let filter = {
		_id: reviewId
	}

	Review.update(filter, data, function(err, save) {
		if (err) {
			res.status(400).send(err);
			return;
		}
		if (save.ok == 0 || save.n == 0) {
			res.status(404).send(save);
			return;
		}

		res.status(201).send(save);
	});
});

router.put('/:idFreelancer', function(req, res, next) {
	// add a review to a freelancer

	const idFreelancer = req.params.idFreelancer;

	let form = new formidable.IncomingForm({
		uploadDir: __dirname + '/../../../public/uploads/review/',
		keepExtensions: true
	});

	form.parse(req, function(err, fields, files) {
		if (err) return next(err);

		let fileNames = [];
		let review = new Review();

		for (let file of Object.values(files)) {
			let savePath = file.path;
			let i = savePath.lastIndexOf('/');

			fileNames.push('/uploads/review/' + savePath.substring(i + 1, savePath.length));
		}

		review.photo = fileNames;

		if (fields.title) {
			review.title = fields.title
		}

		if (fields.description) {
			review.description = fields.description
		}

		review.score = fields.score;

		review.freelancer = idFreelancer;

		review.user = fields.user;

		review.save(function(err, newReview) {
			if (err) {
				return res.sendStatus(400);
			}

			Review.find({
				freelancer: idFreelancer
			}).populate('freelancer').exec(function(err, reviews) {
				if (err) {
					return res.status(400).send(err);
				}

				let freelancer = reviews[0].freelancer;



				freelancer.score = newScoreAverage(reviews);


				freelancer.save(function(err) {
					if (err) {
						return res.sendStatus(400);
					}
					console.log(newReview);
					res.status(202).send(newReview);
				});
			});
		})
	});

});



function newScoreAverage(reviews) {
	let sumScore = 0;

	for (let rev of reviews) {
		sumScore += rev.score;
	}

	return (sumScore / reviews.length).toFixed(1);
}

/** router for /users */
module.exports = router;
