/** @module users/router */
'use strict';

var express = require('express');
var router = express.Router();
var middleware = require('../../middleware');
var rootUrl = require("../../../config").url;
var fs = require('fs');
const mongoose = require('mongoose');
const Freelancer = mongoose.model('Freelancer');
const formidable = require('formidable');
const Tag = mongoose.model('Tag');
const util = require('util');

let rmDir = function(dirPath, removeSelf) {
      if (removeSelf === undefined)
        removeSelf = true;
      try { var files = fs.readdirSync(dirPath); }
      catch(e) { return; }
      if (files.length > 0)
        for (var i = 0; i < files.length; i++) {
          var filePath = dirPath + '/' + files[i];
          if (fs.statSync(filePath).isFile())
            fs.unlinkSync(filePath);
          else
            rmDir(filePath);
        }
      if (removeSelf)
        fs.rmdirSync(dirPath);
    };


//supported methods
router.all('/', middleware.supportedMethods('GET, PUT, OPTIONS'));

router.all('/search/:search', middleware.supportedMethods('GET, OPTIONS'));
router.get('/search/:search', function(req, res, next) {
	Freelancer.find({}).populate('tags').lean().exec(function(err, freelancers) {
		if (err) return next(err);

		res.json(searchEngine(freelancers, req.params.search));
	});
});

router.all('/:freelancerid', middleware.supportedMethods('GET, PUT, OPTIONS'));
router.get('/:freelancerid', function(req, res, next) {
	Freelancer.findById(req.params.freelancerid).populate('tags').populate('ownerId').lean().exec(function(err, freelancer) {
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
		res.json(freelancer);
	})
});

router.post('/sendEmailFreelancer/:email', function(req, res) {
	let email = req.params.email;
	let freelancerId = req.body.id;
	let work = req.body.work;

	const link = rootUrl + '/api/active/freelancer/' + freelancerId;
	const content = {
		title: `Your JobAdvisor account is almost ready!`,
		body: `
		<p>Welcome ${work},</p>
		<p>Please complete your account by verifying your email address.</p>
		<div style="text-align: center">
			<a href="${link}" class="confirmBtn" style="display: inline-block; margin-top: 20px;">Verify Email</a>
		</div>
		<p style="font-size: 11px !important; margin-top:30px;">If the link above does not work, you can copy and paste the following into your browser:</p>
		<a style="font-size: 11px !important; color: #aaaaaa;" href="${link}">${link}</a>`
	}
	require('./../mail').sendMail(email, 'JobAdvisor: new freelancer', content, function(err, info) {
		res.sendStatus(200);
	});

});

router.put('/galleryUpload/:id', function(req, res, next) {
	const id = req.params.id;
	let dir = __dirname + '/../../../public/uploads/' + id;
	rmDir(__dirname + '/../../../public/uploads/' + id, false);
	let title = [];
	if (!fs.existsSync(dir)){
	    fs.mkdirSync(dir);
	}

	let form = new formidable.IncomingForm({
		uploadDir: dir,
		keepExtensions: true
	});

	form.parse(req, function(err, fields, files) {
		if (err) return next(err);
		let flag = true;
		let profile = "";
		let j = 1;
		for (let value in files) {
			if(flag){
				let savePath = files[value].path;
				let i = savePath.lastIndexOf('/');

				profile = "uploads/" + id + "/" + savePath.substring(i + 1, savePath.length);

				flag = false;
			} else {
				if(j <= 9){
					let savePath = files[value].path;
					let i = savePath.lastIndexOf('/');

					let fileName = "uploads/" + id + "/" + savePath.substring(i + 1, savePath.length);

					title.push(fileName);
				} else {
					break;
				}

				j++;
				// console.log(fileName + "\n");
			}

		}

		Freelancer.findById(id, function(err, freelancer) {
			if (err) {
				res.status(400).send(err);
				return;
			}

			if (freelancer) {
				freelancer.photos = title;
				freelancer.profilePhoto = profile;
				freelancer.save(onModelSave(res, 200, true));
				// console.log("SAVED\n");
			}
		});
	});
});

function isInArray(value, array) {
  return array.indexOf(value) > -1;
}

router.put('/galleryModification/:id', function(req, res, next) {
	const id = req.params.id;
	let dir = __dirname + '/../../../public/uploads/' + id;
	// rmDir(__dirname + '/../../../public/uploads/' + id, false);
	let number = [];
	if (!fs.existsSync(dir)){
	    fs.mkdirSync(dir);
	}

	let form = new formidable.IncomingForm({
		uploadDir: dir,
		keepExtensions: true
	});

	form.parse(req, function(err, fields, files) {
		if (err) return next(err);
		let flag = true;
		let profile = "";
		let numbers = fields.files;
		let title = [];
		let j = 1;

		for (let value in files) {
			if(fields.profile_check == "true" && flag == true){
				let savePath = files[value].path;
				let i = savePath.lastIndexOf('/');

				let fileName = "uploads/" + id + "/" + savePath.substring(i + 1, savePath.length);

				profile = fileName;
				flag = false;
			} else {
				if(j <= 12){
					let savePath = files[value].path;
					let i = savePath.lastIndexOf('/');

					let fileName = "uploads/" + id + "/" + savePath.substring(i + 1, savePath.length);
					title.push(fileName);
				} else {
					break;
				}

				j++;
			}
		}

		Freelancer.findById(id, function(err, freelancer) {
			if (err) {
				res.status(400).send(err);
				return;
			}
			 let temp = [];
			if (freelancer) {
				if(fields.profile_check == "true"){
					freelancer.profilePhoto = profile;
				}
				let z = 0;

				for(let i = 1; i <= 9; i++){
					if(isInArray(i, numbers)){
						// freelancer.photos[i] = title[z];
						temp[i - 1] = title[z];
						console.log("\n i:" + title[z] + "\n z: " + freelancer.photos[i] + "\n");
						z++;
					} else {
						temp[i - 1] = freelancer.photos[i - 1];
					}
				}
				freelancer.photos = temp;
				console.log(temp);
				freelancer.save(onModelSave(res, 200, true));
			}
		});
	});
});

router.put('/:freelancerid', function(req, res, next) {
	const data = req.body;

	Freelancer.findById(req.params.freelancerid, function(err, freelancer) {
		if (err) {
			res.status(400).send(err);
			return;
		}

		if (freelancer) {
			// freelancer.firstName = data.firstName;
			// freelancer.lastName = data.lastName;
			freelancer.workName = data.workName;
			// freelancer.email = data.email;
			freelancer.phone = data.phone;
			freelancer.profilePhoto = data.profilePhoto;
			freelancer.photos = data.photos;
			freelancer.address = data.address;
			freelancer.tags = null;
			freelancer.description = data.description;
			freelancer.ownerId = data.ownerId;
			freelancer.price = data.price;

			if (data.score != null) {
				freelancer.score = data.score;
			}

			freelancer.save(onModelSave(res, 200, true));

			freelancer.tags = [];
			let tags = req.body.tags;
			//console.log("\n\n\n\n\n\n" + tags + "\n\n\n\n\n\n");
			for (let tag of tags) {
				Freelancer.findById(req.params.freelancerid, function(err, updatedFreelancer) {
					//console.log("\n\n\n\n"+tag+"\n\n\n");
					Tag.findOne({
						name: tag
					}, function(err, docs) {
						if (docs) {
							updatedFreelancer.tags.push(mongoose.Types.ObjectId(docs._id));
							updatedFreelancer.save(function() {});
						} else {
							let newTag = new Tag();
							newTag._id = mongoose.Types.ObjectId();
							newTag.name = tag;
							newTag.save(function(err, newTagRes) {
								updatedFreelancer.tags.push(newTagRes._id);
								updatedFreelancer.save(function() {});
							});
						}
					});
				});
			}
		}
	});
});


/**
 * Returns a distance from a freelancer and a user's coordinates
 * @param {object} freelancer - A freelancer
 * @param {number} lat - User's latitude
 * @param {number} long - User's longitude
 * @return {number} - Distance
 */
let distanceCalculation = function(freelancer, lat, long, emergency) {
	if (!freelancer || !lat || !long)
		return undefined;

	if (emergency != 0 && (!freelancer.currentPosition || !freelancer.currentPosition.lat || !freelancer.currentPosition.long))
		return undefined;

	let R = 6371;
	let pigreco = Math.PI;
	let lat_alfa;
	let lat_beta;
	let lon_alfa;
	let lon_beta;
	let fi;
	let p;
	let d;
	/* Degree to radiants */
	lat_alfa = pigreco * lat / 180;
	lon_alfa = pigreco * long / 180;
	if (emergency == 0) {
		lat_beta = pigreco * freelancer.address.lat / 180;
		lon_beta = pigreco * freelancer.address.long / 180;
	} else {
		lat_beta = pigreco * freelancer.currentPosition.lat / 180;
		lon_beta = pigreco * freelancer.currentPosition.long / 180;
	}
	/* Calculate the angle in between fi */
	fi = Math.abs(lon_alfa - lon_beta);
	/* Calculate the third side of the spherical triangle */
	p = Math.acos(Math.sin(lat_beta) * Math.sin(lat_alfa) + Math.cos(lat_beta) * Math.cos(lat_alfa) * Math.cos(fi));
	/* Calculate the distance */
	d = p * R;
	return d;
}

/**
 * Returns an array of Freelancers based on a given string
 * @param {array} freelancers - List of freelancer to filter
 * @param {string} string - Search criteria
 * @return {array} - Array of filtered freelancers
 */
let searchEngine = function(freelancers, string) {
	let result = [];
	let params = string.split("|");
	let lat, long;
	if (params[1] !== undefined) {
		lat = params[1].split(",")[0];
		long = params[1].split(",")[1];
	}
	let words = params[0].replace(",", " ").split(" ");
	let cityParam = params[2];
	let fClone = [];

	/*
	 Search for the searchWords in freelancers datas
	(tags, cities and then other datas)
	*/
	for (let w of words) {
		for (let f of freelancers) {
			let tags = [];
			for (let t of f.tags) {
				tags.push(t.name);
			}
			if (searchForTag(tags, w).length > 0) {
				let city = [f.address.city];
				if (searchForTag(city, cityParam).length > 0) {
					fClone.push(f);
				}
				fClone.push(f);
				continue;
			}

			let filter = [f.firstName, f.lastName, f.workName, f.phone, f.email];
			if (searchForTag(filter, w).length > 0) {

				fClone.push(f);
				continue;
			}
		}
	}

	/*
	   Put freelancers that satisfy requirements in the result
	*/
	for (let f of fClone) {
		let dist = Number(distanceCalculation(f, lat, long, 0));
		let eDist = Number(distanceCalculation(f, lat, long, 1));
		let timez = undefined
		let timex = undefined;
		if (dist !== undefined) {
			dist = dist.toFixed(1);
			timez = dist / 60;
		}
		if (eDist !== undefined) {
			eDist = eDist.toFixed(1);
			timex = eDist / 60;
		}
		if (dist < 1000) {
			let freelancer = {
				_id: f._id,
				firstName: f.firstName,
				lastName: f.lastName,
				description: f.description,
				tags: f.tags,
				workName: f.workName,
				photo: f.profilePhoto,
				score: f.score,
				latitude: f.address.lat,
				longitude: f.address.long,
				distance: dist,
				time: timez,
				eTime: timex,
				emergency: f.emergency,
				counter: countInArray(fClone, f),
				price: f.price,
				eDistance: eDist
			};
			result.push(freelancer);
		}
	}

	/*
	   Sort the freelancer based on the number of found searchWords in the
	   freelancer's profile
	*/
	result.sort(function(a, b) {
		return b.counter - a.counter;
	});

	// console.log(result);
	return removeDuplicatesFreelancers(result);

}

// function in_array(valore_da_esaminare, array_di_riferimento) {
//     for(i = 0; i &lt; array_di_riferimento.length; i++) {
// 	if(valore_da_esaminare == array_di_riferimento[i]) {
// 	    return true;
// 	}
//     }
//     return false;
// }


/**
 * Returns an array without duplicates freelancers
 * @param {array} array - List of freelancers
 * @return {array} - Array of unique freelancers
 */
let removeDuplicatesFreelancers = function(array) {
	let temp = [];
	let found = false;
	for (let f of array) {
		for (let x of temp) {
			if (f._id === x._id)
				found = true;
		}
		if (!found)
			temp.push(f);
		found = false;
	}
	return temp;
}

/**
 * Returns an array of Strings based on a given string and array of Strings
 * @param {array} array - List to iterate on (tags, cities, ...)
 * @param {string} string - Search criteria
 * @return {array} - Array of filtered stuff
 */
let searchForTag = function(array, string) {
	let result = [];
	for (let s of array) {
		if (s && string && s.toLowerCase().includes(string.toLowerCase()))
			result.push(s);
	}
	return result;
}

/**
 * Returns the number of occurencies of an element in an array
 * @param {array} array - List to iterate on (tags, cities, ...)
 * @param {string} what - The element
 * @return {number} - Occurencies of that element in the array
 */
function countInArray(array, what) {
	var count = 0;
	for (var i = 0; i < array.length; i++) {
		if (array[i] === what) {
			count++;
		}
	}
	return count;
}

router.all('/create/freelancer', middleware.supportedMethods('POST, GET, OPTIONS'));
router.post('/create/freelancer', function(req, res) {
	var freelancer = new Freelancer();
	freelancer.firstName = req.body.firstName;
	freelancer.lastName = req.body.lastName;
	freelancer.workName = req.body.workName;
	freelancer.email = req.body.email;
	freelancer.phone = req.body.phone;
	freelancer.address = req.body.address;
	freelancer.description = req.body.description;
	freelancer.profilePhoto = '';
	freelancer.emergency = req.body.emergency;
	let tags = req.body.tags;

	console.log("\n\n address: " + freelancer.address + "\n\n");
	freelancer.save(function(err, newfreelancer) {
		if (err) {
			console.log(err);
			res.send(err);
		} else {
			Freelancer.update({
				_id: newfreelancer._id
			}, {
				$set: {
					profilePhoto: '/uploads/' + newfreelancer._id + '/profile.jpg'
				}
			}, function(err, res) {});
			for (let tag of tags) {
				Freelancer.findById(newfreelancer._id, function(err, updatedFreelancer) {
					Tag.findOne({
						name: tag
					}, function(err, docs) {
						if (docs) {
							updatedFreelancer.tags.push(mongoose.Types.ObjectId(docs._id));
							updatedFreelancer.save(function() {});
						} else {
							let newTag = new Tag();
							newTag._id = mongoose.Types.ObjectId();
							newTag.name = tag;
							newTag.save(function(err, newTagRes) {
								updatedFreelancer.tags.push(newTagRes._id);
								updatedFreelancer.save(function() {});
							});
						}
					});
				});
			}
			res.json(newfreelancer);
			// res.send(newfreelancer._id);
		}
	});
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
