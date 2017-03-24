/** @module users/router */
'use strict';

var express = require('express');
var router = express.Router();
var middleware = require('../../middleware');
var rootUrl = require("../../../config").url;
const mongoose = require('mongoose');
const Freelancer = mongoose.model('Freelancer');

//supported methods
router.all('/', middleware.supportedMethods('GET, OPTIONS'));

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

//function for updating the freelancer profile

router.put('/:freelancerid', function(req, res, next) {
  const data = req.body;

  Freelancer.findById(req.params.freelancerid, function(err, freelancer){
    if (err) return next (err);

    if (freelancer){
      freelancer.firstName = data.firstName;
      freelancer.lastName = data.lastName;
      freelancer.workName = data.workName;
      freelancer.email = data.email;
      freelancer.phone = data.phone;
      freelancer.profilePhoto = data.profilePhoto;
      freelancer.photos = data.photos;
      freelancer.address = data.address;
      freelancer.tags = data.tags;
      freelancer.description = data.description;
      freelancer.ownerId = data.ownerId;
      freelancer.score = data.score;

      freelancer.save(onModelSave(res));
    }
  });
});

/**
 * Returns an array of Freelancers based on a given string
 * @param {array} freelancers - List of freelancer to filter
 * @param {string} string - Search criteria
 * @return {array} - Array of filtered freelancers
 */
let searchEngine = function(freelancers, string) {
   let result = [];
   let words = string.replace(",", " ").split(" ");
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
            fClone.push(f);
            continue;
         }

         let city = [f.address.city];
         if (searchForTag(city, w).length > 0) {
            fClone.push(f);
            continue;
         }

         let filter = [f.firstName, f.lastName, f.workName, f.phone, f.email, f.description];
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
      let freelancer = {
         _id: f._id,
         firstName: f.firstName,
         lastName: f.lastName,
         description: f.description,
         tags: f.tags,
         workName: f.workName,
         photo: f.profilePhoto,
         counter: countInArray(fClone, f)
      };
      result.push(freelancer);
   }

   /*
      Sort the freelancer based on the number of found searchWords in the
      freelancer's profile
   */
   result.sort(function(a, b) {
      return b.counter - a.counter
   })

   return removeDuplicatesFreelancers(result);

}


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
      if (s && s.toLowerCase().includes(string.toLowerCase()))
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


function onModelSave(res, status, sendItAsResponse){
  const statusCode = status || 204;
  sendItAsResponse = sendItAsResponse || false;
  return function(err, saved){
    if (err) {
      if (err.name === 'ValidationError' 
        || err.name === 'TypeError' ) {
        res.status(400)
        return res.json({
          statusCode: 400,
          message: "Bad Request"
        });
      }else{
        return next (err);
      }
    }

    if( sendItAsResponse){
      const obj = saved.toObject();
      delete obj.password;
      delete obj.__v;
      addLinks(obj);
      return res.status(statusCode).json(obj);
    }else{
      return res.status(statusCode).end();
    }
  }
}

module.exports = router;
