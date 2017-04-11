/** @module users/ClaimRequest
 * The Tag Model
 * Schema:
 * _id           ObjectId                    Unique identifier of the claim
 * user          ObjectId     required       User who made the request
 * Freelancer    ObjectId     required       Claimed freelancer
 * status        Number       optional       Status of the request (0 pending, 1 accepted, 2 refused)
 * photos        Array        required       Photos sent from the freelancer
 * notes         String       optional       Addiitonal notes from the user
 */

'use strict';

var mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

var claimSchema = new mongoose.Schema({
	user: {
		type: ObjectId,
		ref: "User",
		required: true
	},
	freelancer: {
		type: ObjectId,
		ref: "Freelancer",
		required: true
	},
	status: {
		type: String,
		enum: ['Pending', 'Accepted', 'Refused'],
		default: 'Pending'
	},
	photos: {
		type: Array,
		// required: true
		default: ["/uploads/claimRequests/osama.jpg"]
	},
	notes: {
		type: String,
	}
});

mongoose.model('ClaimRequest', claimSchema);
