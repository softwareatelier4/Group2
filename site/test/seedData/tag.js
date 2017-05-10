'use strict';

var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

module.exports.tag = {
	name: 'Tag',
	data: [{
			_id: ObjectId("a00000000000000000000000"),
			name: 'WordPress',
			freelancer: [
				ObjectId("f000000000000000000000"),
			]
		},
		{
			_id: ObjectId("a00000000000000000000001"),
			name: 'HTML',
			freelancer: [
				ObjectId("f000000000000000000000"),
				ObjectId("f000000000000000000002")
			]
		},
		{
			_id: ObjectId("a00000000000000000000002"),
			name: 'BigCommerce',
			freelancer: [
				ObjectId("f000000000000000000000")
			]
		},
		{
			_id: ObjectId("a00000000000000000000003"),
			name: 'Logo Design',
			freelancer: [
				ObjectId("f000000000000000000001")
			]
		},
		{
			_id: ObjectId("a00000000000000000000004"),
			name: 'Javascript',
			freelancer: [
				ObjectId("f000000000000000000000"),
				ObjectId("f000000000000000000002")
			]
		},
		{
			_id: ObjectId("a00000000000000000000005"),
			name: 'Adobe Photoshop',
			freelancer: [
				ObjectId("f000000000000000000001")
			]
		},
		{
			_id: ObjectId("a00000000000000000000006"),
			name: 'UI Design',
			freelancer: [
				ObjectId("f000000000000000000001")
			]
		},
		{
			_id: ObjectId("a00000000000000000000007"),
			name: 'Web Design',
			freelancer: [
				ObjectId("f000000000000000000001")
			]
		},
		{
			_id: ObjectId("a00000000000000000000008"),
			name: 'Database',
			freelancer: [
				ObjectId("f000000000000000000002")
			]
		},
		{
			_id: ObjectId("a00000000000000000000009"),
			name: 'Idraulic',
			freelancer: [
				ObjectId("f000000000000000000003")
			]
		},
		{
			_id: ObjectId("a00000000000000000000010"),
			name: 'Autocad',
			freelancer: [
				ObjectId("f000000000000000000003")
			]
		},
		// {
		// 	_id: ObjectId("a00000000000000000000011"),
		// 	name: '',
		// 	freelancer: []
		// },
		// {
		// 	_id: ObjectId("a00000000000000000000012"),
		// 	name: '',
		// 	freelancer: []
		// },
		// {
		// 	_id: ObjectId("a00000000000000000000013"),
		// 	name: '',
		// 	freelancer: []
		// },
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
		// }
	]
}
