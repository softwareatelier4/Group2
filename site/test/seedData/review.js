'use strict';

var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

module.exports.review = {
	name: 'Review',
	data: [{
			_id: ObjectId("c00000000000000000000000"),
			title: 'Great Designer!',
			date: '2017-01-22T23:58:43.122Z',
			description: "Perfect worker! Nice design made in few weeks. I really recommend him to everyone that wants a modern site paying the right!",
			score: 5,
			user: ObjectId("b00000000000000000000000"), //DA SETTARE
			freelancer: ObjectId("f00000000000000000000000")
		},
		{
			_id: ObjectId("c00000000000000000000001"),
			title: 'Horrible experience',
			date: '2016-01-13T23:58:43.122Z',
			description: "I contacted Mr.Suzuki on September 2016, after few weeks to decide the struct of the website (weeks that I paid) he contacted me to ask an extra. He finished the website after 4 months with a horrible result. It was the worst experience of my life.",
			score: 1,
			photo: [
				'/uploads/test/1ra.png',
			],
			user: ObjectId("b00000000000000000000001"), //DA SETTARE
			freelancer: ObjectId("f00000000000000000000000")
		},
		{
			_id: ObjectId("c00000000000000000000002"),
			title: 'Great Designer!',
			date: '2017-01-22T23:58:43.122Z',
			description: "Perfect worker! Nice design made in few weeks. I really recommend him to everyone that wants a modern site paying the right!",
			score: 5,
			user: ObjectId("b00000000000000000000000"), //DA SETTARE
			freelancer: ObjectId("f00000000000000000000004")
		},
		{
			_id: ObjectId("c00000000000000000000003"),
			title: 'Great Designer!',
			date: '2017-01-22T23:58:43.122Z',
			description: "Perfect worker! Nice design made in few weeks. I really recommend him to everyone that wants a modern site paying the right!",
			score: 5,
			user: ObjectId("b00000000000000000000000"), //DA SETTARE
			freelancer: ObjectId("f00000000000000000000004")
		},
		{
			_id: ObjectId("c00000000000000000000004"),
			title: 'Great Designer!',
			date: '2017-01-22T23:58:43.122Z',
			description: "Perfect worker! Nice design made in few weeks. I really recommend him to everyone that wants a modern site paying the right!",
			score: 5,
			user: ObjectId("b00000000000000000000000"), //DA SETTARE
			freelancer: ObjectId("f00000000000000000000007")
		},
		{
			_id: ObjectId("c00000000000000000000005"),
			title: 'Great Designer!',
			date: '2017-01-22T23:58:43.122Z',
			description: "Perfect worker! Nice design made in few weeks. I really recommend him to everyone that wants a modern site paying the right!",
			score: 5,
			user: ObjectId("b00000000000000000000000"), //DA SETTARE
			freelancer: ObjectId("f00000000000000000000007")
		},
		{
			_id: ObjectId("c00000000000000000000006"),
			title: 'Great Designer!',
			date: '2017-01-22T23:58:43.122Z',
			description: "Perfect worker! Nice design made in few weeks. I really recommend him to everyone that wants a modern site paying the right!",
			score: 5,
			user: ObjectId("b00000000000000000000000"), //DA SETTARE
			freelancer: ObjectId("f00000000000000000000009")
		},
		{
			_id: ObjectId("c00000000000000000000007"),
			title: 'Great Designer!',
			date: '2017-01-22T23:58:43.122Z',
			description: "Perfect worker! Nice design made in few weeks. I really recommend him to everyone that wants a modern site paying the right!",
			score: 5,
			user: ObjectId("b00000000000000000000000"), //DA SETTARE
			freelancer: ObjectId("f00000000000000000000009")
		},
		{
			_id: ObjectId("c00000000000000000000008"),
			title: 'Great Designer!',
			date: '2017-01-22T23:58:43.122Z',
			description: "Perfect worker! Nice design made in few weeks. I really recommend him to everyone that wants a modern site paying the right!",
			score: 5,
			user: ObjectId("b00000000000000000000000"), //DA SETTARE
			freelancer: ObjectId("f00000000000000000000011")
		},
		{
			_id: ObjectId("c00000000000000000000009"),
			title: 'Great Designer!',
			date: '2017-01-22T23:58:43.122Z',
			description: "Perfect worker! Nice design made in few weeks. I really recommend him to everyone that wants a modern site paying the right!",
			score: 5,
			user: ObjectId("b00000000000000000000000"), //DA SETTARE
			freelancer: ObjectId("f00000000000000000000011")
		},
		{
			_id: ObjectId("c00000000000000000000010"),
			title: 'Great Designer!',
			date: '2017-01-22T23:58:43.122Z',
			description: "Perfect worker! Nice design made in few weeks. I really recommend him to everyone that wants a modern site paying the right!",
			score: 5,
			user: ObjectId("b00000000000000000000000"), //DA SETTARE
			freelancer: ObjectId("f00000000000000000000021")
		},
		{
			_id: ObjectId("c00000000000000000000011"),
			title: 'Great Designer!',
			date: '2017-01-22T23:58:43.122Z',
			description: "Perfect worker! Nice design made in few weeks. I really recommend him to everyone that wants a modern site paying the right!",
			score: 5,
			user: ObjectId("b00000000000000000000000"), //DA SETTARE
			freelancer: ObjectId("f00000000000000000000021")
		},
		{
			_id: ObjectId("c00000000000000000000012"),
			title: 'Great Designer!',
			date: '2017-01-22T23:58:43.122Z',
			description: "Perfect worker! Nice design made in few weeks. I really recommend him to everyone that wants a modern site paying the right!",
			score: 5,
			user: ObjectId("b00000000000000000000000"), //DA SETTARE
			freelancer: ObjectId("f00000000000000000000025")
		},
		{
			_id: ObjectId("c00000000000000000000013"),
			title: 'Great Designer!',
			date: '2017-01-22T23:58:43.122Z',
			description: "Perfect worker! Nice design made in few weeks. I really recommend him to everyone that wants a modern site paying the right!",
			score: 5,
			user: ObjectId("b00000000000000000000000"), //DA SETTARE
			freelancer: ObjectId("f00000000000000000000025")
		},
		{
			_id: ObjectId("c00000000000000000000014"),
			title: 'Great Designer!',
			date: '2017-01-22T23:58:43.122Z',
			description: "Perfect worker! Nice design made in few weeks. I really recommend him to everyone that wants a modern site paying the right!",
			score: 5,
			user: ObjectId("b00000000000000000000000"), //DA SETTARE
			freelancer: ObjectId("f00000000000000000000026")
		},
		{
			_id: ObjectId("c00000000000000000000015"),
			title: 'Great Designer!',
			date: '2017-01-22T23:58:43.122Z',
			description: "Perfect worker! Nice design made in few weeks. I really recommend him to everyone that wants a modern site paying the right!",
			score: 5,
			user: ObjectId("b00000000000000000000000"), //DA SETTARE
			freelancer: ObjectId("f00000000000000000000026")
		},
		{
			_id: ObjectId("c00000000000000000000016"),
			title: 'Great Designer!',
			date: '2017-01-22T23:58:43.122Z',
			description: "Perfect worker! Nice design made in few weeks. I really recommend him to everyone that wants a modern site paying the right!",
			score: 5,
			user: ObjectId("b00000000000000000000000"), //DA SETTARE
			freelancer: ObjectId("f00000000000000000000029")
		},
		{
			_id: ObjectId("c00000000000000000000017"),
			title: 'Great Designer!',
			date: '2017-01-22T23:58:43.122Z',
			description: "Perfect worker! Nice design made in few weeks. I really recommend him to everyone that wants a modern site paying the right!",
			score: 5,
			user: ObjectId("b00000000000000000000000"), //DA SETTARE
			freelancer: ObjectId("f00000000000000000000029")
		},
		{
			_id: ObjectId("c00000000000000000000018"),
			title: 'Great Designer!',
			date: '2017-01-22T23:58:43.122Z',
			description: "Perfect worker! Nice design made in few weeks. I really recommend him to everyone that wants a modern site paying the right!",
			score: 5,
			user: ObjectId("b00000000000000000000000"), //DA SETTARE
			freelancer: ObjectId("f00000000000000000000037")
		},
		{
			_id: ObjectId("c00000000000000000000019"),
			title: 'Great Designer!',
			date: '2017-01-22T23:58:43.122Z',
			description: "Perfect worker! Nice design made in few weeks. I really recommend him to everyone that wants a modern site paying the right!",
			score: 5,
			user: ObjectId("b00000000000000000000000"), //DA SETTARE
			freelancer: ObjectId("f00000000000000000000037")
		},
		{
			_id: ObjectId("c00000000000000000000020"),
			title: 'Great Designer!',
			date: '2017-01-22T23:58:43.122Z',
			description: "Perfect worker! Nice design made in few weeks. I really recommend him to everyone that wants a modern site paying the right!",
			score: 5,
			user: ObjectId("b00000000000000000000000"), //DA SETTARE
			freelancer: ObjectId("f00000000000000000000040")
		},
		{
			_id: ObjectId("c00000000000000000000021"),
			title: 'Great Designer!',
			date: '2017-01-22T23:58:43.122Z',
			description: "Perfect worker! Nice design made in few weeks. I really recommend him to everyone that wants a modern site paying the right!",
			score: 5,
			user: ObjectId("b00000000000000000000000"), //DA SETTARE
			freelancer: ObjectId("f00000000000000000000040")
		},
		{
			_id: ObjectId("c00000000000000000000022"),
			title: 'Great Designer!',
			date: '2017-01-22T23:58:43.122Z',
			description: "Perfect worker! Nice design made in few weeks. I really recommend him to everyone that wants a modern site paying the right!",
			score: 5,
			user: ObjectId("b00000000000000000000000"), //DA SETTARE
			freelancer: ObjectId("f00000000000000000000043")
		},
		{
			_id: ObjectId("c00000000000000000000023"),
			title: 'Great Designer!',
			date: '2017-01-22T23:58:43.122Z',
			description: "Perfect worker! Nice design made in few weeks. I really recommend him to everyone that wants a modern site paying the right!",
			score: 5,
			user: ObjectId("b00000000000000000000000"), //DA SETTARE
			freelancer: ObjectId("f00000000000000000000043")
		},
		{
			_id: ObjectId("c00000000000000000000024"),
			title: 'Great Designer!',
			date: '2017-01-22T23:58:43.122Z',
			description: "Perfect worker! Nice design made in few weeks. I really recommend him to everyone that wants a modern site paying the right!",
			score: 5,
			user: ObjectId("b00000000000000000000000"), //DA SETTARE
			freelancer: ObjectId("f00000000000000000000046")
		},
		{
			_id: ObjectId("c00000000000000000000025"),
			title: 'Great Designer!',
			date: '2017-01-22T23:58:43.122Z',
			description: "Perfect worker! Nice design made in few weeks. I really recommend him to everyone that wants a modern site paying the right!",
			score: 5,
			user: ObjectId("b00000000000000000000000"), //DA SETTARE
			freelancer: ObjectId("f00000000000000000000046")
		},
		{
			_id: ObjectId("c00000000000000000000026"),
			title: 'Great Designer!',
			date: '2017-01-22T23:58:43.122Z',
			description: "Perfect worker! Nice design made in few weeks. I really recommend him to everyone that wants a modern site paying the right!",
			score: 5,
			user: ObjectId("b00000000000000000000000"), //DA SETTARE
			freelancer: ObjectId("f00000000000000000000052")
		},
		{
			_id: ObjectId("c00000000000000000000027"),
			title: 'Great Designer!',
			date: '2017-01-22T23:58:43.122Z',
			description: "Perfect worker! Nice design made in few weeks. I really recommend him to everyone that wants a modern site paying the right!",
			score: 5,
			user: ObjectId("b00000000000000000000000"), //DA SETTARE
			freelancer: ObjectId("f00000000000000000000052")
		},
	]
}
