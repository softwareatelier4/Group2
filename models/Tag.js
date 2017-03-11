/** @module users/Tag
 * The Tag Model
 * Schema:
 * _id           ObjectId                    Unique identifier of the tag
 * name          String     required         Name of the tag
 * Freelancer    Array      required         List of freelancer with that tag
 */

'use strict';

var mongoose = require('mongoose');

var tagSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true
   },
   freelancer: {
      type: Array,
      required: true
   },
});

mongoose.model('Tag', tagSchema);
