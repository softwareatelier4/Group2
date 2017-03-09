/** @module models/Album
* The Album Model. 
* Schema:
* _id            String       required   Unique identifier of the album
* name           String       required   Name of the album
* artist         ObjectId     required   Artist who performs in this album. It should be the `_id` of an Artist model document.
* artwork        String       optional   URL of the artwork picture for the album. Default ''
* tracks         [ObjectId]   optional   Tracks that this album contains. They should be `_id`s of Track Model documents.
* dateCreated    Date         required   Date the album was created. Default: Date.now()
* dateReleased   Date         required   Date the album was released. Default: Date.now()
* label          String       optional   Record label of this album. Default: 'USI-INF records'
*/

// Via< numero, citta, cap

//<!-- build:remove -->

'use strict';

var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

//<!-- /build -->

/** @constructor
* @augments AbstractSoundCollectionSchemaInstance
* @param {Object} definition
*/
var FreelancerSchema = new mongoose.Schema(
//<!-- build:remove -->

{
  firstName : { type: String, required: true },
  lastName  : { type: String, required: true },
  workName : { type: String, required: true },
  email  : { type: String, required: true },
  phone : { type: String, required: true },
  profilePhoto : { type: String, required: true },
  photos : { type : Array, require: true },
  address : { type : Object, required: true },
  tags : { type : Array, required: true },
  description : { type : Array, required: true },
  ownerId : { type : ObjectId, ref:"User", required: true }
}
//<!-- /build -->
);

//<!-- build:remove -->

//register model
mongoose.model('Freelancer', FreelancerSchema);

//<!-- /build -->
