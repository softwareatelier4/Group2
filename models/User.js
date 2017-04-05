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
      type: String
      //required: true
   },
   lastName: {
      type: String
      //required: true
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

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};
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
