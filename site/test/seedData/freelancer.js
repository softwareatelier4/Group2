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
				'/uploads/test/0c.jpg',
				'/uploads/test/0d.jpg',
				'/uploads/test/0e.png',
				'/uploads/test/0f.jpg',
			],
			address: {
				road: 'Turmstraße',
				number: '47',
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
				'/uploads/test/1d.png',
				'/uploads/test/1e.jpg',
				'/uploads/test/1f.jpg',
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
			photos: [
				'/uploads/test/2a.jpg',
				'/uploads/test/2b.jpg',
				'/uploads/test/2c.png'
			],
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
		{
			_id: ObjectId("f00000000000000000000004"),
			firstName: 'Samantha',
			lastName: 'Scotti',
			workName: 'leCorbusierLove',
			email: 'sammi@gmail.com',
			phone: '32945613738',
			profilePhoto: '/uploads/test/profile4.jpg',
			photos: [
				'/uploads/test/4a.jpg',
				'/uploads/test/4b.jpg',
				'/uploads/test/4c.jpg',
				'/uploads/test/4d.jpg',
				'/uploads/test/4e.jpg',
				'/uploads/test/4f.jpg',
				'/uploads/test/4g.jpg',
				'/uploads/test/4h.jpg',
				'/uploads/test/4i.jpg'
			],
			score: 0,
			price: 80,
			address: {
				city: 'Berlin',
				lat: 52.5072111,
				long: 13.1459664,
			},
			tags: [ObjectId("a00000000000000000000005"),
				ObjectId("a00000000000000000000010"),
				ObjectId("a00000000000000000000011")
			],
			description: "I love building online communities that have heart and purpose to impact the world and create transformation and change. To be able to create pathways that connect purpose and destiny with reality. Here's what some people have said about me after we chatted....Working in the design industry for the last 10+ years Samantha has creative flair combined with sharp marketing savvy and the passion to reveal your message in an authentic way. Founding Design Reaction in 2006, she has worked with a large range of clients in the Newcastle and Sydney area including: Hunter New England Health, State Spinal, Bone Marrow Transplant Network, Hunter Development Corporation and many well known small businesses in the Newcastle region.",
			emergency: false
		},
		{
			_id: ObjectId("f00000000000000000000005"),
			firstName: 'Isabel',
			lastName: 'Gyned',
			phone: '023295613738',
			email: 'isabel.gyned@gmail.com',
			profilePhoto: '/uploads/test/profile5.jpg',
			address: {
				city: 'London',
				lat: 51.5285582,
				long: -0.2417011,
			},
			description: "Dr. Gyned has provided care to children and surrounding counties for over 10 years.  A Board Certified Pediatrician for nearly 22 years, Dr. Isabel  Gyned graduated from the Univ De Antioquia, Fac De Med, Medellin, Colombia in 1980. She provides compassionate care to patients from birth to 18 years of age. Her primary focus is to give your child the best diagnosis possible, while sharing vital health-related information with you to further improve your child's health. Dr. Gyned has special interest in children with both chronic and acute Asthma. She cares about every child's well-being, which is why she takes the time to get to know each of her patients very well.",
			score: 0,
			price: 200,
			tags: [ObjectId("a00000000000000000000012"),
				ObjectId("a00000000000000000000013")
			],
			emergency: false,
			currentPosition: { //Lugano
				lat: 46.0293395,
				long: 8.854721
			},
		},
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
		{
			_id: ObjectId("f00000000000000000000010"),
			firstName: 'Hoang ',
			lastName: 'Nua',
			workName: '.NET/WPF Developer',
			email: 'hoang.nua96xd@yy.com',
			phone: '+41 760474747',
			profilePhoto: '/uploads/test/profile10.jpg',
			photos: [
				'/uploads/test/10a.jpg',
				'/uploads/test/10b.jpg',
				'/uploads/test/10c.jpg',
				'/uploads/test/10d.jpg',
				'/uploads/test/10e.jpg',
				'/uploads/test/10f.jpg'
			],
			address: {
				road: 'Via Zurigo',
				number: 10,
				city: 'Lugano',
				cap: 69100,
				lat: 46.0119793,
				long: 8.9517463,
			},
			tags: [
				ObjectId("a00000000000000000000030"),
				ObjectId("a00000000000000000000031"),
				ObjectId("a00000000000000000000032")
			],
			description: "•6+ years of strong .Net experience •Analysis and Designing Object– Orient• Languages & Scripting: VB, C#• Database: MS SQL Server 2005 / 2008 / 2012 / 2014• Web Servers: IIS• Control: Telerik, Atalasoft, TxtextControl for WPF• patterns & practices: Smart Client, MVVM• Mobile: Hybird Applicaion / Cross platform with Appbuilder, Window Phone• NET Frameworks: .NET 4.5, NET 4.0, NET 3.5.•ASP.NET Frameworks: Telerik ASP.NET AJAX, WebForm• WebServices(SOAP and REST): WCF, WebAPI Odata, Restful• Database: MS SQL Server 2005 / 2008 / 2012• Mobile: Hybrid Application / Cross platform with Telerik AppBuilder, Window Phone• Continuous Integration: TeamCity• TDD: Unit Test• Languages: C#, VB.NET, SQL• Microsoft more ",
			score: 0,
			price: 16,
			emergency: true,
			currentPosition: {
				lat: 46.0119793,
				long: 12.9517463,
			}
		},
		{
			_id: ObjectId("f00000000000000000000011"),
			firstName: 'Sally ',
			lastName: 'Sausage',
			workName: 'SallyPower',
			email: 'sally.sausage@shsh.it',
			phone: '+ 39 380474747',
			profilePhoto: '/uploads/test/profile11.jpg',
			photos: [
				'/uploads/test/11a.jpg',
				'/uploads/test/11b.jpg',
				'/uploads/test/11c.jpg',
				'/uploads/test/11d.jpg',
				'/uploads/test/11e.jpg',
				'/uploads/test/11f.jpg',
				'/uploads/test/11g.jpg',
				'/uploads/test/11h.jpg',
				'/uploads/test/11i.jpg',
				'/uploads/test/11j.jpg',
				'/uploads/test/11k.jpg',
				'/uploads/test/11l.jpg'
			],
			address: {
				road: 'Via Giuseppe Garibaldi',
				number: 4,
				city: 'Milano',
				cap: 20091,
				lat: 45.5337957,
				long: 9.1916273,
			},
			tags: [
				ObjectId("a00000000000000000000033"),
				ObjectId("a00000000000000000000034")
			],
			description: "I am a CIDESCO trained therapist with meticulous high standards. I have experience as a personal beauty therapist, in 5* spas on land and at sea, working for luxury skin care brands and also management and training experience. My experiences have meant that I have been able to travel around the world and work with people of all ages, cultures, nationalities and religions. This has allowed me to improve my people skills and enabled me to have the confidence and ability to work with people from different backgrounds. As a therapist I am extremely passionate, hard-working, professional and I love to make people feel and look their best. I am a very empathetic and understanding person and give 100% at all times in my work",
			score: 0,
			price: 30,
			emergency: false
		},
		{
			_id: ObjectId("f00000000000000000000012"),
			firstName: 'Francesca',
			lastName: 'Carozzi',
			email: 'fra.caroz@jaja.com',
			phone: '23234234234',
			profilePhoto: '/uploads/test/profile12.jpg',
			photos: [
				'/uploads/test/12a.jpg',
				'/uploads/test/12b.jpg'
			],
			address: {
				road: 'Via Bagutti',
				number: 2,
				city: 'Lugano',
				cap: 6900,
				lat: 46.0115264,
				long: 8.9535802,
			},
			tags: [
				ObjectId("a00000000000000000000033"),
				ObjectId("a00000000000000000000034"),
				ObjectId("a00000000000000000000035")
			],
			description: "😀Goodmorning , in the HEART ❤️ of the city 'is the FM salon HAIR AND BEAUTY LUGANO 🇨🇭 and and' formed by a young team of 5 hairdressers and beautician 1, most of us have worked in the best fashion brands. The salon was founded in 2004 in Lugano as a unisex salon for men, women and children and offers an innovative service without an appointment, not to feel connected to 'appointment with the' anxiety to tell, do not arrive on time and risk not find a place. We always rely on products of excellent quality 'and for looking after it in the hair coloring that in respect of health and the environment without sulfates, SLS, SLES, benzoates, petrolami ammonia fee. We offer services for wedding, coloring, manicures, waxing, balajages, shatush, streaks, highlighters, henna ', colarazioni water, decolarazioni ammonia, skin problems, selling hair dryer, plates, hair products, face and body.",
			emergency: false,
		},
		{
			_id: ObjectId("f00000000000000000000013"),
			firstName: 'Camilla',
			lastName: 'La Valle',
			email: 'cami99@cc.it',
			phone: '+4107362864',
			address: {
				city: 'Lugano',
				lat: 46.0295779,
				long: 8.8547208,
			},
			tags: [
				ObjectId("a00000000000000000000033"),
				ObjectId("a00000000000000000000034"),
				ObjectId("a00000000000000000000035")
			],
			description: "Welcome to Christina's Beauty & Day Spa Salon, established in 1984, we offer the most comprehensive Beauty, Hairdressing, Day Spa & Cosmetic Rejuvenation Services, using the most up-to-date skincare products to guarantee we meet all your desired goals & needs. We provide an extensive range of Facial & Body Treatments, Hairdressing, Manicures, Pedicures, Waxing, Make-up, Spray Tans and Cosmetic & Laser services Our aim at Christina’s is to provide a sanctuary where you can escape the stresses of everyday. Our experienced staff will guide you through our luxurious spa treatments. So come in, and relax in our beautiful, private & peaceful surroundings.",
			score: 0,
			price: 50,
			emergency: false
		},
		{
			_id: ObjectId("f00000000000000000000014"),
			firstName: 'Francesco',
			lastName: 'Girardi',
			email: 'fra.giri99@cc.it',
			phone: '+4107362864',
			address: {
				road: "via Pretorio",
				number: 5,
				city: 'Lugano',
				lat: 46.0054892,
				long: 8.9492606
			},
			profilePhoto: '/uploads/test/profile14.jpg',
			tags: [
				ObjectId("a00000000000000000000038"),
				ObjectId("a00000000000000000000039"),
			],
			description: "Pimlico Plumbers provide services for all your domestic maintenance requirements which include heating, plumbing, bathrooms, drain clearing, electrics, appliance installation and repairs, carpentry, roofing and building. A transparent charging system at competitive and economical rates, guaranteed work with a 24 hour service and 1 hour response makes Pimlico Lugano’s leading, largest and fastest independent service company. Pimlico’s’ workforce of over 270 has a comprehensive skill base of highly experienced tradesmen from heating engineers to bricklayers - all at the top of their trade.",
			score: 0,
			price: 40,
			emergency: true,
			currentPosition: {
				lat: 46.0079307,
				long: 8.9541892,
			}
		},
		{
			_id: ObjectId("f00000000000000000000015"),
			firstName: 'Angelo',
			lastName: 'Maurti',
			email: 'angelo.m99@cc.it',
			phone: '+4107362864',
			profilePhoto: '/uploads/test/profile15.jpg',
			address: {
				road: "via Gerolamo Vegezzi",
				number: 4,
				city: 'Lugano',
				lat: 46.0045396,
				long: 8.9498874,
			},
			photos: [
				'/uploads/test/15a.jpg',
				'/uploads/test/15b.jpg'
			],
			tags: [
				ObjectId("a00000000000000000000036"),
				ObjectId("a00000000000000000000034"),
				ObjectId("a00000000000000000000035"),
				ObjectId("a00000000000000000000037")
			],
			description: "Decades of experience since 1945, delivering expertise and innovation. Initially opened as a traditional Barber Shop and later joined with international consultants. Today a space located in the center of Lugano, where focus is on all-round beauty, securing an array of first class, hair, skin and body care services with the customer's well-being at heart.",
			score: 0,
			price: 65,
			emergency: false
		},
		{
			_id: ObjectId("f00000000000000000000016"),
			firstName: 'Fabio',
			lastName: 'Putignano',
			email: 'fab.putin99@gg.com',
			phone: '+3907362864',
			address: {
				road: "Viale Regina Elena",
				number: 330,
				city: 'Roma',
				lat: 41.905744,
				long: 12.5133013
			},
			tags: [
				ObjectId("a00000000000000000000038"),
				ObjectId("a00000000000000000000039"),
			],
			description: "Welcome to H2 Property Services - we are a well established, local, family-run, plumbing, heating and electrical business working across London. Our qualified Plumbers, Domestic Gas Engineers, Central Heating Engineers and Electricians are here to help get your plumbing, heating and electrics running again smoothly in the shortest possible time. We carry out all sizes of repairs, new installations, landlord certificates and annual maintenance services.",
			score: 0,
			price: 25,
			emergency: true,
			currentPosition: {
				lat: 41.8514803,
				long: 12.456211
			}
		},
		{
			_id: ObjectId("f00000000000000000000017"),
			firstName: 'Giovanni',
			lastName: 'Giovannino',
			email: 'gio.gio99@gio.gio',
			phone: '+390007362864',
			address: {
				road: "Via dei Due Ponti",
				number: 203,
				city: 'Roma',
				lat: 41.965184,
				long: 12.4487113
			},
			profilePhoto: '/uploads/test/profile17.jpg',
			tags: [
				ObjectId("a00000000000000000000038"),
				ObjectId("a00000000000000000000039"),
			],
			description: "Plumbers provides an extensive range of plumbing and boiler services throughout the London area. We’ve completed all kinds of jobs in areas near you: … and many other London postcode areas as well. We handle boiler breakdowns, boiler repairs and replacements and plumbing repairs for a wide range of clients, including homeowners, landlords and business people.",
			score: 0,
			price: 30,
			emergency: false
		},
	]
}
