/** @module models/index.js
 * Loads all models
 */
'use strict';

var mongoose = require('mongoose');

require('./Freelancer');
require('./Tag');
require('./Review');
require('./User');
require('./ClaimRequest');

module.exports = {
   'Freelancer': mongoose.model('Freelancer'),
   'Tag': mongoose.model('Tag'),
   'Review': mongoose.model('Review'),
   'User': mongoose.model('User'),
   'ClaimRequest': mongoose.model('ClaimRequest'),
}
