/** @module users/router */
'use strict';

var express = require('express');
var router = express.Router();
var middleware = require('../../middleware');
var rootUrl = require("../../../config").url;
const mongoose = require('mongoose');
const Tag = mongoose.model('Tag');

//supported methods

router.all('/', middleware.supportedMethods('GET, POST, OPTIONS'));

router.get('/', function(req,res) {

});

router.get('/search/:tag', function(req, res, next) {
	Tag.find({name : new RegExp('^'+ req.params.tag, 'i')}, 'id name', function(err, result) {
		if(err) {
			res.send(err);
		} else {
			res.send(result);
		}
	});
});

router.post('/', function(req, res, next) {
	Tag.find({name : req.body.name}, function(err, result) {
		console.log(result);
		if(result.length == 0) {
			var tag = new Tag();
			tag.name    = req.body.name;
			tag.save(function(err, result) {
				if (err){
					res.send(err);
				} else {
					res.send(result);
				}
			});
		}
		else{
			res.send("Esiste gia")
		}
	});
});

module.exports = router;
