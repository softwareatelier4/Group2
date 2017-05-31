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
			city: 'London',
			lat: 51.5285582,
			long: -0.2417011,
		},
		tags: [
			ObjectId("a00000000000000000000032"),
			ObjectId("a00000000000000000000004"),
			ObjectId("a00000000000000000000000"),
			ObjectId("a00000000000000000000001"),
			ObjectId("a00000000000000000000002")
		],
		description: 'Upwork Freelancer plus the CEO of a successful E-Commerce store in London which did more than $1million revenue within an year of launching and still going strong. My core skills include HTML, CSS, Javascript, PHP, MySQL, WordPress, Shopify, BigCommerce, cPanel/WHM, JIRA/Confluence Administration plus anything related to web developement and server configuration. I will be available every weekday 3:30PM GMT to 5:30PM GMT and you can contact me by e-mail.',
		score: 3.5,
		price: 33,
		emergency: true,
		currentPosition: { //London
			lat: 51.5788582,
			long: -0.2417011,
		}
	}, {
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
	}, {
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
			ObjectId("a00000000000000000000012")
		],
		description: "Started as a freelancer programmer, I've quickly grown to highly qualified and valued developer at ELEKS Software where I co-worked with world-famous companies and enterprise products such as SAP, Microsoft Dynamics and other, was a team leader and later a project manager of a growing real-estate management project. I have widely distributed and highly rated professional skills in variety of Informational technologies and other areas.",
		emergency: true,
		currentPosition: { //Milano
			lat: 45.4659865,
			long: 9.1269591,
		},
	}, {
		_id: ObjectId("f00000000000000000000003"),
		firstName: 'Antonella',
		lastName: 'Pirillo',
		email: 'antonella@pirillo.it',
		phone: '+39 3295613738',
		profilePhoto: '/uploads/test/profile3.jpg',
		address: {
			city: 'Milano',
			lat: 45.4654005,
			long: 9.1158844,
		},
		tags: [
			ObjectId("a00000000000000000000038"),
			ObjectId("a00000000000000000000010"),
			ObjectId("a00000000000000000000013")
		],
		description: "My experience in the field of civil and plumbing engineering is 7 years old. At the beginning i followed mainly residential and industrial tecnological systems for heating and air conditioning. Some years ago I began to collaborate with an plumbing Engineer, to project hydraulic solution for rivers' protections. I made some projects for heating and air conditioning system, expecially with the use of best available tecnologies, for example in the field of renovanle energy (solar, geothermal..). At the same time i collaborated for some hydraulic projects like systems of rivers' protections, hydraulic systems in the project of roads. I can use the softwares Hec-Ras, Heasted Methods.",
		score: 0,
		price: 10,
		emergency: true,
		currentPosition: { //Milano
			lat: 45.549002,
			long: 9.0550243,
		},
	}, {
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
		score: 3,
		price: 80,
		address: {
			city: 'Berlin',
			lat: 52.5072111,
			long: 13.1459664,
		},
		tags: [ObjectId("a00000000000000000000005"),
			ObjectId("a00000000000000000000010"),
			ObjectId("a00000000000000000000011"),
			ObjectId("a00000000000000000000012")
		],
		description: "I love building online communities that have heart and purpose to impact the world and create transformation and change. To be able to create pathways that connect purpose and destiny with reality. Here's what some people have said about me after we chatted....Working in the design industry for the last 10+ years Samantha has creative flair combined with sharp marketing savvy and the passion to reveal your message in an authentic way. Founding Design Reaction in 2006, she has worked with a large range of clients in the Newcastle and Sydney area including: Hunter New England Health, State Spinal, Bone Marrow Transplant Network, Hunter Development Corporation and many well known small businesses in the Newcastle region.",
		emergency: false
	}, {
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
		description: "I have always had a keen interest in makeup artistry and skin care. I have been providing facial, waxing and makeup services to the London area since 1999, and I still love my profession. I love the combination of art and science and there is always more to learn. I love meeting new people and helping them achieve their beauty goals and providing them with personalized treatments. I have taken many advanced training courses in clinical skin care, nail art, body and facial waxing, and photography makeup.",
		price: 80,
		tags: [ObjectId("a00000000000000000000034"),
			ObjectId("a00000000000000000000035")
		],
		emergency: false,
	}, {
		_id: ObjectId("f00000000000000000000006"),
		firstName: 'Julie',
		lastName: 'Fariki',
		phone: '023295873738',
		email: 'juliette.far@hotmail.com',
		photos: [
			'/uploads/test/6a.jpg',
			'/uploads/test/6b.jpeg',
			'/uploads/test/6c.jpg'
		],
		address: {
			city: 'London',
			lat: 51.5285582,
			long: -0.2417011,
		},
		tags: [ObjectId("a00000000000000000000034"),
			ObjectId("a00000000000000000000033")
		],
		description: "I am mostly self taught and later pursued nail technology with feverish passion and took a challenging nailist exam in Tokyo attaining the advanced Japanese Nailist License despite Japanese being a foreign language to her. Since then, she has gone on to collaborate with notable names in the fashion industry and is the ‘go-to’ nail artist for her nail art in Melbourne for Serena Williams. Her work has been featured by numerous online and printed publications, in editorials and is constantly talked about in the fashion blogging industry and has been mentioned in www.complex.com as one of the top 20 nail artists you should know. Her work encompasses her personal style as well as her background in fashion, she strives to create original style nail art that’s feminine and edgy. This website & blog showcases her journey in the design and fashion world, bringing you her passion to create artistic works in nail art, illustration, fashion and styling.",
		score: 0,
		price: 5,
		emergency: false,
		active: true,
	}, {
		_id: ObjectId("f00000000000000000000007"),
		firstName: 'Susan',
		lastName: 'Kyanel',
		profilePhoto: '/uploads/test/profile7.jpg',
		email: 'susi.kyanel@gmail.com',
		address: {
			city: 'London',
			lat: 51.5285582,
			long: -0.1366443
		},
		photos: [
			'/uploads/test/7a.jpg',
			'/uploads/test/7b.jpg',
			'/uploads/test/7c.jpg',
			'/uploads/test/7d.png',
			'/uploads/test/7e.jpg',
			'/uploads/test/7f.jpg',
			'/uploads/test/6a.jpg',
			'/uploads/test/6b.jpeg',
			'/uploads/test/6c.jpg'
		],
		tags: [
			ObjectId("a00000000000000000000034"),
			ObjectId("a00000000000000000000033"),
			ObjectId("a00000000000000000000035"),
			ObjectId("a00000000000000000000037")
		],
		description: "Born in Modena. Currently living in London. I begin studying as beautician but soon changes to make-up, attending BCM in Milan. I started working as make-up assistant before finishing it, at cinema festival and tv shows, but I quickly understand that I like more working with street and modern styles. I have worked with Marie Claire, Io Donna, The Greatest Magazine, Interview Russia.",
		score: 3.75,
		emergency: true,
		price: 90,
		currentPosition: {
			lat: 51.5285582,
			long: -0.2417011,
		},
		active: false
	}, {
		_id: ObjectId("f00000000000000000000008"),
		firstName: 'Luca',
		lastName: 'Rossi',
		workName: 'Mr. Handyman',
		profilePhoto: '/uploads/test/profile8.jpg',
		email: 'luca.rossi@aggiustatutto.com',
		photos: [
			'/uploads/test/8a.jpg',
			'/uploads/test/8b.jpg',
			'/uploads/test/8c.JPG',
		],
		address: {
			city: 'Roma',
			lat: 41.923271,
			long: 12.4424763,
		},
		description: "The sump pump is the last line of defense against basement flooding. If you’re sump pump needs replacing, don’t wait a day long. Mr. Handyman is the one-call solution to replacing your submersible or pedestal sump pump.  Mr. Handyman offers a wide range of services—big and small. Just because you didn't see a plumbing service listed doesn't mean your local Mr. Handyman can't help you out. Contact your local Mr. Handyman for more information. Whether you’re installing low-flow toilets or repairing an existing toilet, our experienced handymen have the skills to get the job done right. Yes, the job stinks. But our handymen are happy to get the job done right and on time. Our experienced handymen always repair broken or leaky fixtures in order to avoid costly replacements. Our home improvement professionals arrive ready to work with all of the tools and parts needed to complete the job. From leaky faucets to broken shower heads, no repair job is too small.",
		price: 70,
		tags: [ObjectId("a00000000000000000000038"),
			ObjectId("a00000000000000000000009")
		],
		score: 0,
		emergency: true,
		currentPosition: { //Roma
			lat: 41.881875,
			long: 12.5525113,
		},
	}, {
		_id: ObjectId("f00000000000000000000009"),
		firstName: 'Simon',
		lastName: 'Reding',
		workName: 'Bob The Builder boss',
		profilePhoto: '/uploads/test/profile9.jpg',
		email: 'simon.reding@usi.ch',
		photos: [
			'/uploads/test/9a.jpg',
			'/uploads/test/9b.jpg',
			'/uploads/test/9c.jpg',
			'/uploads/test/9d.jpg',
			'/uploads/test/9e.jpg',
			'/uploads/test/9f.jpg',
			'/uploads/test/9g.jpg',
			'/uploads/test/9h.jpg',
			'/uploads/test/9i.jpg',
		],
		address: {
			city: 'Milano',
			lat: 45.4654,
			long: 9.1859,
		},
		score: 3.5,
		description: "I am the founder of Bob The Builder Plumbers. The company has been operating since 2003, delivering consistent and considerate plumbing services to our customers, and even during the recent recession has shown annual growth. Operating under a national licence structure, our male plumbers are able to meet the needs of their local market whilst you and they benefit from a nationally recognised brand. We offer a wide range of plumbing services to our customers and ensure our plumbers are qualified to carry out those services. All our plumbers operate within a set of guidelines based on the Pink Plumbers values, with support where needed. We are a Plumbing business that recognises that there is currently a lack of female plumbers operating independently in their local communities, and where they do exist it's often hard for customers to find them. At Pink Plumbers we help to close the gap between female plumbers qualifying and operating as plumbers in their community.",
		price: 200,
		tags: [
			ObjectId("a00000000000000000000038"),
			ObjectId("a00000000000000000000009")
		],
		emergency: false,
		currentPosition: { //Lugano
			lat: 46.0110101,
			long: 8.9555166,
		},
		ownerId: ObjectId("b00000000000000000000010"),
	}, {
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
			road: 'Arlington Way',
			number: 5,
			city: 'Londra',
			lat: 51.5299282,
			long: -0.1074558
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
			lat: 51.5299282,
			long: -0.1074558
		}
	}, {
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
		score: 1.75,
		price: 30,
		emergency: false
	}, {
		_id: ObjectId("f00000000000000000000012"),
		firstName: 'Francesca',
		lastName: 'Carozzi',
		email: 'fra.caroz@jaja.com',
		phone: '+41 076542673',
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
	}, {
		_id: ObjectId("f00000000000000000000013"),
		firstName: 'Camilla',
		lastName: 'La Valle',
		workName: 'Cami Nails',
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
	}, {
		_id: ObjectId("f00000000000000000000014"),
		firstName: 'Francesco',
		lastName: 'Girardi',
		workName: 'The Plumber Cisco',
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
	}, {
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
	}, {
		_id: ObjectId("f00000000000000000000016"),
		firstName: 'Fabio',
		lastName: 'Putignano',
		workName: 'Uncorker',
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
	}, {
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
	}, {
		_id: ObjectId("f00000000000000000000018"),
		firstName: 'David',
		lastName: 'Woolfall',
		workName: 'WoolPhoto',
		email: 'dav.wolf@ww.ot',
		phone: '+390007362864',
		address: {
			city: 'Roma',
			lat: 41.9102415,
			long: 12.3959139
		},
		profilePhoto: '/uploads/test/profile18.jpg',
		photos: [
			'/uploads/test/18a.jpg',
			'/uploads/test/18b.jpg',
			'/uploads/test/18c.jpg',
			'/uploads/test/18d.jpg',
			'/uploads/test/18e.jpg',
			'/uploads/test/18f.jpg',
			'/uploads/test/18g.jpg',
			'/uploads/test/18h.jpg',
			'/uploads/test/18i.jpg',
			'/uploads/test/18j.jpg',
		],
		tags: [
			ObjectId("a00000000000000000000040"),
			ObjectId("a00000000000000000000041"),
			ObjectId("a00000000000000000000042"),
		],
		description: "David is a portrait photographer based in London. David graduated with a first class Hons Degree from The Kent Institute of Art and Design in 1998 and proceeded to assist commercial photographers and work on personal projects. David is a now an experienced award winning editorial photographer based in London, working for international magazines shooting stories and individual portraits.",
		score: 0,
		price: 20,
		emergency: false
	}, {
		_id: ObjectId("f00000000000000000000019"),
		firstName: 'Natasja',
		lastName: 'Vos',
		workName: 'Headshot',
		email: 'nati99@vos.vos',
		phone: '+390007362864',
		address: {
			road: "Via Statilia",
			number: 32,
			city: 'Roma',
			lat: 41.8897275,
			long: 12.5075873
		},
		profilePhoto: '/uploads/test/profile19.jpg',
		photos: [
			'/uploads/test/19a.jpg',
			'/uploads/test/19b.jpg',
			'/uploads/test/19c.jpg',
			'/uploads/test/19d.jpg',
			'/uploads/test/19e.jpg',
		],
		tags: [
			ObjectId("a00000000000000000000040"),
			ObjectId("a00000000000000000000041"),
			ObjectId("a00000000000000000000043"),
		],
		description: "Headshot London are a bunch of creative photographers and Jedi-like retouchers. The old Chinese saying: Do a job you love and you’ll never do a day’s work in your life, are the words we live by. When we are approached by clients, we like to look at their photographic projects from both sides. We don’t just turn up and shoot, we like to solve problems and offer sound, deliverable solutions that give them an edge and give us a challenge. Whether they are looking for simple, no frills portraits or a more involved shoot for their latest advertising campaign or annual report, we deliver above and beyond. It’s that service which has earned us the enviable reputation we have today, just ask our clients.",
		score: 0,
		price: 30,
		emergency: false
	}, {
		_id: ObjectId("f00000000000000000000020"),
		firstName: 'Dan',
		lastName: 'Burman',
		email: 'dan.burman@dan.dan',
		phone: '+390007362864',
		address: {
			city: 'Roma',
			lat: 41.9102415,
			long: 12.3959139
		},
		profilePhoto: '/uploads/test/profile20.jpg',
		photos: [
			'/uploads/test/20a.jpg',
			'/uploads/test/20b.jpg',
			'/uploads/test/20c.jpg',
			'/uploads/test/20d.jpg'
		],
		tags: [
			ObjectId("a00000000000000000000040"),
			ObjectId("a00000000000000000000041")
		],
		description: "My name’s Dan, and I’ve been a professional photographer for over a decade. But I've been passionate about photography since I was a kid - I spent all my hard-earned pocket money and savings on a camera when I was only nine. Fast forward a few years, and I studied fine art at St Martins School of Art in London, where I specialised in photography. My artistic background has a big influence on how I create my photography today. Instead of producing standard shots, I love taking time with clients to create bold or unique images that stand out and really tell their story and reflect their character.",
		score: 0,
		price: 42,
		emergency: true,
		currentPosition: {
			lat: 41.8896336,
			long: 12.5073727,
		}
	}, {
		_id: ObjectId("f00000000000000000000021"),
		firstName: 'Shen',
		lastName: 'Fisco',
		email: 'shen.fisco99@sh.sh',
		phone: '+390007362864',
		address: {
			road: "Via Tuscolana",
			number: 689,
			city: 'Roma',
			lat: 41.8618329,
			long: 12.5514635,
		},
		profilePhoto: '/uploads/test/profile21.jpg',
		photos: [
			'/uploads/test/21a.jpg',
			'/uploads/test/21b.jpg',
			'/uploads/test/21c.jpg',
			'/uploads/test/21d.jpg',
			'/uploads/test/21e.jpg',
			'/uploads/test/21f.jpg',
			'/uploads/test/21g.jpg',
			'/uploads/test/21h.jpg',
			'/uploads/test/21i.jpg',
			'/uploads/test/21j.jpg',
			'/uploads/test/21k.jpg',
			'/uploads/test/21l.jpg',
		],
		tags: [
			ObjectId("a00000000000000000000040"),
			ObjectId("a00000000000000000000041"),
			ObjectId("a00000000000000000000042"),
			ObjectId("a00000000000000000000043")
		],
		description: "I am able to cover a wide range of photography such as wedding photography, baby & family photography, maternity photography, pet photography, headshots & portfolios, event photography, fashion photography, landscape photography, wildlife photography, action photography, sports photography, real estate photography, architecture photography, concerts, macro photography, food & travel, street photography, advertising photography & even stock photography.",
		score: 4.5,
		price: 34,
		emergency: false
	}, {
		_id: ObjectId("f00000000000000000000022"),
		firstName: 'Nick',
		lastName: 'Gianni',
		workName: "Nick's Photos",
		email: 'gianni00@ww.ot',
		phone: '+410007362864',
		address: {
			city: 'Lugano',
			lat: 46.0295779,
			long: 8.8547208,
		},
		profilePhoto: '/uploads/test/profile22.jpg',
		photos: [
			'/uploads/test/22a.jpg',
			'/uploads/test/22b.jpg',
			'/uploads/test/22c.jpg',
			'/uploads/test/18f.jpg',
			'/uploads/test/18g.jpg',
			'/uploads/test/18h.jpg',
			'/uploads/test/18i.jpg'
		],
		tags: [
			ObjectId("a00000000000000000000040"),
			ObjectId("a00000000000000000000041"),
			ObjectId("a00000000000000000000042"),
		],
		description: "I love photographing different types of weddings and telling the story of the big day in whichever form it takes. I photograph lots of Indian and other Asian weddings and am very experienced in photographing Hindu weddings and all of the events that surround the Indian weddings such as Mehndi ceremonies, Sangeet Garba and Chunni engagement events. I also work with couples from Hong Kong, Singapore and other parts of Asia who are having Chinese based wedding ceremonies and pre wedding photography sessions and love photographing the events around these types of weddings such as gatecrashing events, Chinese tea ceremonies and banquets. I have photographed many Chinese weddings in Hong Kong, Singapore and other parts of the world.",
		score: 0,
		price: 80,
		emergency: false
	}, {
		_id: ObjectId("f00000000000000000000023"),
		firstName: 'Giorgia',
		lastName: 'Pavone',
		workName: 'Corporate Photographer',
		email: 'giorgina@tt.kk',
		phone: '+410007362864',
		address: {
			road: "Via Ceresio",
			number: 11,
			city: 'Lugano',
			lat: 46.0169971,
			long: 8.9622036
		},
		profilePhoto: '/uploads/test/profile23.jpg',
		photos: [
			'/uploads/test/21a.jpg',
			'/uploads/test/21b.jpg',
			'/uploads/test/21c.jpg',
			'/uploads/test/21d.jpg',
			'/uploads/test/21e.jpg',
		],
		tags: [
			ObjectId("a00000000000000000000040"),
			ObjectId("a00000000000000000000041"),
			ObjectId("a00000000000000000000043"),
		],
		description: "I'M A PANORAMIC PHOTOGRAPHER, WORKING WORLDWIDE. HE IS KNOWN FOR SWEEPING CITYSCAPES THAT CAPTURE THE ESSENCE OF A SKYLINE, YET ALLOW THE VIEWER IN TO EXPERIENCE THE MINUTIAE OF THE CITY IN RAZOR-SHARP DETAIL. ONE OF HIS MAJOR PASSIONS IS TO DOCUMENT LONDON’S EVER-CHANGING SKYLINE IN ALL ITS CHAOS AND BEAUTY. WILL’S WORK COMPRISES CITYSCAPES, LANDSCAPES AND 360 PHOTOGRAPHY.",
		score: 0,
		price: 70,
		emergency: false
	}, {
		_id: ObjectId("f00000000000000000000024"),
		firstName: 'Flavio',
		lastName: 'Orlea',
		email: 'flavy@dan.dan',
		phone: '+410007362864',
		address: {
			city: 'Lugano',
			lat: 46.0295779,
			long: 8.8547208,
		},
		profilePhoto: '/uploads/test/profile24.jpg',
		photos: [
			'/uploads/test/21e.jpg',
			'/uploads/test/21l.jpg',
			'/uploads/test/19c.jpg',
			'/uploads/test/18b.jpg'
		],
		tags: [
			ObjectId("a00000000000000000000040"),
			ObjectId("a00000000000000000000041")
		],
		description: "I’ve have an incredibly lucky career, I’ve been on tour with the Black Eyed Peas, I’ve been commissioned by the Times, Telegraph, New York Times, Le Figaro, Reporters and El Pias. I’ve worked at Abbey Road Studios and in Hollywood and I’ve meet and photographed many incredible people and have produced a film that was broadcast National Geographic.",
		score: 0,
		price: 95,
		emergency: true,
		currentPosition: {
			lat: 46.012667,
			long: 8.9559602
		}
	}, {
		_id: ObjectId("f00000000000000000000025"),
		firstName: 'Kirill',
		lastName: 'Kozlov',
		workName: 'Kirill HeadShot',
		email: 'kirill@sh.sh',
		phone: '+410007362864',
		address: {
			road: "Via Zurigo",
			number: 50,
			city: 'Lugano',
			lat: 46.010079,
			long: 8.9483113,
		},
		profilePhoto: '/uploads/test/profile25.jpg',
		photos: [
			'/uploads/test/20a.jpg',
			'/uploads/test/20b.jpg',
			'/uploads/test/20c.jpg',
			'/uploads/test/20d.jpg',
			'/uploads/test/21e.jpg',
			'/uploads/test/21f.jpg',
			'/uploads/test/21g.jpg'
		],
		tags: [
			ObjectId("a00000000000000000000040"),
			ObjectId("a00000000000000000000041"),
			ObjectId("a00000000000000000000042"),
			ObjectId("a00000000000000000000043")
		],
		description: "Hello. Let me introduce myself. My name is Kirill Kozlov and my journey into the TV and Film industry began 20 years ago when I was studying to be a Director of Photography (DOP). So beautiful TV and film lighting is my thing! Luckily for everybody I brought those skills into shooting headshots.",
		score: 4.5,
		price: 73,
		emergency: false,
		ownerId: ObjectId("b00000000000000000000015"),
	}, {
		_id: ObjectId("f00000000000000000000026"),
		firstName: 'Nicholas',
		lastName: 'Gerard',
		workName: 'Nico Godden',
		email: 'nicogi@nic.nic',
		phone: '+0007362864',
		address: {
			road: "St. Albans Rd",
			number: 30,
			city: 'Londra',
			lat: 51.5605843,
			long: -0.1521165,
		},
		profilePhoto: '/uploads/test/profile26.jpg',
		photos: [
			'/uploads/test/26a.jpg',
			'/uploads/test/26b.jpg',
			'/uploads/test/26c.jpg',
			'/uploads/test/26d.jpg',
			'/uploads/test/26e.jpg',
			'/uploads/test/26f.jpg',
			'/uploads/test/26g.jpg',
		],
		tags: [
			ObjectId("a00000000000000000000040"),
			ObjectId("a00000000000000000000041"),
			ObjectId("a00000000000000000000043"),
		],
		description: "My name's Nico, I'm a professional London photographer specialised in creating exciting visual content for global brands, including FTSE100 companies. A key thing is to stay up to date with the latest marketing and photography trends to then get these two to meet in a happy place. For that reason I offer a catalogue of new ideas and techniques often the result of late night experiments in my studio.",
		score: 3,
		price: 46,
		emergency: false
	}, {
		_id: ObjectId("f00000000000000000000027"),
		firstName: 'Tom',
		lastName: 'Gold',
		email: 'tommy@gold.gold',
		phone: '+0007362864',
		address: {
			city: 'Londra',
			lat: 51.5287714,
			long: -0.2420447
		},
		profilePhoto: '/uploads/test/profile27.jpg',
		photos: [
			'/uploads/test/27a.jpg',
			'/uploads/test/27b.jpg',
			'/uploads/test/27c.jpg',
			'/uploads/test/27d.jpg',
			'/uploads/test/27e.jpg',
		],
		tags: [
			ObjectId("a00000000000000000000040"),
			ObjectId("a00000000000000000000041"),
			ObjectId("a00000000000000000000044")
		],
		description: "Over the past ten years I’ve worked as a full time professional wedding photographer in London and the South East. In that time I’ve photographed over 350 weddings and have developed a distinct, but timeless style which is both modern and classic. I consistently create exceptional photographs, with a calm and unobtrusive approach. Keeping things simple, I capture events as they happen throughout the day, with a reportage / documentary method of observational photography, along with loosely directed images and formal family photography where required. I not only love working with natural light, but also the challenge of low light and the subtle colours that it creates. I draw inspiration from all corners including photojournalism, architecture, renaissance art and visual aspects of past eras such as art deco design, old movies and vintage fashion.",
		score: 0,
		price: 52,
		emergency: true,
		currentPosition: {
			lat: 51.6413265,
			long: 0.1390522
		}
	}, {
		_id: ObjectId("f00000000000000000000028"),
		firstName: 'Matthew',
		lastName: 'Joseph',
		email: 'matt@sh.sh',
		phone: '+10007362864',
		address: {
			road: "Dulwich Road",
			number: 22,
			city: 'Londra',
			lat: 51.4546852,
			long: -0.1112987,
		},
		profilePhoto: '/uploads/test/profile28.jpg',
		photos: [
			'/uploads/test/28a.jpg',
			'/uploads/test/28b.jpg',
			'/uploads/test/28c.jpg',
			'/uploads/test/28d.jpg',
			'/uploads/test/21e.jpg',
			'/uploads/test/21f.jpg',
			'/uploads/test/21g.jpg'
		],
		tags: [
			ObjectId("a00000000000000000000040"),
			ObjectId("a00000000000000000000041"),
			ObjectId("a00000000000000000000044")
		],
		description: "Matthew Joseph is a commercial and advertising photographer, specialising in portraiture and lifestyle photography. Based in London but gladly following his work around the world, his bold and vibrant style is commissioned by various clients across the advertising, corporate, editorial and music industries. He has an obvious love for the camera and his art and is constantly seeking to push boundaries within the constraints of the brief. Striving to evoke emotion in each image, his work is honest, fun and original whilst remaining sensitive to the subject and brand. Matthew was recently awarded RICS Infrastructure of the year 2016, and his latest awareness campaign for Tideway, called 'River People', also made it to a prestigious solo exhibition in Westminster, London. His work received national press coverage on TV, radio and in the newspapers, as well as being recommended by Time Out.",
		score: 0,
		price: 50,
		emergency: false
	}, {
		_id: ObjectId("f00000000000000000000029"),
		firstName: 'Fiona',
		lastName: 'Kelly',
		email: 'fiona@g.g',
		phone: '+390007362864',
		profilePhoto: '/uploads/test/profile29.jpg',
		address: {
			road: "Via Cenisio",
			number: 100,
			city: 'Milano',
			lat: 45.4879072,
			long: 9.1562021,
		},
		photos: [
			'/uploads/test/29a.jpg',
			'/uploads/test/29b.jpg',
			'/uploads/test/29c.jpg',
			'/uploads/test/29d.jpg',
			'/uploads/test/29e.jpg',
			'/uploads/test/29f.jpg',
			'/uploads/test/29g.jpg'
		],
		tags: [
			ObjectId("a00000000000000000000040"),
			ObjectId("a00000000000000000000041"),
			ObjectId("a00000000000000000000042"),
			ObjectId("a00000000000000000000044")
		],
		description: "My name is Fiona Kelly, the founder and the principal wedding photographer of the one man band that is RawSilk Photography. I grew up in rural Sweden but now live in East London with my wife Camilla and my two girls, Betty and Agnes. I became a professional photographer after years of assisting on everything from fashion shoots for British Vogue to movie franchises like Harry Potter. In recent years I have shot  commercially for global brands including L’Oréal, King of Shaves and Chivas working with A’list actors like Chiwetel Ejiofor, Idris Elba and Oscar Isaac. I started RawSilk back in 2006 because, as much as I enjoy my commercial work www.stefanlacandler.co.uk, it is a very special feeling to be entrusted with photographing someone’s wedding. I’ve shot weddings all over the place, in Scotland, Italy, France, Denmark, Sweden and Thailand and my work has been published in GQ, Men’s Health, Condé Nast Brides, London Bride and Love my Dress to mention but a few. I work in a reportage style and I think this is how it should be. I shoot almost exclusively with natural light and I do all my own editing and retouching. I don’t airbrush or play around with filters or other gimmicks. I like telling it like it is in the most beautiful way possible. Most importantly I aim to give a true depiction of what actually happened on the day,  how you remembered it. I have photographed over 200 weddings as well as numerous films and commercials but you can never afford to get complacent. Every wedding is a fresh start with new possibilities and risks. That’s what keeps me on my toes, what keeps it interesting for me and what makes me want to keep doing what I do.",
		score: 4,
		price: 30,
		emergency: false
	}, {
		_id: ObjectId("f00000000000000000000030"),
		firstName: 'Stefania',
		lastName: 'Lacandler',
		workName: 'Stephoto',
		email: 'ste@c.t',
		phone: '+390007362864',
		address: {
			road: "via Giuseppe Ripamonti",
			number: 40,
			city: 'Milano',
			lat: 45.4461728,
			long: 9.1957023,
		},
		profilePhoto: '/uploads/test/profile30.jpg',
		tags: [
			ObjectId("a00000000000000000000040"),
			ObjectId("a00000000000000000000041"),
		],
		description: "I am a highly experienced London based family Portrait Photographer specialising in pregnancy photography, newborn and baby photography and location children's photography in London and surrounding areas. With over 12 years experience in portrait photography, I cover West London, North London, South West London, Richmond and Windsor and anywhere in between!  My studio which is used for the maternity shoots and newborn shoots, however family shoots are generally done on location.  I can recommend some amazing places to go for your location shoot.",
		score: 0,
		price: 25,
		emergency: false
	}, {
		_id: ObjectId("f00000000000000000000031"),
		firstName: 'Lara',
		lastName: 'Varoni',
		email: 'lara.varoni@gold.gold',
		phone: '+390007362864',
		address: {
			city: 'Milano',
			lat: 45.4628327,
			long: 9.1075206,
		},
		profilePhoto: '/uploads/test/profile31.jpg',
		photos: [
			'/uploads/test/31a.jpg',
			'/uploads/test/31b.jpg',
			'/uploads/test/31c.jpg',
			'/uploads/test/31d.jpg',
			'/uploads/test/31e.jpg',
			'/uploads/test/31f.jpg',
		],
		tags: [
			ObjectId("a00000000000000000000040"),
			ObjectId("a00000000000000000000041"),
			ObjectId("a00000000000000000000042")
		],
		description: "No event is the same.  Each type of event is different and requires not just the right style of event photography but also the right type of event photographer.  A corporate event photographer needs to be smart and efficient. Private party photographers need to capture the spirit of your party. PR event photographers need to work to tight deadlines and syndicate to press. Behind the scenes photographers need to be discrete. Children’s party photographers need to be quick and nimble.  Music and theatre photographers  need to work well in low light conditions.  We match you to the right photographer for your event to ensure you get photographs you love.",
		score: 0,
		price: 55,
		emergency: true,
		currentPosition: {
			lat: 45.5097668,
			long: 9.2335272
		}
	}, {
		_id: ObjectId("f00000000000000000000032"),
		firstName: 'Matteo',
		lastName: 'Gecco',
		email: 'gecco@sh.sh',
		phone: '+390007362864',
		address: {
			city: 'Milano',
			lat: 45.4628327,
			long: 9.1075206,
		},
		photos: [
			'/uploads/test/32a.jpg',
			'/uploads/test/32b.jpg',
			'/uploads/test/32c.jpg',
			'/uploads/test/32d.jpg',
			'/uploads/test/32e.jpg',
			'/uploads/test/32f.jpg',
			'/uploads/test/32g.jpg'
		],
		tags: [
			ObjectId("a00000000000000000000040"),
			ObjectId("a00000000000000000000041"),
			ObjectId("a00000000000000000000044")
		],
		description: "Hi, I'm Matteo, a wedding photographer based in Milan. I've been shooting weddings for 7 years after a career in graphic design and walking my dog. The wider world beckoned and it's safe to say the opportunities wedding photography has given me must make it one of the best jobs out there. Read on if you want to find out more about how I go about photographing a wedding and my slightly unhealthy obsession with using light creatively. My style of wedding photography is probably best described as creative documentary with contemporary portraiture. There’s lots of buzz words around in wedding photography so I’ll explain exactly what that means. When I first started wedding photography I was determined to do it in a way which exemplified everything I love about photography, and just as importantly, to avoid all the things I don’t like! The idea of being a traditional wedding photographer sent shivers down my spine. Herding people around, getting in the way and being the object of disdain wasn’t my idea of a fun Saturday!",
		score: 0,
		price: 70,
		emergency: false
	}, {
		_id: ObjectId("f00000000000000000000033"),
		firstName: 'Federica',
		lastName: 'Fracco',
		workName: 'Sole Beauty',
		email: 'fede.fracco@cc.cc',
		phone: '+390007362864',
		address: {
			road: "via Emilio Broglio",
			number: 30,
			city: 'Milano',
			lat: 45.5022753,
			long: 9.159989,
		},
		profilePhoto: '/uploads/test/profile33.jpg',
		photos: [
			'/uploads/test/33a.jpg',
			'/uploads/test/33b.jpg',
			'/uploads/test/33c.jpg',
			'/uploads/test/33d.jpg',
			'/uploads/test/33e.jpg',
			'/uploads/test/33f.jpg'
		],
		tags: [
			ObjectId("a00000000000000000000035"),
			ObjectId("a00000000000000000000036"),
			ObjectId("a00000000000000000000037"),
			ObjectId("a00000000000000000000029"),
			ObjectId("a00000000000000000000033")
		],
		description: "Our mission at Sole Beauty is to make quality waxing & stunning nails affordable and accessible by all by offering you expert beauty treatments at all our salons, which we currently have 4 in London. We offer a range of beauty treatments, including Hair Removal Waxing (both Hot and Warm wax), Threading, Manicure and Pedicure, Shellac Nail Polish, Body Massages, Eyelash Extensions, and Brow Tinting- all at great prices. Although we offer all essential beauty treatments, Waxing is our thing! We love it and our clients love us for it, and I strongly believe you will too will once you’ve tried our Brazilian or Hollywood Bikini Waxing. Our moto is ‘quality for less’, so we give you affordable waxing and beauty treatments without compromising on quality, therefore enjoy upto 30% Discount on your 1st visit to any of our beauty hubs. By renting small but neat places within established salons, we ensure that our sole focus is on providing first class waxing and nail treatments to our clients, who appreciate quality service and personal touch. So stop by one of our central London locations for your bespoke Waxing or beauty treatment, and we can assure you that once you’ve tried Sole Beauty’s waxing, you will never try another.",
		score: 0,
		price: 34,
		emergency: false
	}, {
		_id: ObjectId("f00000000000000000000034"),
		firstName: 'Giovannina',
		lastName: 'Parisi',
		workName: 'GioGio Nails',
		email: 'gecco@sh.sh',
		phone: '+390007362864',
		address: {
			city: 'Milano',
			lat: 45.4628327,
			long: 9.1075206,
		},
		photos: [
			'/uploads/test/34a.jpg',
			'/uploads/test/34b.jpg',
			'/uploads/test/34c.jpg'
		],
		tags: [
			ObjectId("a00000000000000000000033"),
			ObjectId("a00000000000000000000034"),
			ObjectId("a00000000000000000000035")
		],
		description: "We are known for our wonderful beauty treatments from waxing to facials and non-surgical treatments. We’re proud of these excellent treatments and of our expertise, but that’s not all – we take your comfort seriously. When you have a treatment with us you can be sure your therapist will be lovely and approachable, making you feel at home in a relaxed atmosphere and beautiful setting. Our fantastic team of therapists are on hand to offer tips and advice, but will equally provide you with a calm environment if you so desire. A choice of refreshments will be offered to you on arrival and we offer an array of magazines if you fancy some light reading while you have your treatment.  You can even browse through our Environ and Dermalogica skin products, or our latest Bare Minerals make-up selection, all on display in the reception.",
		score: 0,
		price: 23,
		emergency: false
	}, {
		_id: ObjectId("f00000000000000000000035"),
		firstName: 'Francesca',
		lastName: 'Lente',
		email: 'francy@j.j',
		phone: '+390007362864',
		address: {
			road: "via Mecenate",
			number: 5,
			city: 'Milano',
			lat: 45.456147,
			long: 9.2418307
		},
		profilePhoto: '/uploads/test/profile35.jpg',
		tags: [
			ObjectId("a00000000000000000000033"),
			ObjectId("a00000000000000000000034"),
			ObjectId("a00000000000000000000035")
		],
		description: "We only use the finest products for our treatments including St. Tropez, Nailtiques, Lycon Wax & Shellac & Vinylux, GHD, La La Lashes and Crystal Clear. All our 5 treatment rooms are fully air-conditioned and we have one dedicated tanning room. Chequers Leadenhall is centrally located in the city - near EC1, EC2, EC3 and EC4 with all the main stations and underground a maximum of 3-15 minutes' walk. These include; London Bridge, Liverpool Street, Canon Street, Fenchurch Street, St. Pauls, Mansion House, Bank, Tower Hill, Aldgate and Monument. Also only a 12 minute DLR train ride from Canary Wharf station to Bank station.",
		score: 0,
		price: 50,
		emergency: false
	}, {
		_id: ObjectId("f00000000000000000000036"),
		firstName: 'Carola',
		lastName: 'Didena',
		workName: 'Carol Brauty',
		email: 'carol@sh.sh',
		phone: '+390007362864',
		address: {
			road: "via Papiria",
			number: 15,
			city: 'Roma',
			lat: 41.8641138,
			long: 12.5568166
		},
		profilePhoto: '/uploads/test/profile36.jpg',
		photos: [
			'/uploads/test/36a.jpg',
			'/uploads/test/36b.jpeg',
			'/uploads/test/36c.jpg',
			'/uploads/test/36d.jpg',
			'/uploads/test/36e.jpg',
		],
		tags: [
			ObjectId("a00000000000000000000029"),
			ObjectId("a00000000000000000000033"),
			ObjectId("a00000000000000000000034"),
			ObjectId("a00000000000000000000035")
		],
		description: "We are an East End family run business with a wealth of experience in our profession and are dedicated to ensuring you receive the best possible service. We treat all skin conditions including premature aging, acne, sensitised, pigmentation, dehydrated, dry, oily and sun damaged. That is why we use only the finest ingredients available and all of our products contain no irritating artificial colours, fragrances and no S.D. alcohol. They are also cruelty free, having never been tested on animals. You are guaranteed a warm and friendly welcome from our helpful and qualified therapist and staff on every visit. So for mineral salt scrub therapy that'll leave your skin glowing and provide critical hydration and nourishment your skin need, we're only a phone call away and we look forward to hearing from you.",
		score: 0,
		price: 45,
		emergency: false
	}, {
		_id: ObjectId("f00000000000000000000037"),
		firstName: 'Karine',
		lastName: 'Fiscora',
		email: 'karine@jk.k',
		phone: '+390007362864',
		address: {
			city: 'Roma',
			lat: 41.9102411,
			long: 12.39557
		},
		profilePhoto: '/uploads/test/profile37.jpg',
		photos: [
			'/uploads/test/37a.jpg',
			'/uploads/test/37b.jpg',
			'/uploads/test/37c.jpg',
			'/uploads/test/37d.jpg',
			'/uploads/test/37e.jpg',
			'/uploads/test/37f.jpg',
		],
		tags: [
			ObjectId("a00000000000000000000029"),
			ObjectId("a00000000000000000000033"),
			ObjectId("a00000000000000000000034"),
			ObjectId("a00000000000000000000035"),
			ObjectId("a00000000000000000000036")
		],
		description: "Welcome to The Cove Spa Specialists in results driven skincare, relaxing holistic therapies and industry leading beauty treatments... Multi-award winning Cove Spa is renowned for its 'personalised' and cutting edge service where exceeding your expectations is our philosophy. A team of specialists who together have over 150 years of body, beauty and skincare experience is at hand when you visit one of our boutique [cosy, intimate and warm] spas - each one independently run to fully embrace the locality; currently spread across highly-desirable locations in London and Hertfordshire. Awarded 'Spa of the Year 2016' for the second year running, at the London Hair & Beauty Awards and 'The Most Commended Spa' at the prestigious British Beauty Awards, is testimony to the wide selection of high quality treatments and rituals we provide in a calm and relaxing ambience - open seven days a week, with late evenings midweek, just for you... ",
		score: 2,
		price: 34,
		emergency: false
	}, {
		_id: ObjectId("f00000000000000000000038"),
		firstName: 'Jessica',
		lastName: 'Giacomini',
		email: 'jess.giacomini@l.l',
		phone: '+390007362864',
		address: {
			road: "via Aurelia",
			number: 30,
			city: 'Roma',
			lat: 41.8999262,
			long: 12.4507087
		},
		profilePhoto: '/uploads/test/profile38.jpg',
		tags: [
			ObjectId("a00000000000000000000029"),
			ObjectId("a00000000000000000000033"),
			ObjectId("a00000000000000000000034"),
			ObjectId("a00000000000000000000035"),
			ObjectId("a00000000000000000000036")
		],
		description: "Aquarius Beauty is a beauty salon based in Finsbury Park, North London which is an extension of a family business specialising in hair and beauty, established for over 30 years. We are proud to offer outstanding customer service at all times by a highly skilled team of therapists. As well as offering a wide range of treatments we have a highly regarded reputation in our waxing department where our speciality is Brazilian waxing. Whether you are looking for a facial, manicure, therapeutic massage, waxing or microdermabrasion, Aquarius Beauty is the perfect place for a quick wax, simple pampering or an indulgence of luxury.",
		score: 0,
		price: 50,
		emergency: false
	}, {
		_id: ObjectId("f00000000000000000000039"),
		firstName: 'Marco',
		lastName: 'Valsini',
		email: 'marco.valsini@usssi.ch',
		phone: '+410007365864',
		address: {
			road: "via Zurigo",
			number: 5,
			city: 'Lugano',
			lat: 46.0112796,
			long: 8.9531329
		},
		profilePhoto: '/uploads/test/profile39.jpg',
		photos: [
			'/uploads/test/39a.jpg',
			'/uploads/test/39b.jpg',
			'/uploads/test/39c.JPG',
		],
		tags: [
			ObjectId("a00000000000000000000009"),
			ObjectId("a00000000000000000000038"),
			ObjectId("a00000000000000000000013")
		],
		description: "Hello, my name is Marco Valsini. About me, my experience in the field of civil and plumbing engineering is 10 years old. I followed mainly residential and industrial tecnological systems for heating and air conditioning. Some years ago I began to collaborate with an plumbing Engineer, to project hydraulic solution for rivers' protections. I made some projects for heating and air conditioning system, expecially with the use of best available tecnologies, for example in the field of renovanle energy (solar, geothermal..). At the same time I collaborated for some hydraulic projects like systems of rivers' protections, hydraulic systems in the project of roads. I am available also as Handyman, or as general plumber. Contact me! Cheers, Marco!",
		price: 150,
		emergency: false
	}, {
		_id: ObjectId("f00000000000000000000040"),
		firstName: 'Juliette',
		lastName: 'Foxy',
		profilePhoto: '/uploads/test/profile40.jpg',
		email: 'juliette.foxy@pinkplumbers.com',
		photos: [
			'/uploads/test/9a.jpg',
			'/uploads/test/9b.jpg',
			'/uploads/test/9c.jpg',
			'/uploads/test/9d.jpg',
			'/uploads/test/9e.jpg',
			'/uploads/test/9f.jpg',
			'/uploads/test/9g.jpg',
			'/uploads/test/9h.jpg',
			'/uploads/test/9i.jpg',
		],
		address: {
			city: 'London',
			lat: 51.5605843,
			long: -0.1521165,
		},
		description: "I work for the Pink Plumbers company. The company has been operating since 2003, delivering consistent and considerate plumbing services to our customers, and even during the recent recession has shown annual growth. Operating under a national licence structure, our female plumbers are able to meet the needs of their local market whilst you and they benefit from a nationally recognised brand. We offer a wide range of plumbing services to our customers and ensure our plumbers are qualified to carry out those services. We operate within a set of guidelines based on the Pink Plumbers values, with support where needed. We are a Plumbing business that recognises that there is currently a lack of female plumbers operating independently in their local communities, and where they do exist it's often hard for customers to find them. At Pink Plumbers we help to close the gap between female plumbers qualifying and operating as plumbers in their community. Contact me!",
		price: 90,
		tags: [
			ObjectId("a00000000000000000000038"),
			ObjectId("a00000000000000000000014"),
			ObjectId("a00000000000000000000015"),
			ObjectId("a00000000000000000000016")
		],
		emergency: false,
		score: 4.5,
		ownerId: ObjectId("b00000000000000000000017"),
	}, {
		_id: ObjectId("f00000000000000000000041"),
		firstName: 'Jason',
		lastName: 'Rual',
		profilePhoto: '/uploads/test/profile41.jpg',
		email: 'andreas.rual@plumbers.uk',
		address: {
			city: 'London',
			lat: 51.580218,
			long: -0.1724787,
		},
		description: "Jason is a third generation Davis plumber. He started his career in the plumbing industry in 2001 with Herb Davis Plumbing. Jason specializes in all areas of plumbing including commercial, residential, and service. His experience in the field of civil and plumbing engineering is 16 years old. He has big knowledge about AUTOCAD and some of the most famous engineering software.",
		price: 160,
		tags: [
			ObjectId("a00000000000000000000015"),
			ObjectId("a00000000000000000000013"),
			ObjectId("a00000000000000000000038"),
			ObjectId("a00000000000000000000014"),
			ObjectId("a00000000000000000000010")
		],
		emergency: true,
		currentPosition: { //Londra
			lat: 51.450506,
			long: -0.0849006
		}
	}, {
		_id: ObjectId("f00000000000000000000042"),
		firstName: 'Richard',
		lastName: 'Bragk',
		email: 'richard.bragk@gmail.com',
		profilePhoto: '/uploads/test/profile42.jpg',
		address: {
			city: 'London',
			lat: 51.513366,
			long: -0.2023167,
		},
		photos: [
			'/uploads/test/8a.jpg',
			'/uploads/test/8b.jpg',
			'/uploads/test/8c.JPG',
		],
		description: "I have over 15 years of experience in the plumbing industry, specializing in plumbing for new construction, residential homes, and commercial properties. I am an expert at new copper installation and pipe fitting. I am originally from South Africa where I obtained a degree in plumbing engineering. If you are interested in it, please contact me!",
		price: 30,
		tags: [
			ObjectId("a00000000000000000000038"),
			ObjectId("a00000000000000000000010"),
			ObjectId("a00000000000000000000013")
		],
		emergency: false,
	}, {
		_id: ObjectId("f00000000000000000000043"),
		firstName: 'Marianice',
		lastName: 'Porcu',
		phone: '+39 329445678',
		profilePhoto: '/uploads/test/profile43.jpg',
		email: 'marianice.porcu@womanplumber.it',
		photos: [
			'/uploads/test/9a.jpg',
			'/uploads/test/9b.jpg',
			'/uploads/test/9c.jpg',
			'/uploads/test/9d.jpg',
			'/uploads/test/9e.jpg',
			'/uploads/test/9f.jpg',
			'/uploads/test/9g.jpg',
			'/uploads/test/9h.jpg',
			'/uploads/test/9i.jpg',
		],
		address: {
			city: 'Milan',
			lat: 45.4627124,
			long: 9.1076924,
		},
		description: "I believe that plumber work is not only for man! I am attracted by this work since I was a child, now I repute that my company is one of the biggest in Italy. There are around 10 female plumbers that operate in all the country.  I operate within a set of guidelines based on the plumbers values. I recognise that there is currently a lack of female plumbers operating independently in their local communities, and where they do exist it's often hard for customers to find them. My company helps to close the gap between female plumbers qualifying and operating as plumbers in their community.I have a bachelor degree in plumber engineering. I know some of the most famous engineering software. If you retain that I am the worker perfect for you, contact me by e-mail or phone! I am available everyday from 8.00 am to 9.00 pm.",
		price: 45,
		score: 4.5,
		tags: [
			ObjectId("a00000000000000000000038"),
			ObjectId("a00000000000000000000014"),
			ObjectId("a00000000000000000000013"),
			ObjectId("a00000000000000000000015"),
			ObjectId("a00000000000000000000016"),
			ObjectId("a00000000000000000000010")
		],
		emergency: false,
	}, {
		_id: ObjectId("f00000000000000000000044"),
		firstName: 'Matteo',
		lastName: 'Corrotti',
		profilePhoto: '/uploads/test/profile44.jpg',
		email: 'matteo.corrotti@gmail.com',
		address: {
			city: 'Milan',
			lat: 45.441277,
			long: 9.1010403,
		},
		photos: [
			'/uploads/test/44a.jpg',
			'/uploads/test/44b.jpg',
			'/uploads/test/44c.jpg',
		],
		description: "I start my career in the plumbing industry in 2005 with Herb Davis Plumbing. I am specialized in all areas of plumbing including commercial, residential, and service. My experience in the field of civil and plumbing engineering is 12 years old. He has big knowledge about AUTOCAD and some of the most famous engineering software. I have also some basic knowledge as carpenter and electrician.",
		price: 83,
		tags: [
			ObjectId("a00000000000000000000017"),
			ObjectId("a00000000000000000000018"),
			ObjectId("a00000000000000000000015"),
			ObjectId("a00000000000000000000013"),
			ObjectId("a00000000000000000000038"),
			ObjectId("a00000000000000000000014"),
			ObjectId("a00000000000000000000010")
		],
		emergency: true,
		currentPosition: { //Milano
			lat: 45.430075,
			long: 9.2002603
		}
	}, {
		_id: ObjectId("f00000000000000000000045"),
		firstName: 'Cristiano',
		lastName: 'Barba',
		email: 'barba94@gmail.com',
		address: {
			city: 'Milan',
			lat: 45.430075,
			long: 9.1324112,
		},
		photos: [
			'/uploads/test/8a.jpg',
			'/uploads/test/8b.jpg',
			'/uploads/test/8c.JPG',
			'/uploads/test/45a.jpg',
			'/uploads/test/45b.jpg',
			'/uploads/test/45c.jpg',
		],
		description: "I have over 15 years of experience in the plumbing industry, specializing in plumbing for new construction, residential homes, and commercial properties. I am an expert at new copper installation and pipe fitting. I am originally from America where I obtained a degree, with excellent results, in plumbing engineering. I am available every work-day from 9.00 am to 7.00 pm. If you are interested in it, please contact me some days before!",
		price: 35,
		tags: [
			ObjectId("a00000000000000000000038"),
			ObjectId("a00000000000000000000010"),
			ObjectId("a00000000000000000000013")
		],
		emergency: false,
	}, {
		_id: ObjectId("f00000000000000000000046"),
		firstName: 'Roberta',
		lastName: 'Souto',
		email: 'roberta.souto@gmail.com',
		profilePhoto: '/uploads/test/profile46.jpg',
		address: {
			city: 'Lugano',
			lat: 46.01742,
			long: 8.9860853,
		},
		photos: [
			'/uploads/test/46a.jpg',
			'/uploads/test/46b.jpg',
			'/uploads/test/46c.jpg',
			'/uploads/test/46d.jpg',
			'/uploads/test/46e.jpg',
			'/uploads/test/46f.jpg',
			'/uploads/test/46g.jpg',
			'/uploads/test/46h.jpg',
			'/uploads/test/46i.png'
		],
		description: "About the Designer: Roberta Souto, 36, Industrial Designer graduate from ESDI/ UERJ (Rio de Janeiro, RJ - Brazil) with a 5-year BA degree. I have almost 10 years experience working with packaging and I have knowledge in both graphic design and product design. One of my designs was a finalist at the 2012 HBA International Package Design Awards in New York City. Before that I was the head designer, product developer and creative director of a manufacturer for 5 years, working with worldwide retail chains like TJ Maxx, Bath Bed & Beyond, Petsmart and Toys R Us to name a few, besides coordinating production in a equally global level. My background in Industrial Design helps me to not limit myself to just one field of design and I have worked with everything from brochures to dog toys to food packaging. I have had the great opportunity to work with large retail chains as well as small start-ups. I'm a creative person, but I'm also very interested in business topics and one of my passions is to support small businesses to take their products and services to the next level.",
		price: 105,
		score: 4.5,
		tags: [
			ObjectId("a00000000000000000000012"),
			ObjectId("a00000000000000000000019"),
			ObjectId("a00000000000000000000032"),
			ObjectId("a00000000000000000000005"),
			ObjectId("a00000000000000000000020"),
			ObjectId("a00000000000000000000021"),
			ObjectId("a00000000000000000000022")

		],
		emergency: false,
	}, {
		_id: ObjectId("f00000000000000000000047"),
		firstName: 'Philip',
		lastName: 'Mauros',
		email: 'philip.mauros@gmail.com',
		phone: '+41 0756783223',
		profilePhoto: '/uploads/test/profile47.jpg',
		address: {
			city: 'Lugano',
			lat: 46.012771,
			long: 8.9610223,
		},
		description: "Hello, I'm Phil, a product / industrial designer and innovation consultant with 6 years of experience designing products for in-house design companies, creative agencies and freelance clients. I've designed over 20 products from brief to manufacture across the consumer, nursery and furniture industries. This including trips to China to work with the manufacturing supplier. I'm passionate about designing useful and beautiful products that are a joy to use.",
		tags: [
			ObjectId("a00000000000000000000012"),
			ObjectId("a00000000000000000000023"),
			ObjectId("a00000000000000000000024"),
			ObjectId("a00000000000000000000025"),
			ObjectId("a00000000000000000000026"),
			ObjectId("a00000000000000000000027")
		],
		emergency: true,
		price: 55,
		currentPosition: { //Lugano
			lat: 46.018612,
			long: 8.950165
		}
	}, {
		_id: ObjectId("f00000000000000000000048"),
		firstName: 'Maria',
		lastName: 'Gorskaya',
		email: 'maria.gorskaya@hotmail.com',
		profilePhoto: '/uploads/test/profile48.jpg',
		address: {
			city: 'Lugano',
			lat: 46.00663,
			long: 8.9552723,
		},
		price: 30,
		photos: [
			'/uploads/test/48a.jpg',
			'/uploads/test/48b.jpg',
			'/uploads/test/48c.jpg'
		],
		description: "Hello, I'm Maria !  Thanks for visiting my profile! Specialist -Graphic Design, Illustration,  Web Design, 3D modeling! I have extensive experience in the design of websites for different services! I am sociable, easily and quickly trained specialist. I am able to work in a team . The presence of artistic taste and creative thinking , the ability to analyze helps me solve the customer problems quickly and on time. Good skills in graphics programs - Adobe Photoshop, Adobe Illustrator, Adobe InDesign , 3ds Max, Zbrush, Adobe After Effects! High quality and terms of work, I guarantee ! Thank you for visiting my profile! Hope cooperation with you! ",
		tags: [
			ObjectId("a00000000000000000000012"),
			ObjectId("a00000000000000000000007"),
			ObjectId("a00000000000000000000026"),
			ObjectId("a00000000000000000000028")
		],
		emergency: false,
	}, {
		_id: ObjectId("f00000000000000000000049"),
		firstName: 'Carlos',
		lastName: 'Sarusso',
		workName: 'Carlos S.',
		email: 'carlos.s@sarusso.com',
		profilePhoto: '/uploads/test/profile49.jpg',
		address: {
			city: 'Lugano',
			lat: 46.00663,
			long: 8.9487063,
		},
		price: 95,
		description: "I am a highly proficient and creative PowerPoint Specialist. I am savvy about your needs for developing documents, slides, images, banners, and more for compelling and high-quality visual presentations. My services are: EDITION & FORMATING: Editing existing Artwork (or creating it) and improving them by using design techniques; CREATION: Creating a new Artworks from documents (Word, PDF, websites, hand drawings, PSD, EPS, etc); GRAPHICS: Insertion of Charts and Graphs based on data; ICONOGRAPHY: Insertion of icons for pictographic representation; HD IMAGERY: HD Stock imagery used, licenced and ready to use (adobe Photoshop primary tool used); ANIMATION: Configuration, timing set up, creation of sceenes with animation or transitions; VIDEO: Creation of video from slides and edition using Adobe Premiere, Camtasia or PowerPoint.",
		tags: [
			ObjectId("a00000000000000000000012"),
			ObjectId("f00000000000000000000049")
		],
		emergency: false,
	}, {
		_id: ObjectId("f00000000000000000000050"),
		firstName: 'Anna',
		lastName: 'Amoruso',
		email: 'anna.amoruso@designfordesign.com',
		profilePhoto: '/uploads/test/profile50.jpg',
		address: {
			city: 'Roma',
			lat: 41.918161,
			long: 12.4589563,
		},
		photos: [
			'/uploads/test/50a.jpg',
			'/uploads/test/50b.jpg',
			'/uploads/test/50c.jpg',
			'/uploads/test/50d.jpg',
			'/uploads/test/50e.jpg',
			'/uploads/test/50f.png'
		],
		price: 45,
		description: "Let me tell you a little about myself. I have been a graphic designer for over twenty years. For the past fifteen years, I have been a freelance graphic designer. I am a creative, reliable, hard-working designer who has helped businesses and individuals sell their products, their services, and their ideas. I have designed a variety of brochures, annual reports, logos, posters, packaging, magazine/book layout, ads, and other marketing pieces. I am proficient with industry-standard design software including InDesign, Photoshop, and Illustrator. I also have a thorough knowledge of preflighting files, prepress and offset printing process. My work has appeared in such television programs as 60 Minutes©, The Mentalist© and in print such as USA Today®. I take great pride in the design work I create and always strive to deliver an effective, focused, and on-target product that fits my clients needs and goals.",
		tags: [
			ObjectId("a00000000000000000000005"),
			ObjectId("a00000000000000000000012")
		],
		emergency: true,
		currentPosition: { //Roma
			lat: 41.876762,
			long: 12.5743123
		}
	}, {
		_id: ObjectId("f00000000000000000000051"),
		firstName: 'Susanna',
		lastName: 'Grace',
		email: 'susanna@grace.it',
		workName: 'Susi',
		phone: '+39 3267832329',
		profilePhoto: '/uploads/test/profile51.jpg',
		address: {
			city: 'Roma',
			lat: 41.845439,
			long: 12.4496863,
		},
		price: 85,
		description: "I am a graphic designer based in New York. I have served businesses and individuals in over eight countries and in countless industries. My specialties include designing marketing material such as brochures, catalogs, banners and flyers; as well as pdfs, social media graphics, white papers etc. My favorite projects to work on are print design but I also enjoy working on graphics and banners for the web and custom illustration. I love what I do and truly take pride in producing the high quality work as well as great customer service to my clients.",
		tags: [
			ObjectId("a00000000000000000000032"),
			ObjectId("a00000000000000000000012")
		],
		emergency: false,
	}, {
		_id: ObjectId("f00000000000000000000052"),
		firstName: 'Daniele',
		lastName: 'Rossi',
		email: 'dani@grace.it',
		phone: '+39 3296386439',
		profilePhoto: '/uploads/test/profile52.jpg',
		address: {
			city: 'Roma',
			lat: 41.959848,
			long: 12.5484063,
		},
		photos: [
			'/uploads/test/0a.jpg',
			'/uploads/test/0b.jpg',
			'/uploads/test/0c.jpg',
			'/uploads/test/0d.jpg',
			'/uploads/test/0e.png',
			'/uploads/test/0f.jpg',
		],
		price: 60,
		score: 3.5,
		description: "10+ yrs as an UI/UX Designer, working for Coursera, Faber Castell, Skoda, GoGetFunding, oDesk, various agencies and 50+ startups. Over the years I had many titles: Graphic Designer, Web Designer, Mobile & App Designer, and, in the past 5 years, as the market became more aware of UX: UX Consultant. I can guide your project through the entire design process: from analysis, to wireframes, to interactive prototypes and finally to user-friendly interfaces that are both beautiful and efficient. Here are the services that I offer: UX Consultant: UX Expert Review (UX Audit), Wire-framing, Prototyping, Conversion Rate Optimisation, A/B Testing User Interface Designer: Website Design, Landing Page Design for conversion, Mobile Website and Mobile App design, Desktop Software design. I am friendly, easy-going and passionate about what I do, so if you are in need of UI or UX design help or just want to say 'Hi', don't hesitate to contact me.",
		tags: [
			ObjectId("a00000000000000000000006"),
			ObjectId("a00000000000000000000012"),
			ObjectId("a00000000000000000000007")
		],
		emergency: false,
	}, {
		_id: ObjectId("f00000000000000000000053"),
		firstName: 'Giulia',
		lastName: 'Bellati',
		email: 'giulia.bellati@gmail.com',
		phone: '+39 35237293',
		profilePhoto: '/uploads/test/profile53.jpg',
		address: {
			city: 'Milan',
			lat: 45.523361,
			long: 9.1594053,
		},
		photos: [
			'/uploads/test/53a.jpg',
			'/uploads/test/53b.jpg',
			'/uploads/test/53c.jpg',
			'/uploads/test/53d.jpg',
			'/uploads/test/53e.jpg',
			'/uploads/test/50e.jpg',
		],
		price: 30,
		description: "I am qualified, talented and self-motivated graphic designer with 7 years of experience working on various projects. I create design and illustration either for books, magazines, flyers, business cards, greeting cards, posters, websites, iPhone/iPad Apps, etc. If you hire me I guarantee high-quality work meeting deadline. I am always open to interesting projects and looking forward to cooperate with you!",
		tags: [
			ObjectId("a00000000000000000000012"),
			ObjectId("a00000000000000000000005"),
			ObjectId("a00000000000000000000007")
		],
		emergency: false,
	}, {
		_id: ObjectId("f00000000000000000000054"),
		firstName: 'Jacopo',
		lastName: 'Jacopini',
		email: 'j.jacopini@gmail.com',
		phone: '+39 32673293',
		profilePhoto: '/uploads/test/profile54.jpg',
		address: {
			city: 'Milan',
			lat: 45.4458543,
			long: 9.1515518,
		},
		photos: [
			'/uploads/test/54a.jpg',
			'/uploads/test/54b.jpg',
			'/uploads/test/54c.jpg',
			'/uploads/test/54d.jpg',
			'/uploads/test/54e.jpg',
			'/uploads/test/54f.jpg',
		],
		price: 95,
		description: "Norman collaborates with startups and established enterprises alike, creating, developing and improving design concepts for electronic devices, wearable technology, consumer and household products. As a professional and versatile product designer, Norman offers services such as concept design sketching, product development, and 3D modelling, editing and rendering for product presentations and marketing purposes. What he provides, and what you actually pay for is valuable output -- results that can propel a business forward or gain your business the much needed attention, clients, customers and potentially a good share of the market. Norman studied both Industrial Design and Business Management in reputable universities in the Philippines and the UK, and have gained about 8 years of professional experience as a designer in the advertising media and electronics industries. He is both a designer and a marketer, although he preferred to focus more on nurturing his creative career. His tools include Solidworks and Keyshot for 3D modelling and rendering, Adobe Photoshop and Illustrator for graphic design. He is known to actually conduct research and engage with his clients, prior to designing, in order to gather as much information as necessary to educate and familiarize himself on each project. Understanding the product, its purpose, target market and users, are some of the factors he consider crucial when working with design. 'Each component and element has to have a purpose. As a professional designer, I strive to achieve design harmony with form, purpose and product functionality, increasing the chances of getting people to love the product. If the product works as well as it looks, people will want it, customers will get it, and users will talk good about it.'",
		tags: [
			ObjectId("a00000000000000000000012"),
			ObjectId("a00000000000000000000023"),
			ObjectId("a00000000000000000000026")
		],
		emergency: true,
		currentPosition: { //Milan
			lat: 45.475233,
			long: 9.1902183
		}
	}, ]
}
