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
				ObjectId("f00000000000000000000004"),
				ObjectId("f00000000000000000000046")
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
				ObjectId("f00000000000000000000001"),
				ObjectId("f00000000000000000000048")
			]
		},
		{
			_id: ObjectId("a00000000000000000000008"),
			name: 'Database',
			freelancer: [
				ObjectId("f00000000000000000000002")
			]
		},
		{
			_id: ObjectId("a00000000000000000000009"),
			name: 'Handyman',
			freelancer: [
				ObjectId("f00000000000000000000008"),
				ObjectId("f00000000000000000000009"),
				ObjectId("f00000000000000000000039")
			]
		},
		{
			_id: ObjectId("a00000000000000000000010"),
			name: 'Autocad',
			freelancer: [
				ObjectId("f00000000000000000000003"),
				ObjectId("f00000000000000000000044"),
				ObjectId("f00000000000000000000004"),
				ObjectId("f00000000000000000000041"),
				ObjectId("f00000000000000000000042"),
				ObjectId("f00000000000000000000043"),
				ObjectId("f00000000000000000000045")
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
				ObjectId("f00000000000000000000046"),
				ObjectId("f00000000000000000000047"),
				ObjectId("f00000000000000000000048")
			]
		},
		{
			_id: ObjectId("a00000000000000000000013"),
			name: 'Plumbing Engineer',
			freelancer: [ObjectId("f00000000000000000000003"),
				ObjectId("f00000000000000000000039"),
				ObjectId("f00000000000000000000041"),
				ObjectId("f00000000000000000000042"),
				ObjectId("f00000000000000000000043"),
				ObjectId("f00000000000000000000044"),
				ObjectId("f00000000000000000000045")
			]
		},
		{
			_id: ObjectId("a00000000000000000000014"),
			name: 'sink',
			freelancer: [ObjectId("f00000000000000000000040"),
				ObjectId("f00000000000000000000041"),
				ObjectId("f00000000000000000000042"),
				ObjectId("f00000000000000000000043"),
				ObjectId("f00000000000000000000044")
			]
		},
		{
			_id: ObjectId("a00000000000000000000015"),
			name: 'tub',
			freelancer: [ObjectId("f00000000000000000000040"), ObjectId("f00000000000000000000044"), ObjectId("f00000000000000000000041"), ObjectId("f00000000000000000000043")]
		},
		{
			_id: ObjectId("a00000000000000000000016"),
			name: 'shower',
			freelancer: [ObjectId("f00000000000000000000040"), ObjectId("f00000000000000000000042"), ObjectId("f00000000000000000000043")]
		},
		{
			_id: ObjectId("a00000000000000000000017"),
			name: 'Carpenter',
			freelancer: [ObjectId("f00000000000000000000044")]
		},
		{
			_id: ObjectId("a00000000000000000000018"),
			name: 'Electrician',
			freelancer: [ObjectId("f00000000000000000000044")]
		},
		{
			_id: ObjectId("a00000000000000000000019"),
			name: 'Packaging Design',
			freelancer: [ObjectId("f00000000000000000000046")]
		},
		{
			_id: ObjectId("a00000000000000000000020"),
			name: 'Digital Photography',
			freelancer: [ObjectId("f00000000000000000000046")]
		},
		{
			_id: ObjectId("a00000000000000000000021"),
			name: 'Illustration',
			freelancer: [ObjectId("f00000000000000000000046")]
		},
		{
			_id: ObjectId("a00000000000000000000022"),
			name: 'Branding',
			freelancer: [ObjectId("f00000000000000000000046")]
		},
		{
			_id: ObjectId("a00000000000000000000023"),
			name: 'Industrial Design',
			freelancer: [ObjectId("f00000000000000000000047")]
		},
		{
			_id: ObjectId("a00000000000000000000024"),
			name: 'Product Development',
			freelancer: [ObjectId("f00000000000000000000047")]
		},
		{
			_id: ObjectId("a00000000000000000000025"),
			name: 'Marketing Research',
			freelancer: [ObjectId("f00000000000000000000047")]
		},
		{
			_id: ObjectId("a00000000000000000000026"),
			name: '3D Rendering',
			freelancer: [ObjectId("f00000000000000000000047"), ObjectId("f00000000000000000000048")]
		},
		{
			_id: ObjectId("a00000000000000000000027"),
			name: 'Sketching',
			freelancer: [ObjectId("f00000000000000000000047")]
		},
		{
			_id: ObjectId("a00000000000000000000028"),
			name: 'Video',
			freelancer: [ObjectId("f00000000000000000000048")]
		},
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
		{
			_id: ObjectId("a00000000000000000000029"),
			name: 'Hair',
			freelancer: [
				ObjectId("f00000000000000000000033"),
				ObjectId("f00000000000000000000036"),
				ObjectId("f00000000000000000000037"),
				ObjectId("f00000000000000000000038"),
			]
		},
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
				ObjectId("f00000000000000000000046")
			]
		},
		{
			_id: ObjectId("a00000000000000000000033"),
			name: 'Nail',
			freelancer: [
				ObjectId("f00000000000000000000011"),
				ObjectId("f00000000000000000000012"),
				ObjectId("f00000000000000000000013"),
				ObjectId("f00000000000000000000006"),
				ObjectId("f00000000000000000000007"),
				ObjectId("f00000000000000000000033"),
				ObjectId("f00000000000000000000034"),
				ObjectId("f00000000000000000000035"),
				ObjectId("f00000000000000000000036"),
				ObjectId("f00000000000000000000037"),
				ObjectId("f00000000000000000000038"),
			]
		},
		{
			_id: ObjectId("a00000000000000000000034"),
			name: 'Nail Artist',
			freelancer: [
				ObjectId("f00000000000000000000011"),
				ObjectId("f00000000000000000000012"),
				ObjectId("f00000000000000000000013"),
				ObjectId("f00000000000000000000005"),
				ObjectId("f00000000000000000000006"),
				ObjectId("f00000000000000000000007"),
				ObjectId("f00000000000000000000034"),
				ObjectId("f00000000000000000000035"),
				ObjectId("f00000000000000000000036"),
				ObjectId("f00000000000000000000037"),
				ObjectId("f00000000000000000000038"),
			]
		},
		{
			_id: ObjectId("a00000000000000000000035"),
			name: 'Beautician',
			freelancer: [
				ObjectId("f00000000000000000000012"),
				ObjectId("f00000000000000000000013"),
				ObjectId("f00000000000000000000005"),
				ObjectId("f00000000000000000000007"),
				ObjectId("f00000000000000000000033"),
				ObjectId("f00000000000000000000034"),
				ObjectId("f00000000000000000000035"),
				ObjectId("f00000000000000000000036"),
				ObjectId("f00000000000000000000037"),
				ObjectId("f00000000000000000000038"),
			]
		},
		{
			_id: ObjectId("a00000000000000000000036"),
			name: 'Masseur',
			freelancer: [
				ObjectId("f00000000000000000000015"),
				ObjectId("f00000000000000000000033"),
				ObjectId("f00000000000000000000037"),
				ObjectId("f00000000000000000000038"),
			]
		},
		{
			_id: ObjectId("a00000000000000000000037"),
			name: 'Hairstylist',
			freelancer: [
				ObjectId("f00000000000000000000015"),
				ObjectId("f00000000000000000000007"),
				ObjectId("f00000000000000000000033")
			]
		},
		{
			_id: ObjectId("a00000000000000000000038"),
			name: 'Plumber',
			freelancer: [
				ObjectId("f00000000000000000000014"),
				ObjectId("f00000000000000000000016"),
				ObjectId("f00000000000000000000017"),
				ObjectId("f00000000000000000000008"),
				ObjectId("f00000000000000000000009"),
				ObjectId("f00000000000000000000039"),
				ObjectId("f00000000000000000000040"),
				ObjectId("f00000000000000000000041"),
				ObjectId("f00000000000000000000042"),
				ObjectId("f00000000000000000000042"),
				ObjectId("f00000000000000000000043"),
				ObjectId("f00000000000000000000044"),
				ObjectId("f00000000000000000000045")
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
				ObjectId("f00000000000000000000021"),
				ObjectId("f00000000000000000000022"),
				ObjectId("f00000000000000000000023"),
				ObjectId("f00000000000000000000024"),
				ObjectId("f00000000000000000000025"),
				ObjectId("f00000000000000000000026"),
				ObjectId("f00000000000000000000027"),
				ObjectId("f00000000000000000000028"),
				ObjectId("f00000000000000000000029"),
				ObjectId("f00000000000000000000030"),
				ObjectId("f00000000000000000000031"),
				ObjectId("f00000000000000000000032"),
			]
		},
		{
			_id: ObjectId("a00000000000000000000041"),
			name: 'Photo',
			freelancer: [
				ObjectId("f00000000000000000000018"),
				ObjectId("f00000000000000000000019"),
				ObjectId("f00000000000000000000020"),
				ObjectId("f00000000000000000000021"),
				ObjectId("f00000000000000000000022"),
				ObjectId("f00000000000000000000023"),
				ObjectId("f00000000000000000000024"),
				ObjectId("f00000000000000000000025"),
				ObjectId("f00000000000000000000026"),
				ObjectId("f00000000000000000000027"),
				ObjectId("f00000000000000000000028"),
				ObjectId("f00000000000000000000029"),
				ObjectId("f00000000000000000000030"),
				ObjectId("f00000000000000000000031"),
				ObjectId("f00000000000000000000032"),
			]
		},
		{
			_id: ObjectId("a00000000000000000000042"),
			name: 'Portraits',
			freelancer: [
				ObjectId("f00000000000000000000018"),
				ObjectId("f00000000000000000000021"),
				ObjectId("f00000000000000000000022"),
				ObjectId("f00000000000000000000025"),
				ObjectId("f00000000000000000000029"),
				ObjectId("f00000000000000000000031"),
			]
		},
		{
			_id: ObjectId("a00000000000000000000043"),
			name: 'Landscapes',
			freelancer: [
				ObjectId("f00000000000000000000019"),
				ObjectId("f00000000000000000000021"),
				ObjectId("f00000000000000000000023"),
				ObjectId("f00000000000000000000025"),
				ObjectId("f00000000000000000000026"),
			]
		},
		{
			_id: ObjectId("a00000000000000000000044"),
			name: 'Weeding photographer',
			freelancer: [
				ObjectId("f00000000000000000000027"),
				ObjectId("f00000000000000000000028"),
				ObjectId("f00000000000000000000029"),
				ObjectId("f00000000000000000000032"),
			]
		},
	]
}
