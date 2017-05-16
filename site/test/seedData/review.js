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
			user: ObjectId("b00000000000000000000017"),
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
			_id: ObjectId("c00000000000000000000031"),
			title: 'Good experience',
			date: '2017-01-22T23:58:43.122Z',
			description: "I had a wonderful experience with Susan and will definitely be back. Though the services/products are somewhat pricey, everything is extremely good quality (She has a great selection of hair pieces and styling products) and I had a fun experience that left me feeling beautiful; there's no price I wouldn't pay for the confidence I felt when I left. She was fun, personable and helpful when it came to my style request, plus I immediately felt like I was getting my hair done and chatting with friends; they are non-judgmental about what your hair looks like and strive to make you feel like a celebrity when you leave.",
			score: 4,
			user: ObjectId("b00000000000000000000008"),
			freelancer: ObjectId("f00000000000000000000007")
		},
		{
			_id: ObjectId("c00000000000000000000032"),
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
			_id: ObjectId("c00000000000000000000028"),
			date: '2017-01-22T23:58:43.122Z',
			score: 2,
			user: ObjectId("b00000000000000000000009"),
			freelancer: ObjectId("f00000000000000000000011")
		},
		{
			_id: ObjectId("c00000000000000000000029"),
			date: '2017-01-22T23:58:43.122Z',
			score: 1,
			user: ObjectId("b00000000000000000000008"),
			freelancer: ObjectId("f00000000000000000000011")
		},
		{
			_id: ObjectId("c00000000000000000000008"),
			title: 'My nails seem to be witches',
			date: '2017-01-22T23:58:43.122Z',
			description: "I have no words! Horrible experience!!!",
			score: 1,
			user: ObjectId("b00000000000000000000016"),
			freelancer: ObjectId("f00000000000000000000011")
		},
		{
			_id: ObjectId("c00000000000000000000030"),
			date: '2017-01-22T23:58:43.122Z',
			score: 3,
			user: ObjectId("b00000000000000000000017"),
			freelancer: ObjectId("f00000000000000000000011")
		},
		{
			_id: ObjectId("c00000000000000000000010"),
			title: 'Perfect experience!',
			date: '2017-01-22T23:58:43.122Z',
			description: "Once you meet Shen, the decision to choose her is easy. She is so much fun and keep your ideas in mind while bringing her own amazing creativity to the table. Everyone who saw our pictures loved them and said she has never seen wedding pictures so full of life. She is very easy to work with and to communicate with. Choosing Shen was one of the best decisions for the wedding I made and one of the funnest!",
			score: 5,
			user: ObjectId("b00000000000000000000008"),
			freelancer: ObjectId("f00000000000000000000021")
		},
		{
			_id: ObjectId("c00000000000000000000011"),
			date: '2017-01-22T23:58:43.122Z',
			score: 4,
			description: "Shen is as badass as her photography! She captured every right moment in every right way. Looking at the photos she did for us makes us want to do it all over again! Shen was professional, fun and kept the entire day super organized. She's amazing!",
			user: ObjectId("b00000000000000000000009"),
			freelancer: ObjectId("f00000000000000000000021")
		},
		{
			_id: ObjectId("c00000000000000000000012"),
			title: 'Great Photographer!',
			date: '2017-01-22T23:58:43.122Z',
			score: 5,
			user: ObjectId("b00000000000000000000010"),
			freelancer: ObjectId("f00000000000000000000025")
		},
		{
			_id: ObjectId("c00000000000000000000013"),
			title: 'Nice experience',
			date: '2017-01-22T23:58:43.122Z',
			score: 4,
			user: ObjectId("b00000000000000000000011"),
			freelancer: ObjectId("f00000000000000000000025")
		},
		{
			_id: ObjectId("c00000000000000000000014"),
			title: 'The best wedding decision!',
			date: '2017-01-22T23:58:43.122Z',
			description: "Fiona was fantastic! My husband and i discussed after the wedding that having her as our photographer was one of our best wedding decisions! We have not seen all of the pictures yet, but as we were going along he was briefly showing us what he had taken and they looked amazing! He was great to work with and gave us a lot of direction which we needed! It's so important to make sure your wedding photographer is top notch and that is exactly what we got!",
			score: 5,
			user: ObjectId("b00000000000000000000012"),
			freelancer: ObjectId("f00000000000000000000029")
		}, {
			_id: ObjectId("c00000000000000000000015"),
			title: 'Good Fiona!',
			date: '2017-01-22T23:58:43.122Z',
			description: "Fiona was terrific to work with. She does great work with color & lighting. She got back to me within 24 hour every single time I contacted her which I cannot say for any of my other wedding vendors. We also got a package where we could have the disk which was perfect. Fiona spent a lot of time getting perfect lighting and background for shots, so we didn't get as many unstaged pics as we would have liked. I'm sure he'd do more if you asked though.",
			score: 3,
			user: ObjectId("b00000000000000000000013"),
			freelancer: ObjectId("f00000000000000000000029")
		}, {
			_id: ObjectId("c00000000000000000000016"),
			title: 'Great Photographer!',
			date: '2017-01-22T23:58:43.122Z',
			description: "We LOVE our photos! Nico captured exactly what we hoped for - we have a great mix of formals and candids. He was also very professional and he got along great with everyone. Our guests were very fond of him as well - we received a lot of positive feedback regarding our photographer and our photos. One thing we really liked was how willing he was to show us our photos throughout the day. We knew exactly what we were getting and we are very pleased! We highly recommend Jadon Good Photography!",
			user: ObjectId("b00000000000000000000014"),
			score: 4,
			freelancer: ObjectId("f00000000000000000000026")
		}, {
			_id: ObjectId("c00000000000000000000017"),
			title: 'Not bad, not good',
			date: '2017-01-22T23:58:43.122Z',
			description: "Nico is not a talented Photographer, particularly when it comes to capturing the subtleties & natural moments. We were really impressed with the coverage of the day, and the beautiful finish to the shots.",
			score: 2,
			user: ObjectId("b00000000000000000000015"),
			freelancer: ObjectId("f00000000000000000000026")
		}, {
			_id: ObjectId("c00000000000000000000018"),
			date: '2017-01-22T23:58:43.122Z',
			description: "I get my nails done here often and they turn out really nice.. but if you end up with anyone other than Emily or the owner, you will be unhappy with the final product. So it is best to make your appointment and request who you would like.. Emily is my favorite, she is sweet.",
			score: 3,
			user: ObjectId("b00000000000000000000016"),
			freelancer: ObjectId("f00000000000000000000037")
		}, {
			_id: ObjectId("c00000000000000000000019"),
			title: 'Hating my nails!',
			date: '2017-01-22T23:58:43.122Z',
			description: "I am still in shock...I use to go to this salon for years before moving away. I went back for my first time after 5 years for a gel manicure. Everyone remembered me it was nice. 2 days later my my nails started chipping. On day 4 after a 14 hr work shift I went in for a color change...they said it wasn't necessary. Instead Emily fixed the 3 chipped nails. I tipped her $20 as she was not the one who did the manicure when I walked out the 3 nails were a different color!!!!! When I went back in to complain they laughed and said come back anytime and they would fix them. NO effort to rectify the situation at that moment, not even an apology. 2 visits and $55 later, I have NEVER been so upset about a manicure in my life!!",
			score: 1,
			user: ObjectId("b00000000000000000000017"),
			freelancer: ObjectId("f00000000000000000000037")
		},
		{
			_id: ObjectId("c00000000000000000000020"),
			title: 'Great Experience!',
			date: '2017-01-22T23:58:43.122Z',
			description: "Great experience. Turned up perfectly on time and sorted out the new boiler with no problems. Would definitely call her again",
			score: 4,
			user: ObjectId("b00000000000000000000008"),
			freelancer: ObjectId("f00000000000000000000040")
		},
		{
			_id: ObjectId("c00000000000000000000021"),
			title: 'Had my boiler service!',
			date: '2017-01-22T23:58:43.122Z',
			description: "Had my boiler serviced, came the next day on time and the guy couldn't have been more helpful. No mess she cleared up after her - in fact I was going to call Juliette to say how good she was, but they beat me to it by calling me and asking me how the service was - Excellent !",
			score: 5,
			user: ObjectId("b00000000000000000000009"),
			freelancer: ObjectId("f00000000000000000000040")
		},
		{
			_id: ObjectId("c00000000000000000000022"),
			title: 'Great Service...',
			date: '2017-01-22T23:58:43.122Z',
			description: "Having tried a local plumbing firm who were truly awful, I decided to spend a bit more and go with JobAdvisor. The plumber, Marianice Porcu, was brilliant. She knew exactly what she was doing, and was helpful and professional. She may be expensive, but just like the difference between a supermarket Rich Tea biscuit, and the real deal, you really do get what you pay for. I'd happily recommend. Also JobAdvisor guarantee you can get the same plumber back on a repeat visit, which means you don't have to spend an hour going through the same problem again, which can get very expensive with so called cheaper companies. A+ for JobAdvisor.",
			score: 5,
			user: ObjectId("b00000000000000000000010"),
			freelancer: ObjectId("f00000000000000000000043")
		},
		{
			_id: ObjectId("c00000000000000000000023"),
			title: 'Some work on the drains!',
			date: '2017-01-22T23:58:43.122Z',
			description: "I needed a small job doing on some drains and decided to search on JobAdvisor. Booking an engineer was quick and easy with the operator taking full details of the problem. Engineer turned up first thing as arranged and was very helpful and understood the problem right away. She is not cheap, but you get what you pay for - all round, really good service.",
			score: 4,
			user: ObjectId("b00000000000000000000011"),
			freelancer: ObjectId("f00000000000000000000043")
		},
		{
			_id: ObjectId("c00000000000000000000024"),
			title: 'Best designer ever!',
			date: '2017-01-22T23:58:43.122Z',
			description: "What a great experience. We received some extremely creative and original packaging designs from a talented designer. She was great to work with and all of their work was first class. I would recommend her to anyone looking for top notch designers.",
			score: 5,
			user: ObjectId("b00000000000000000000012"),
			freelancer: ObjectId("f00000000000000000000046")
		},
		{
			_id: ObjectId("c00000000000000000000025"),
			date: '2017-01-22T23:58:43.122Z',
			score: 4,
			user: ObjectId("b00000000000000000000013"),
			freelancer: ObjectId("f00000000000000000000046")
		},
		{
			_id: ObjectId("c00000000000000000000026"),
			title: 'Great Man and Designer!',
			date: '2017-01-22T23:58:43.122Z',
			description: "Perfect worker! Nice design made in few days. He is very kind!",
			score: 4,
			user: ObjectId("b00000000000000000000014"),
			freelancer: ObjectId("f00000000000000000000052")
		},
		{
			_id: ObjectId("c00000000000000000000027"),
			title: 'Good experience',
			date: '2017-01-22T23:58:43.122Z',
			score: 3,
			user: ObjectId("b00000000000000000000015"),
			freelancer: ObjectId("f00000000000000000000052")
		},
	]
}
