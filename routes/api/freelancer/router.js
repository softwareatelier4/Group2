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

router.get('/search/:search', function(req, res, next) {
   Freelancer.find({}).populate('tags').lean().exec(function(err, freelancers) {
      if (err) return next(err);

      res.json(searchEngine(freelancers, req.params.search));
   });
});

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

         let filter = [f.firstName, f.lastName, f.description, f.workName];
         if (searchForTag(filter, w).length > 0) {
            fClone.push(f);
            continue;
         }
      }
   }

   for (let f of fClone) {
      let freelancer = {
         _id: f._id,
         firstName: f.firstName,
         lastName: f.lastName,
         description: f.description,
         workName: f.workName,
         photo: f.profilePhoto,
         counter: countInArray(fClone, f)
      };
      result.push(freelancer);
   }

   result.sort(function(a, b) {
      return b.counter - a.counter
   })

   return removeDuplicatesIds(result);

}


let removeDuplicatesIds = function(array) {
   let temp = [];
   let found = false;
   for (let f of array) {
      for (let x of temp) {
         console.log(JSON.stringify(f));
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
      if (s.includes(string))
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


module.exports = router;
