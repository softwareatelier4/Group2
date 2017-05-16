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
			score: 2,
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
			score: 1,
			user: ObjectId("b00000000000000000000011"),
			freelancer: ObjectId("f00000000000000000000004")
		},
		{
			_id: ObjectId("c00000000000000000000004"),
			title: 'Woooow!',
			date: '2017-01-22T23:58:43.122Z',
			score: 5,
			description: "OMG!!!! I am left speechless!!! This is my first yelp review ever.. because I'm selfish and just like to use yelp but never take the time to actually write a review but after going to this salon, I NEED to write this review! The two ladies at this salon are truly amazing and knowledgeable about hair!!!! I came in with fried, cat like curly hair ball, and i walked out with my silky shiny hair i had before i bleached it (bleached it myself that is) they are incredibly nice and really care about what they do. I normally go to high end salons, but I decided to give this place a try because, honestly, I don't know why, I guess I had a gut feeling, and my gut was dead on right! Don't get me wrong, this place is def high end, just not your normal commercial located salon. but i think it's even better cause it's like the comfort of being at home :)",
			user: ObjectId("b00000000000000000000012"),
			freelancer: ObjectId("f00000000000000000000007")
		},
		{
			_id: ObjectId("c00000000000000000000005"),
			title: 'Susan is a doll!',
			date: '2017-01-22T23:58:43.122Z',
			description: "She is very smart and easy to talk to. She takes directions very well. I had a smoothing treatment done with my ends trimmed & am totally satisfied. She didn't 'whack' off all of my hair because it's easier to deal with like most stylists have done in the past. I highly recommend Susan for all of your hair needs!!",
			score: 5,
			user: ObjectId("b00000000000000000000013"),
			freelancer: ObjectId("f00000000000000000000007")
		},
		{
			_id: ObjectId("c00000000000000000000005"),
			title: 'Good experience',
			date: '2017-01-22T23:58:43.122Z',
			description: "I had a wonderful experience with Susan and will definitely be back. Though the services/products are somewhat pricey, everything is extremely good quality (She has a great selection of hair pieces and styling products) and I had a fun experience that left me feeling beautiful; there's no price I wouldn't pay for the confidence I felt when I left. She was fun, personable and helpful when it came to my style request, plus I immediately felt like I was getting my hair done and chatting with friends; they are non-judgmental about what your hair looks like and strive to make you feel like a celebrity when you leave.",
			score: 4,
			user: ObjectId("b00000000000000000000008"),
			freelancer: ObjectId("f00000000000000000000007")
		},
		{
			_id: ObjectId("c00000000000000000000005"),
			title: 'Worst experience',
			date: '2017-01-22T23:58:43.122Z',
			description: "Susan destroyed my hand!!!!!",
			score: 1,
			photo: [
				'/uploads/test/7ra.jpg'
			],
			user: ObjectId("b00000000000000000000008"),
			freelancer: ObjectId("f00000000000000000000007")
		},
		{
			_id: ObjectId("c00000000000000000000006"),
			title: 'Finally a nice plumber!',
			date: '2017-01-22T23:58:43.122Z',
			description: "Had a great experience with Sarah. She arrived on time and well prepared. However she wasn't an excellent communicator. Very satisfied with the quality of work as well.",
			score: 4,
			user: ObjectId("b00000000000000000000014"),
			freelancer: ObjectId("f00000000000000000000009")
		},
		{
			_id: ObjectId("c00000000000000000000007"),
			title: 'Nothing Special',
			date: '2017-01-22T23:58:43.122Z',
			description: "The work that was done seems to have been well done. Sarah did a so-so job trouble shooting. Expensive for nothing special.  I'll try someone else next time.",
			score: 3,
			user: ObjectId("b00000000000000000000015"),
			freelancer: ObjectId("f00000000000000000000009")
		},
		{
			_id: ObjectId("c00000000000000000000008"),
			title: 'My nails seem to be witches',
			date: '2017-01-22T23:58:43.122Z',
			description: "", //fare da qua!
			score: 1,
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
