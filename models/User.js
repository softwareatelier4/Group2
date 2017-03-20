/** @module users/User
 * The User Model
 * Schema:
 * _id           ObjectId                    Unique identifier of the user
 * freeLancerId  ObjectId   optional         freelancer linked to this user
 * email         String     required         Email address of the user
 * password      String     required         Password for the user account
 * firstName     String     required         First name of the user
 * lastName      String     required         Last name of the user
 */

'use strict';

var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var SALT_WORK_FACTOR = 10;
var ObjectId = mongoose.Schema.Types.ObjectId;

var userSchema = new mongoose.Schema({
   freeLancerId: {
      type: ObjectId,
      ref: "Freelancer"
   },
   firstName: {
      type: String,
      required: true
   },
   lastName: {
      type: String,
      required: true
   },
   password: {
      type: String,
      required: true
   },
   email: {
      type: String,
      required: true
   }
});

userSchema.pre('save', function(next) {
   var user = this;

   // return if the password was not modified.
   if (!user.isModified('password')) {
      return next();
   }

   bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
      if (err) {
         return next(err);
      }

      bcrypt.hash(user.password, salt, function(err, hash) {
         if (err) {
            return next(err);
         }

         user.password = hash;
         next();
      });
   });
});

/*
userSchema.methods.isValidPassword = function isValidPassword(candidate, callback) {
   bcrypt.compare(candidate, this.password, function onPwdCompare(err, isMatch) {
      if (err) {
         return callback(err);
      }
      callback(null, isMatch);
   });
};
*/

mongoose.model('User', userSchema);
