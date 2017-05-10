'use strict';

var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

module.exports.freelancer = {
	name: 'Freelancer',
	data: [{
			_id: ObjectId("f00000000000000000000000"),
			firstName: 'Shageevan',
			lastName: 'Suzuki',
			workName: 'Shagii',
			email: 'shagii@suzu.com',
			phone: '+49 303 341534567',
			profilePhoto: '/uploads/test/profile0.jpg',
			photos: [
				'/uploads/test/0a.jpg',
				'/uploads/test/0b.jpg',
			],
			address: {
				road: 'Turmstraße',
				number: '47A',
				city: '10551',
				cap: 69100,
				lat: 52.5156273,
				long: 13.3228416,
			},
			tags: [
				ObjectId("a00000000000000000000032"),
				ObjectId("a00000000000000000000004"),
				ObjectId("a00000000000000000000000"),
				ObjectId("a00000000000000000000001"),
				ObjectId("a00000000000000000000002")
			],
			description: 'Upwork Freelancer plus the CEO of a successful E-Commerce store in Berlin which did more than $1million revenue within an year of launching and still going strong. My core skills include HTML, CSS, Javascript, PHP, MySQL, WordPress, Shopify, BigCommerce, cPanel/WHM, JIRA/Confluence Administration plus anything related to web developement and server configuration. I will be available every weekday 3:30PM GMT to 5:30PM GMT and you can contact me by e-mail.',
			score: 0,
			price: 33,
			emergency: true,
			currentPosition: { //Lugano
				lat: 46.0119793,
				long: 12.9517463,
			}
		},
		{
			_id: ObjectId("f00000000000000000000001"),
			firstName: 'Vladimir',
			lastName: 'Valsan',
			workName: 'Vlad',
			email: 'valsava@designer.ch',
			phone: '+41 3804734747',
			profilePhoto: '/uploads/test/profile1.jpg',
			photos: [
				'/uploads/test/1a.png',
				'/uploads/test/1b.jpg',
				'/uploads/test/1c.jpg',
			],
			address: {
				road: 'Goswell Rd',
				number: 4,
				city: 'London',
				cap: 29100,
				lat: 51.5228221,
				long: -0.1682101,
			},
			tags: [
				ObjectId("a00000000000000000000003"),
				ObjectId("a00000000000000000000005"),
				ObjectId("a00000000000000000000006"),
				ObjectId("a00000000000000000000007"),
			],
			description: "My name is Vladimir Valsan also know as Vlad a freelancer graphic designer specializing in branding and UI design, currently based in London, UK. In my 6 years of experience, I have worked with clients and agencies worldwide. I enjoy discussing business ideas and then visualizing them. I can offer you an innovative design solution that's perfect for your business needs.  My mission is to create vibrant, fresh and easy-to-use products with a clear district brand identity. Also i value deadlines, stick to agreements and please my clients.",
			score: 0,
			price: 50,
			emergency: false,
		},
		{
			_id: ObjectId("f00000000000000000000002"),
			firstName: 'Simone',
			lastName: 'Ponchia',
			email: 'simo@ponchia.it',
			phone: '+39 344557762',
			profilePhoto: '/uploads/test/profile2.jpg',
			address: {
				road: 'Viale Argonne',
				number: 52,
				city: 'Milano',
				cap: 20133,
				lat: 45.4677303,
				long: 9.2284312,
			},
			tags: [
				ObjectId("a00000000000000000000004"),
				ObjectId("a00000000000000000000030"),
				ObjectId("a00000000000000000000008"),
			],
			description: "Started as a freelancer programmer, I've quickly grown to highly qualified and valued developer at ELEKS Software where I co-worked with world-famous companies and enterprise products such as SAP, Microsoft Dynamics and other, was a team leader and later a project manager of a growing real-estate management project. I have widely distributed and highly rated professional skills in variety of Informational technologies and other areas.",
			emergency: true,
			currentPosition: { //Milano
				lat: 45.4659865,
				long: 9.1269591,
			},
		},
		{
			_id: ObjectId("f00000000000000000000003"),
			firstName: 'Antonella',
			lastName: 'Pirillo',
			email: 'antonella@pirillo.it',
			phone: '+39 3295613738',
			profilePhoto: '/uploads/test/profile3.jpg',
			address: {
				city: 'Como',
				lat: 45.8080383,
				long: 9.0151366,
			},
			tags: [
				ObjectId("a00000000000000000000009"),
				ObjectId("a00000000000000000000010")
			],
			description: "My experience in the field of civil and idraulic engineering is 7 years old. At the beginning i followed mainly residential and industrial tecnological systems for heating and air conditioning. Some years ago I began to collaborate with an Hydraulic Engineer, to project hydraulic solution for rivers' protections. I made some projects for heating and air conditioning system, expecially with the use of best available tecnologies, for example in the field of renovanle energy (solar, geothermal..). At the same time i collaborated for some hydraulic projects like systems of rivers' protections, hydraulic systems in the project of roads. I can use the softwares Hec-Ras, Heasted Methods.",
			score: 0,
			price: 10,
			certifications: [
				'Engineer',
			],
			emergency: true,
			currentPosition: { //Milano
				lat: 45.4654005,
				long: 9.1158844,
			},
			//ownerId:
		},
		// {
		// 	_id: ObjectId("f00000000000000000000004"), //da fare
		// 	firstName: 'Samantha',
		// 	lastName: 'Ferri',
		// 	email: 'sammi@gmail.com',
		// 	photos: [
		// 		'/uploads/test/1.jpg',
		// 		'/uploads/test/6.jpg'
		// 	],
		// 	address: {
		// 		city: 'Mendrisio',
		// 		lat: 45.8887047,
		// 		long: 8.9552257,
		// 	},
		// 	tags: [],
		// 	description: "I love building online communities that have heart and purpose to impact the world and create transformation and change. To be able to create pathways that connect purpose and destiny with reality. Here's what some people have said about me after we chatted....Working in the design industry for the last 10+ years Samantha has creative flair combined with sharp marketing savvy and the passion to reveal your message in an authentic way. Founding Design Reaction in 2006, she has worked with a large range of clients in the Newcastle and Sydney area including: Hunter New England Health, State Spinal, Bone Marrow Transplant Network, Hunter Development Corporation and many well known small businesses in the Newcastle region.",
		// 	emergency: false
		// },
		// {
		// 	_id: ObjectId("f00000000000000000000005"), //da fare
		// 	firstName: 'Costanza',
		// 	lastName: 'Fox',
		// 	workName: 'Cocco',
		// 	email: 'cocco@gmail.com',
		// 	address: {
		// 		city: 'Milano',
		// 		lat: 45.4627124,
		// 		long: 9.1076929,
		// 	},
		// 	description: "Dr. Fox has provided care to children of Isabella and surrounding counties for over 10 years.  A Board Certified Pediatrician for nearly 22 years, Dr. Constanza I. Fox graduated from the Univ De Antioquia, Fac De Med, Medellin, Colombia in 1980. She provides compassionate care to patients from birth to 18 years of age. Her primary focus is to give your child the best diagnosis possible, while sharing vital health-related information with you to further improve your child's health. Dr. Fox has special interest in children with both chronic and acute Asthma. She cares about every child's well-being, which is why she takes the time to get to know each of her patients very well.",
		// 	score: 0,
		// 	price: 200,
		// 	tags: [],
		// 	emergency: true,
		// 	currentPosition: {
		// 		lat: 45.0119793,
		// 		long: 13.9517463,
		// 	},
		// },
		// {
		// 	_id: ObjectId("f00000000000000000000006"), //da fare
		// 	firstName: 'Zeno',
		// 	lastName: 'Treviz',
		// 	email: 'zenos@gmail.com',
		// 	address: {
		// 		city: 'Mendrisio',
		// 		lat: 45.8887047,
		// 		long: 8.9552257,
		// 	},
		// 	tags: [],
		// 	description: "Sono dimplomato come informatico presso SAMT. Terminata la scuola ho svolto il servizio militare, dopo ciò mi sono messo in proprio aprendo la mia azienda. Principalmente al momento mi occupo di assistenza ai clienti e di sviluppo di siti web. Sto studiando presso la Xamarin University e la Microsoft Virtual Accademy in maniera da continuare ad accrescermi professionalmente.",
		// 	score: 0,
		// 	price: 100,
		// 	emergency: false,
		// 	active: true,
		// },
		// {
		// 	_id: ObjectId("f00000000000000000000007"), //da fare
		// 	firstName: 'Kate',
		// 	lastName: 'Baluba',
		// 	email: 'balubina@hotmail.com',
		// 	address: {
		// 		city: 'Zurich',
		// 		lat: 47.3775499,
		// 		long: 8.4666754
		// 	},
		// 	tags: [
		// 		ObjectId("a00000000000000000000008")
		// 	],
		// 	description: "I don't want to share my information with you. Believe I am the best freelancer!",
		// 	score: 0,
		// 	emergency: false,
		// 	active: false
		// },
		// {
		// 	_id: ObjectId("f00000000000000000000008"), ////da fare
		// 	firstName: '',
		// 	lastName: '',
		// 	workName: '',
		// 	email: '',
		// 	address: {
		// 		city: '',
		// 		lat: ,
		// 		long: ,
		// 	},
		// 	description: ""
		// 	price: 0,
		// 	tags: [
		//
		// 	],
		// 	score: 0,
		// 	emergency: true,
		// 	currentPosition: {
		// 		lat: 45.0119793,
		// 		long: 13.9517463,
		// 	},
		// },
		// {
		// 	_id: ObjectId("f00000000000000000000009"), //da fare
		// 	firstName: 'Costanza',
		// 	lastName: 'Fox',
		// 	workName: 'Cocco',
		// 	email: 'cocco@gmail.com',
		// 	address: {
		// 		city: 'Milano',
		// 		lat: 45.4627124,
		// 		long: 9.1076929,
		// 	},
		// 	description: "Dr. Fox has provided care to children of Isabella and surrounding counties for over 10 years.  A Board Certified Pediatrician for nearly 22 years, Dr. Constanza I. Fox graduated from the Univ De Antioquia, Fac De Med, Medellin, Colombia in 1980. She provides compassionate care to patients from birth to 18 years of age. Her primary focus is to give your child the best diagnosis possible, while sharing vital health-related information with you to further improve your child's health. Dr. Fox has special interest in children with both chronic and acute Asthma. She cares about every child's well-being, which is why she takes the time to get to know each of her patients very well.",
		// 	score: 0,
		// 	price: 200,
		// 	tags: [],
		// 	emergency: true,
		// 	currentPosition: {
		// 		lat: 45.0119793,
		// 		long: 13.9517463,
		// 	},
		// },
	]
}
