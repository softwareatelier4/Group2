'use strict';

var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

module.exports.tag = {
	name: 'Tag',
	data: [{
			_id: ObjectId("a00000000000000000000000"),
			name: 'Idraulico',
			freelancer: [
				ObjectId("a0f000000000000000000004"),
			]
		},
		{
			_id: ObjectId("a00000000000000000000001"),
			name: 'Vetraio',
			freelancer: [
				ObjectId("a0f000000000000000000003")
			]
		},
		{
			_id: ObjectId("a00000000000000000000002"),
			name: 'Carpentiere',
			freelancer: [
				ObjectId("a0f000000000000000000003")
			]
		},
		{
			_id: ObjectId("a00000000000000000000003"),
			name: 'Developer',
			freelancer: [
				ObjectId("a0f000000000000000000000"),
				ObjectId("a0f000000000000000000006")
			]
		},
		{
			_id: ObjectId("a00000000000000000000004"),
			name: 'Informatico',
			freelancer: [
				ObjectId("a0f000000000000000000000"),
				ObjectId("a0f000000000000000000006")
			]
		},
		{
			_id: ObjectId("a00000000000000000000005"),
			name: 'Meccanic',
			freelancer: [
				ObjectId("a0f000000000000000000004")
			]
		},
		{
			_id: ObjectId("a00000000000000000000006"),
			name: 'Tecnico',
			freelancer: [
				ObjectId("a0f000000000000000000000"),
				ObjectId("a0f000000000000000000004"),
				ObjectId("a0f000000000000000000006")
			]
		},
		{
			_id: ObjectId("a00000000000000000000007"),
			name: 'Nail Artist',
			freelancer: [
				ObjectId("a0f000000000000000000002")
			]
		},
		{
			_id: ObjectId("a00000000000000000000008"),
			name: 'House Painter',
			freelancer: [
				ObjectId("a0f000000000000000000003"),
				ObjectId("a0f000000000000000000007")
			]
		},
		{
			_id: ObjectId("a00000000000000000000009"),
			name: 'Photographer',
			freelancer: [
				ObjectId("a0f000000000000000000001")
			]
		},
		{
			_id: ObjectId("a00000000000000000000010"),
			name: 'Movie Producer',
			freelancer: []
		},
		{
			_id: ObjectId("a00000000000000000000011"),
			name: 'Beautician',
			freelancer: [
				ObjectId("a0f000000000000000000002")
			]
		}
	]
}
