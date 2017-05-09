/** @module models/Freelancer
 * The Freelancer Model.
 * Schema:
 * _id            String       required   Unique identifier of the freelancer
 * firstName      String       required   firstName of the freelancer
 * lastName       String       required   lastName of the freelancer
 * workName       String       optional   Name of the freelancer's activity
 * email          String       required   email of the freelancer
 * phone          String       optional   phone number of the freelancer
 * profilePhoto   String       optional   URL of a freelancer's profile photo
 * photos         String[]     optional   Array of URLs (photos of the freelancer's previous works)
 * address        Object       optional   Address of the freelancer's activity
 * tags           Object[]     required   Tags to use in order to find this freelancer (at least 1)
 * description    String       required   Description of a freelancer
 * ownerId        ObjectId     optional   Link this freelancer to a user
 * price 		   Number       optional   Price per hour which takes a freelancer
 */

'use strict';

var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;


var FreelancerSchema = new mongoose.Schema({

	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	workName: {
		type: String,
		default: ""
	},
	email: {
		type: String,
		required: true
	},
	phone: {
		type: String
	},
	profilePhoto: {
		type: String
	},
	photos: {
		type: Array,
		default: []
	},
	address: {
		road: {
			type: String
		},
		number: {
			type: Number
		},
		city: {
			type: String,
			required: true
		},
		cap: {
			type: Number
		},
		lat: {
			type: Number,
			required: true
		},
		long: {
			type: Number,
			required: true
		},
	},
	tags: [{
		type: ObjectId,
		ref: "Tag"
	}],
	description: {
		type: String,
		required: true
	},
	ownerId: {
		type: ObjectId,
		ref: "User"
	},
	score: {
		type: Number,
		min: 0,
		max: 5,
		default: 0
	},
	price: {
		type: Number
	},
	certifications: {
		type: Array,
		default: []
	},
	emergency: {
		type: Boolean,
		required: true
	},
	currentPosition: {
		lat: {
			type: Number
		},
		long: {
			type: Number
		},
	},
	active: {
		type: Boolean,
		default: 0
	}
});



//register model
mongoose.model('Freelancer', FreelancerSchema);
