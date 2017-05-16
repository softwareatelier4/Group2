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
			user: ObjectId("b00000000000000000000008"),
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
			user: ObjectId("b00000000000000000000009"),
			freelancer: ObjectId("f00000000000000000000000")
		},
		{
			_id: ObjectId("c00000000000000000000002"),
			title: 'Amazing Interior Designer!',
			date: '2017-01-22T23:58:43.122Z',
			description: "You're not going to find an interior designer with better creativity and problem solving skills than Samantha!",
			score: 5,
			photo: [
				'/uploads/test/4ra.jpg',
				'/uploads/test/4rb.jpg',
				'/uploads/test/4rc.jpg',
				'/uploads/test/4rd.jpg',
				'/uploads/test/4re.jpg',
				'/uploads/test/4rf.jpg'
			],
			user: ObjectId("b00000000000000000000010"),
			freelancer: ObjectId("f00000000000000000000004")
		},
		{
			_id: ObjectId("c00000000000000000000003"),
			title: 'Negative experience.',
			date: '2017-01-22T23:58:43.122Z',
			description: "This is my first time writing a review, but feel it is important to help those thinking of contacting Miss Scotti. We had a very negative experience with Samantha.  The whole process took way longer than anticipated (3 months for 2 rooms - really one large room), and required us to provide extensive, daily. The process is truly laborious, overly expensive, and ultimately added very little value (I sent in tons of inspiration photos and found myself instructing the designer and finding and picking out my own items anyway. She didn't even make recommendations on what looked good together.  I really just did it all myself). It really delayed us instead of sped us up.  We felt we had bad customer service, and got very little to no value from the work. Complete waste of money!",
			score: 0,
			user: ObjectId("b00000000000000000000011"),
			freelancer: ObjectId("f00000000000000000000004")
		},
		{
			_id: ObjectId("c00000000000000000000004"), //fare da qui
			title: 'Great Designer!',
			date: '2017-01-22T23:58:43.122Z',
			description: "Perfect worker! Nice design made in few weeks. I really recommend him to everyone that wants a modern site paying the right!",
			score: 5,
			user: ObjectId("b00000000000000000000012"),
			freelancer: ObjectId("f00000000000000000000007")
		},
		{
			_id: ObjectId("c00000000000000000000005"),
			title: 'Great Designer!',
			date: '2017-01-22T23:58:43.122Z',
			description: "Perfect worker! Nice design made in few weeks. I really recommend him to everyone that wants a modern site paying the right!",
			score: 5,
			user: ObjectId("b00000000000000000000013"),
			freelancer: ObjectId("f00000000000000000000007")
		},
		{
			_id: ObjectId("c00000000000000000000006"),
			title: 'Great Designer!',
			date: '2017-01-22T23:58:43.122Z',
			description: "Perfect worker! Nice design made in few weeks. I really recommend him to everyone that wants a modern site paying the right!",
			score: 5,
			user: ObjectId("b00000000000000000000014"),
			freelancer: ObjectId("f00000000000000000000009")
		},
		{
			_id: ObjectId("c00000000000000000000007"),
			title: 'Great Designer!',
			date: '2017-01-22T23:58:43.122Z',
			description: "Perfect worker! Nice design made in few weeks. I really recommend him to everyone that wants a modern site paying the right!",
			score: 5,
			user: ObjectId("b00000000000000000000015"),
			freelancer: ObjectId("f00000000000000000000009")
		},
		{
			_id: ObjectId("c00000000000000000000008"),
			title: 'Great Designer!',
			date: '2017-01-22T23:58:43.122Z',
			description: "Perfect worker! Nice design made in few weeks. I really recommend him to everyone that wants a modern site paying the right!",
			score: 5,
			user: ObjectId("b00000000000000000000016"),
			freelancer: ObjectId("f00000000000000000000011")
		},
		{
			_id: ObjectId("c00000000000000000000009"),
			title: 'Great Designer!',
			date: '2017-01-22T23:58:43.122Z',
			description: "Perfect worker! Nice design made in few weeks. I really recommend him to everyone that wants a modern site paying the right!",
			score: 5,
			user: ObjectId("b00000000000000000000017"),
			freelancer: ObjectId("f00000000000000000000011")
		},
		{
			_id: ObjectId("c00000000000000000000010"),
			title: 'Great Designer!',
			date: '2017-01-22T23:58:43.122Z',
			description: "Perfect worker! Nice design made in few weeks. I really recommend him to everyone that wants a modern site paying the right!",
			score: 5,
			user: ObjectId("b00000000000000000000008"),
			freelancer: ObjectId("f00000000000000000000021")
		},
		{
			_id: ObjectId("c00000000000000000000011"),
			title: 'Great Designer!',
			date: '2017-01-22T23:58:43.122Z',
			description: "Perfect worker! Nice design made in few weeks. I really recommend him to everyone that wants a modern site paying the right!",
			score: 5,
			user: ObjectId("b00000000000000000000009"),
			freelancer: ObjectId("f00000000000000000000021")
		},
		{
			_id: ObjectId("c00000000000000000000012"),
			title: 'Great Designer!',
			date: '2017-01-22T23:58:43.122Z',
			description: "Perfect worker! Nice design made in few weeks. I really recommend him to everyone that wants a modern site paying the right!",
			score: 5,
			user: ObjectId("b00000000000000000000010"),
			freelancer: ObjectId("f00000000000000000000025")
		},
		{
			_id: ObjectId("c00000000000000000000013"),
			title: 'Great Designer!',
			date: '2017-01-22T23:58:43.122Z',
			description: "Perfect worker! Nice design made in few weeks. I really recommend him to everyone that wants a modern site paying the right!",
			score: 5,
			user: ObjectId("b00000000000000000000011"),
			freelancer: ObjectId("f00000000000000000000025")
		},
		{
			_id: ObjectId("c00000000000000000000014"),
			title: 'Great Designer!',
			date: '2017-01-22T23:58:43.122Z',
			description: "Perfect worker! Nice design made in few weeks. I really recommend him to everyone that wants a modern site paying the right!",
			score: 5,
			user: ObjectId("b00000000000000000000012"),
			freelancer: ObjectId("f00000000000000000000026")
		},
		{
			_id: ObjectId("c00000000000000000000015"),
			title: 'Great Designer!',
			date: '2017-01-22T23:58:43.122Z',
			description: "Perfect worker! Nice design made in few weeks. I really recommend him to everyone that wants a modern site paying the right!",
			score: 5,
			user: ObjectId("b00000000000000000000013"),
			freelancer: ObjectId("f00000000000000000000026")
		},
		{
			_id: ObjectId("c00000000000000000000016"),
			title: 'Great Designer!',
			date: '2017-01-22T23:58:43.122Z',
			description: "Perfect worker! Nice design made in few weeks. I really recommend him to everyone that wants a modern site paying the right!",
			score: 5,
			user: ObjectId("b00000000000000000000014"),
			freelancer: ObjectId("f00000000000000000000029")
		},
		{
			_id: ObjectId("c00000000000000000000017"),
			title: 'Great Designer!',
			date: '2017-01-22T23:58:43.122Z',
			description: "Perfect worker! Nice design made in few weeks. I really recommend him to everyone that wants a modern site paying the right!",
			score: 5,
			user: ObjectId("b00000000000000000000015"),
			freelancer: ObjectId("f00000000000000000000029")
		},
		{
			_id: ObjectId("c00000000000000000000018"),
			title: 'Great Designer!',
			date: '2017-01-22T23:58:43.122Z',
			description: "Perfect worker! Nice design made in few weeks. I really recommend him to everyone that wants a modern site paying the right!",
			score: 5,
			user: ObjectId("b00000000000000000000016"),
			freelancer: ObjectId("f00000000000000000000037")
		},
		{
			_id: ObjectId("c00000000000000000000019"),
			title: 'Great Designer!',
			date: '2017-01-22T23:58:43.122Z',
			description: "Perfect worker! Nice design made in few weeks. I really recommend him to everyone that wants a modern site paying the right!",
			score: 5,
			user: ObjectId("b00000000000000000000017"),
			freelancer: ObjectId("f00000000000000000000037")
		},
		{
			_id: ObjectId("c00000000000000000000020"),
			title: 'Great Designer!',
			date: '2017-01-22T23:58:43.122Z',
			description: "Perfect worker! Nice design made in few weeks. I really recommend him to everyone that wants a modern site paying the right!",
			score: 5,
			user: ObjectId("b00000000000000000000008"),
			freelancer: ObjectId("f00000000000000000000040")
		},
		{
			_id: ObjectId("c00000000000000000000021"),
			title: 'Great Designer!',
			date: '2017-01-22T23:58:43.122Z',
			description: "Perfect worker! Nice design made in few weeks. I really recommend him to everyone that wants a modern site paying the right!",
			score: 5,
			user: ObjectId("b00000000000000000000009"),
			freelancer: ObjectId("f00000000000000000000040")
		},
		{
			_id: ObjectId("c00000000000000000000022"),
			title: 'Great Designer!',
			date: '2017-01-22T23:58:43.122Z',
			description: "Perfect worker! Nice design made in few weeks. I really recommend him to everyone that wants a modern site paying the right!",
			score: 5,
			user: ObjectId("b00000000000000000000010"),
			freelancer: ObjectId("f00000000000000000000043")
		},
		{
			_id: ObjectId("c00000000000000000000023"),
			title: 'Great Designer!',
			date: '2017-01-22T23:58:43.122Z',
			description: "Perfect worker! Nice design made in few weeks. I really recommend him to everyone that wants a modern site paying the right!",
			score: 5,
			user: ObjectId("b00000000000000000000011"),
			freelancer: ObjectId("f00000000000000000000043")
		},
		{
			_id: ObjectId("c00000000000000000000024"),
			title: 'Great Designer!',
			date: '2017-01-22T23:58:43.122Z',
			description: "Perfect worker! Nice design made in few weeks. I really recommend him to everyone that wants a modern site paying the right!",
			score: 5,
			user: ObjectId("b00000000000000000000012"),
			freelancer: ObjectId("f00000000000000000000046")
		},
		{
			_id: ObjectId("c00000000000000000000025"),
			title: 'Great Designer!',
			date: '2017-01-22T23:58:43.122Z',
			description: "Perfect worker! Nice design made in few weeks. I really recommend him to everyone that wants a modern site paying the right!",
			score: 5,
			user: ObjectId("b00000000000000000000013"),
			freelancer: ObjectId("f00000000000000000000046")
		},
		{
			_id: ObjectId("c00000000000000000000026"),
			title: 'Great Designer!',
			date: '2017-01-22T23:58:43.122Z',
			description: "Perfect worker! Nice design made in few weeks. I really recommend him to everyone that wants a modern site paying the right!",
			score: 5,
			user: ObjectId("b00000000000000000000014"),
			freelancer: ObjectId("f00000000000000000000052")
		},
		{
			_id: ObjectId("c00000000000000000000027"),
			title: 'Great Designer!',
			date: '2017-01-22T23:58:43.122Z',
			description: "Perfect worker! Nice design made in few weeks. I really recommend him to everyone that wants a modern site paying the right!",
			score: 5,
			user: ObjectId("b00000000000000000000015"),
			freelancer: ObjectId("f00000000000000000000052")
		},
	]
}
