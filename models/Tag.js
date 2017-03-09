/** @module users/Tag
 * The Tag Model
 * Schema:
 * _id           ObjectId                    Unique identifier of the tag
 * name          String     required         Name of the tag
 * counter       Integer    required         Number of times this tag is used
 */

'use strict';

var mongoose = require('mongoose');

var tagSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true
   },
   counter: {
      type: Integer,
      required: true,
      default: 0
   },
});

mongoose.model('Tag', userSchema);
