/** @module models/Review
 * The Review Model.
 * Schema:
 * _id            String       required   Unique identifier of the review
 * title          String       required   Name of the review
 * description    String       optional   Description of the review
 * score          Integer      required   Score given by the user in this review
 * photo          String       optional   URL of a photo attached to this review
 * user           ObjectId     required   The user who made this review
 * answer         String       optional   A reply to this review
 */

'use strict';

var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var reviewSchema = new mongoose.Schema({
   title: {
      type: String,
      required: true
   },
   description: {
      type: String,
      default: ""
   },
   score: {
      type: Integer,
      required: true
   },
   photo: {
      type: String
   },
   user: {
      type: ObjectId,
      ref: "User",
      required: true
   },
   answer: {
      type: String,
      required: true
   },
});

mongoose.model('Review', reviewSchema);
