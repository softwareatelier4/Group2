'use strict';

var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

module.exports.tag = {
	name: 'Tag',
	data: [{
			_id: ObjectId("a00000000000000000000000"),
			name: 'WordPress',
			freelancer: [
				ObjectId("f00000000000000000000000"),
			]
		},
		{
			_id: ObjectId("a00000000000000000000001"),
			name: 'HTML',
			freelancer: [
				ObjectId("f00000000000000000000000"),
				ObjectId("f00000000000000000000002")
			]
		},
		{
			_id: ObjectId("a00000000000000000000002"),
			name: 'BigCommerce',
			freelancer: [
				ObjectId("f00000000000000000000000")
			]
		},
		{
			_id: ObjectId("a00000000000000000000003"),
			name: 'Logo Design',
			freelancer: [
				ObjectId("f00000000000000000000001")
			]
		},
		{
			_id: ObjectId("a00000000000000000000004"),
			name: 'Javascript',
			freelancer: [
				ObjectId("f00000000000000000000000"),
				ObjectId("f00000000000000000000002")
			]
		},
		{
			_id: ObjectId("a00000000000000000000005"),
			name: 'Adobe Photoshop',
			freelancer: [
				ObjectId("f00000000000000000000001"),
				ObjectId("f00000000000000000000004")
			]
		},
		{
			_id: ObjectId("a00000000000000000000006"),
			name: 'UI Design',
			freelancer: [
				ObjectId("f00000000000000000000001")
			]
		},
		{
			_id: ObjectId("a00000000000000000000007"),
			name: 'Web Design',
			freelancer: [
				ObjectId("f00000000000000000000001")
			]
		},
		{
			_id: ObjectId("a00000000000000000000008"),
			name: 'Database',
			freelancer: [
				ObjectId("f00000000000000000000002")
			]
		},
		// {
		// 	_id: ObjectId("a00000000000000000000009"),
		// 	name: 'Idraulic',
		// 	freelancer: [
		// 		ObjectId("f00000000000000000000003")
		// 	]
		// },
		{
			_id: ObjectId("a00000000000000000000010"),
			name: 'Autocad',
			freelancer: [
				ObjectId("f00000000000000000000003"),
				ObjectId("f00000000000000000000004")
			]
		},
		{
			_id: ObjectId("a00000000000000000000011"),
			name: 'Architect',
			freelancer: [ObjectId("f00000000000000000000004")]
		},
		{
			_id: ObjectId("a00000000000000000000012"),
			name: 'Design',
			freelancer: [
				ObjectId("f00000000000000000000004"),
			]
		},
		{
			_id: ObjectId("a00000000000000000000013"),
			name: 'Pediatrician',
			freelancer: [ObjectId("f00000000000000000000005"), ]
		},
		// {
		// 	_id: ObjectId("a00000000000000000000014"),
		// 	name: '',
		// 	freelancer: []
		// },
		// {
		// 	_id: ObjectId("a00000000000000000000015"),
		// 	name: '',
		// 	freelancer: []
		// },
		// {
		// 	_id: ObjectId("a00000000000000000000016"),
		// 	name: '',
		// 	freelancer: []
		// },
		// {
		// 	_id: ObjectId("a00000000000000000000017"),
		// 	name: '',
		// 	freelancer: []
		// },
		// {
		// 	_id: ObjectId("a00000000000000000000018"),
		// 	name: '',
		// 	freelancer: []
		// },
		// {
		// 	_id: ObjectId("a00000000000000000000019"),
		// 	name: '',
		// 	freelancer: []
		// },
		// {
		// 	_id: ObjectId("a00000000000000000000020"),
		// 	name: '',
		// 	freelancer: []
		// },
		// {
		// 	_id: ObjectId("a00000000000000000000021"),
		// 	name: '',
		// 	freelancer: []
		// },
		// {
		// 	_id: ObjectId("a00000000000000000000022"),
		// 	name: '',
		// 	freelancer: []
		// },
		// {
		// 	_id: ObjectId("a00000000000000000000023"),
		// 	name: '',
		// 	freelancer: []
		// },
		// {
		// 	_id: ObjectId("a00000000000000000000024"),
		// 	name: '',
		// 	freelancer: []
		// },
		// {
		// 	_id: ObjectId("a00000000000000000000025"),
		// 	name: '',
		// 	freelancer: []
		// },
		// {
		// 	_id: ObjectId("a00000000000000000000026"),
		// 	name: '',
		// 	freelancer: []
		// },
		// {
		// 	_id: ObjectId("a00000000000000000000027"),
		// 	name: '',
		// 	freelancer: []
		// },
		// {
		// 	_id: ObjectId("a00000000000000000000028"),
		// 	name: '',
		// 	freelancer: []
		// },
		// {
		// 	_id: ObjectId("a00000000000000000000029"),
		// 	name: '',
		// 	freelancer: []
		// },
		// {
		// 	_id: ObjectId("a00000000000000000000030"),
		// 	name: '',
		// 	freelancer: []
		// },
		// {
		// 	_id: ObjectId("a00000000000000000000031"),
		// 	name: '',
		// 	freelancer: []
		// },
		{
			_id: ObjectId("a00000000000000000000030"),
			name: 'C#',
			freelancer: [
				ObjectId("f00000000000000000000010"),
				ObjectId("f00000000000000000000002"),
			]
		},
		{
			_id: ObjectId("a00000000000000000000031"),
			name: 'Windows Presentation Foundation (WPF)',
			freelancer: [
				ObjectId("f00000000000000000000010")
			]
		},
		{
			_id: ObjectId("a00000000000000000000032"),
			name: 'Graphic Designer',
			freelancer: [
				ObjectId("f00000000000000000000010"),
				ObjectId("f00000000000000000000000"),
			]
		},
		{
			_id: ObjectId("a00000000000000000000033"),
			name: 'Nail',
			freelancer: [
				ObjectId("f00000000000000000000011"),
				ObjectId("f00000000000000000000012"),
				ObjectId("f00000000000000000000013")
			]
		},
		{
			_id: ObjectId("a00000000000000000000034"),
			name: 'Nail Artist',
			freelancer: [
				ObjectId("f00000000000000000000011"),
				ObjectId("f00000000000000000000012"),
				ObjectId("f00000000000000000000013")
			]
		},
		{
			_id: ObjectId("a00000000000000000000035"),
			name: 'Beautician',
			freelancer: [
				ObjectId("f00000000000000000000012"),
				ObjectId("f00000000000000000000013")
			]
		},
		{
			_id: ObjectId("a00000000000000000000036"),
			name: 'Masseur',
			freelancer: [
				ObjectId("f00000000000000000000015")
			]
		},
		{
			_id: ObjectId("a00000000000000000000037"),
			name: 'Hairstylist',
			freelancer: [
				ObjectId("f00000000000000000000015")
			]
		},
		{
			_id: ObjectId("a00000000000000000000038"),
			name: 'Plumber',
			freelancer: [
				ObjectId("f00000000000000000000014"),
				ObjectId("f00000000000000000000016"),
				ObjectId("f00000000000000000000017")
			]
		},
		{
			_id: ObjectId("a00000000000000000000039"),
			name: 'Arts & Crafts',
			freelancer: [
				ObjectId("f00000000000000000000014"),
				ObjectId("f00000000000000000000016"),
				ObjectId("f00000000000000000000017")
			]
		},
		{
			_id: ObjectId("a00000000000000000000040"),
			name: 'Photographer',
			freelancer: [
				ObjectId("f00000000000000000000018"),
				ObjectId("f00000000000000000000019"),
				ObjectId("f00000000000000000000020"),
				ObjectId("f00000000000000000000021")
			]
		},
		{
			_id: ObjectId("a00000000000000000000041"),
			name: 'Photo',
			freelancer: [
				ObjectId("f00000000000000000000018"),
				ObjectId("f00000000000000000000019"),
				ObjectId("f00000000000000000000020"),
				ObjectId("f00000000000000000000021")
			]
		},
		{
			_id: ObjectId("a00000000000000000000042"),
			name: 'Portraits',
			freelancer: [
				ObjectId("f00000000000000000000018"),
				ObjectId("f00000000000000000000021")
			]
		},
		{
			_id: ObjectId("a00000000000000000000043"),
			name: 'Landscapes',
			freelancer: [
				ObjectId("f00000000000000000000019"),
				ObjectId("f00000000000000000000021")
			]
		},

	]
}
