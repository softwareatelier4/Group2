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

router.all('/:freelancerid', middleware.supportedMethods('GET, OPTIONS'));
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
 * Returns a distance from a freelancer and a user's coordinates
 * @param {object} freelancer - A freelancer
 * @param {number} lat - User's latitude
 * @param {number} long - User's longitude
 * @return {number} - Distance
 */
let distanceCalculation = function(freelancer, lat, long) {
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
   lat_beta = pigreco * freelancer.address.lat / 180;
   lon_alfa = pigreco * long / 180;
   lon_beta = pigreco * freelancer.address.long / 180;
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
   let lat = params[1].split(",")[0];
   let long = params[1].split(",")[1];
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
         distance: Number(distanceCalculation(f, lat, long).toFixed(3)),
         time: Number(distanceCalculation(f, lat, long).toFixed(3)) / 60,
         counter: countInArray(fClone, f),
         price: f.price
      };
      result.push(freelancer);
   }

   /*
      Sort the freelancer based on the number of found searchWords in the
      freelancer's profile
   */
   result.sort(function(a, b) {
      return b.counter - a.counter;
   });

   console.log(result);
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


module.exports = router;
