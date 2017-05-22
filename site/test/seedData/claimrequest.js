'use strict';

var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

module.exports.claimrequest = {
	name: 'ClaimRequest',
	data: [{
			_id: ObjectId("d00000000000000000000000"),
			user: ObjectId("b00000000000000000000012"),
			freelancer: ObjectId("f00000000000000000000026"),
			identitycard: "/uploads/test/claim00.jpg",
			notes: 'Hi, I found this profile and I think it is mine. Accept my request, please.',
			status: 'Pending'
		},
		{
			_id: ObjectId("d00000000000000000000001"),
			user: ObjectId("b00000000000000000000010"),
			freelancer: ObjectId("f00000000000000000000004"),
			identitycard: "/uploads/test/claim01.jpg",
			notes: 'Hi! I want to take this profile because it is mine. I would like my request to be accepted! Samantha',
			status: 'Accepted'
		},
		{
			_id: ObjectId("d00000000000000000000002"),
			user: ObjectId("b00000000000000000000013"),
			freelancer: ObjectId("f00000000000000000000026"),
			identitycard: "/uploads/test/claim02.jpg",
			notes: 'This is my profile! Please accept my request because I want to manage it.',
			status: 'Pending'
		},
	]
}
