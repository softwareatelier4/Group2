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
			score: 0,
			price: 33,
			emergency: true,
			currentPosition: { //London
				lat: 51.5788582,
				long: -0.2417011,
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
				city: 'Milano',
				lat: 45.4654005,
				long: 9.1158844,
			},
			tags: [
				ObjectId("a00000000000000000000038"),
				ObjectId("a00000000000000000000010")
			],
			description: "My experience in the field of civil and idraulic engineering is 7 years old. At the beginning i followed mainly residential and industrial tecnological systems for heating and air conditioning. Some years ago I began to collaborate with an Hydraulic Engineer, to project hydraulic solution for rivers' protections. I made some projects for heating and air conditioning system, expecially with the use of best available tecnologies, for example in the field of renovanle energy (solar, geothermal..). At the same time i collaborated for some hydraulic projects like systems of rivers' protections, hydraulic systems in the project of roads. I can use the softwares Hec-Ras, Heasted Methods.",
			score: 0,
			price: 10,
			emergency: true,
			currentPosition: { //Milano
				lat: 45.549002,
				long: 9.0550243,
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
				ObjectId("a00000000000000000000011"),
				ObjectId("a00000000000000000000012")
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
			description: "I have always had a keen interest in makeup artistry and skin care. I have been providing facial, waxing and makeup services to the London area since 1999, and I still love my profession. I love the combination of art and science and there is always more to learn. I love meeting new people and helping them achieve their beauty goals and providing them with personalized treatments. I have taken many advanced training courses in clinical skin care, nail art, body and facial waxing, and photography makeup.",
			price: 80,
			tags: [ObjectId("a00000000000000000000034"),
				ObjectId("a00000000000000000000035")
			],
			emergency: false,
		},
		{
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
		},
		{
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
			score: 0,
			emergency: true,
			price: 90,
			currentPosition: {
				lat: 51.5285582,
				long: -0.2417011,
			},
			active: false
		},
		{
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
		},
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
		},
		{
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
		{
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
		},
		{
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
		},
		{
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
		},
		{
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
			score: 0,
			price: 34,
			emergency: false
		},
		{
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
		},
		{
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
		},
		{
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
		},
		{
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
			score: 0,
			price: 73,
			emergency: false
		},
		{
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
			score: 0,
			price: 46,
			emergency: false
		},
		{
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
		},
		{
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
		},
		{
			_id: ObjectId("f00000000000000000000029"),
			firstName: 'Fiona',
			lastName: 'Kelly',
			email: 'fiona@g.g',
			phone: '+390007362864',
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
			score: 0,
			price: 30,
			emergency: false
		},
		{
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
		},
		{
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
		},
		{
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
		},
		// {
		// 	_id: ObjectId("f00000000000000000000033"),
		// 	firstName: 'Matteo',
		// 	lastName: 'Gecco',
		// 	email: 'gecco@sh.sh',
		// 	phone: '+390007362864',
		// 	address: {
		// 		city: 'Milano',
		// 		lat: 45.4628327,
		// 		long: 9.1075206,
		// 	},
		// 	photos: [
		// 		'/uploads/test/32a.jpg',
		// 		'/uploads/test/32b.jpg',
		// 		'/uploads/test/32c.jpg',
		// 		'/uploads/test/32d.jpg',
		// 		'/uploads/test/32e.jpg',
		// 		'/uploads/test/32f.jpg',
		// 		'/uploads/test/32g.jpg'
		// 	],
		// 	tags: [
		// 		ObjectId("a00000000000000000000040"),
		// 		ObjectId("a00000000000000000000041"),
		// 		ObjectId("a00000000000000000000044")
		// 	],
		// 	description: "Hi, I'm Matteo, a wedding photographer based in Milan. I've been shooting weddings for 7 years after a career in graphic design and walking my dog. The wider world beckoned and it's safe to say the opportunities wedding photography has given me must make it one of the best jobs out there. Read on if you want to find out more about how I go about photographing a wedding and my slightly unhealthy obsession with using light creatively. My style of wedding photography is probably best described as creative documentary with contemporary portraiture. There’s lots of buzz words around in wedding photography so I’ll explain exactly what that means. When I first started wedding photography I was determined to do it in a way which exemplified everything I love about photography, and just as importantly, to avoid all the things I don’t like! The idea of being a traditional wedding photographer sent shivers down my spine. Herding people around, getting in the way and being the object of disdain wasn’t my idea of a fun Saturday!",
		// 	score: 0,
		// 	price: 70,
		// 	emergency: false
		// },
		// {
		// 	_id: ObjectId("f00000000000000000000034"),
		// 	firstName: 'Matteo',
		// 	lastName: 'Gecco',
		// 	email: 'gecco@sh.sh',
		// 	phone: '+390007362864',
		// 	address: {
		// 		city: 'Milano',
		// 		lat: 45.4628327,
		// 		long: 9.1075206,
		// 	},
		// 	photos: [
		// 		'/uploads/test/32a.jpg',
		// 		'/uploads/test/32b.jpg',
		// 		'/uploads/test/32c.jpg',
		// 		'/uploads/test/32d.jpg',
		// 		'/uploads/test/32e.jpg',
		// 		'/uploads/test/32f.jpg',
		// 		'/uploads/test/32g.jpg'
		// 	],
		// 	tags: [
		// 		ObjectId("a00000000000000000000040"),
		// 		ObjectId("a00000000000000000000041"),
		// 		ObjectId("a00000000000000000000044")
		// 	],
		// 	description: "Hi, I'm Matteo, a wedding photographer based in Milan. I've been shooting weddings for 7 years after a career in graphic design and walking my dog. The wider world beckoned and it's safe to say the opportunities wedding photography has given me must make it one of the best jobs out there. Read on if you want to find out more about how I go about photographing a wedding and my slightly unhealthy obsession with using light creatively. My style of wedding photography is probably best described as creative documentary with contemporary portraiture. There’s lots of buzz words around in wedding photography so I’ll explain exactly what that means. When I first started wedding photography I was determined to do it in a way which exemplified everything I love about photography, and just as importantly, to avoid all the things I don’t like! The idea of being a traditional wedding photographer sent shivers down my spine. Herding people around, getting in the way and being the object of disdain wasn’t my idea of a fun Saturday!",
		// 	score: 0,
		// 	price: 70,
		// 	emergency: false
		// },
		// {
		// 	_id: ObjectId("f00000000000000000000035"),
		// 	firstName: 'Matteo',
		// 	lastName: 'Gecco',
		// 	email: 'gecco@sh.sh',
		// 	phone: '+390007362864',
		// 	address: {
		// 		city: 'Milano',
		// 		lat: 45.4628327,
		// 		long: 9.1075206,
		// 	},
		// 	photos: [
		// 		'/uploads/test/32a.jpg',
		// 		'/uploads/test/32b.jpg',
		// 		'/uploads/test/32c.jpg',
		// 		'/uploads/test/32d.jpg',
		// 		'/uploads/test/32e.jpg',
		// 		'/uploads/test/32f.jpg',
		// 		'/uploads/test/32g.jpg'
		// 	],
		// 	tags: [
		// 		ObjectId("a00000000000000000000040"),
		// 		ObjectId("a00000000000000000000041"),
		// 		ObjectId("a00000000000000000000044")
		// 	],
		// 	description: "Hi, I'm Matteo, a wedding photographer based in Milan. I've been shooting weddings for 7 years after a career in graphic design and walking my dog. The wider world beckoned and it's safe to say the opportunities wedding photography has given me must make it one of the best jobs out there. Read on if you want to find out more about how I go about photographing a wedding and my slightly unhealthy obsession with using light creatively. My style of wedding photography is probably best described as creative documentary with contemporary portraiture. There’s lots of buzz words around in wedding photography so I’ll explain exactly what that means. When I first started wedding photography I was determined to do it in a way which exemplified everything I love about photography, and just as importantly, to avoid all the things I don’t like! The idea of being a traditional wedding photographer sent shivers down my spine. Herding people around, getting in the way and being the object of disdain wasn’t my idea of a fun Saturday!",
		// 	score: 0,
		// 	price: 70,
		// 	emergency: false
		// },
		// {
		// 	_id: ObjectId("f00000000000000000000036"),
		// 	firstName: 'Matteo',
		// 	lastName: 'Gecco',
		// 	email: 'gecco@sh.sh',
		// 	phone: '+390007362864',
		// 	address: {
		// 		city: 'Milano',
		// 		lat: 45.4628327,
		// 		long: 9.1075206,
		// 	},
		// 	photos: [
		// 		'/uploads/test/32a.jpg',
		// 		'/uploads/test/32b.jpg',
		// 		'/uploads/test/32c.jpg',
		// 		'/uploads/test/32d.jpg',
		// 		'/uploads/test/32e.jpg',
		// 		'/uploads/test/32f.jpg',
		// 		'/uploads/test/32g.jpg'
		// 	],
		// 	tags: [
		// 		ObjectId("a00000000000000000000040"),
		// 		ObjectId("a00000000000000000000041"),
		// 		ObjectId("a00000000000000000000044")
		// 	],
		// 	description: "Hi, I'm Matteo, a wedding photographer based in Milan. I've been shooting weddings for 7 years after a career in graphic design and walking my dog. The wider world beckoned and it's safe to say the opportunities wedding photography has given me must make it one of the best jobs out there. Read on if you want to find out more about how I go about photographing a wedding and my slightly unhealthy obsession with using light creatively. My style of wedding photography is probably best described as creative documentary with contemporary portraiture. There’s lots of buzz words around in wedding photography so I’ll explain exactly what that means. When I first started wedding photography I was determined to do it in a way which exemplified everything I love about photography, and just as importantly, to avoid all the things I don’t like! The idea of being a traditional wedding photographer sent shivers down my spine. Herding people around, getting in the way and being the object of disdain wasn’t my idea of a fun Saturday!",
		// 	score: 0,
		// 	price: 70,
		// 	emergency: false
		// },
		// {
		// 	_id: ObjectId("f00000000000000000000037"),
		// 	firstName: 'Matteo',
		// 	lastName: 'Gecco',
		// 	email: 'gecco@sh.sh',
		// 	phone: '+390007362864',
		// 	address: {
		// 		city: 'Milano',
		// 		lat: 45.4628327,
		// 		long: 9.1075206,
		// 	},
		// 	photos: [
		// 		'/uploads/test/32a.jpg',
		// 		'/uploads/test/32b.jpg',
		// 		'/uploads/test/32c.jpg',
		// 		'/uploads/test/32d.jpg',
		// 		'/uploads/test/32e.jpg',
		// 		'/uploads/test/32f.jpg',
		// 		'/uploads/test/32g.jpg'
		// 	],
		// 	tags: [
		// 		ObjectId("a00000000000000000000040"),
		// 		ObjectId("a00000000000000000000041"),
		// 		ObjectId("a00000000000000000000044")
		// 	],
		// 	description: "Hi, I'm Matteo, a wedding photographer based in Milan. I've been shooting weddings for 7 years after a career in graphic design and walking my dog. The wider world beckoned and it's safe to say the opportunities wedding photography has given me must make it one of the best jobs out there. Read on if you want to find out more about how I go about photographing a wedding and my slightly unhealthy obsession with using light creatively. My style of wedding photography is probably best described as creative documentary with contemporary portraiture. There’s lots of buzz words around in wedding photography so I’ll explain exactly what that means. When I first started wedding photography I was determined to do it in a way which exemplified everything I love about photography, and just as importantly, to avoid all the things I don’t like! The idea of being a traditional wedding photographer sent shivers down my spine. Herding people around, getting in the way and being the object of disdain wasn’t my idea of a fun Saturday!",
		// 	score: 0,
		// 	price: 70,
		// 	emergency: false
		// },
		// {
		// 	_id: ObjectId("f00000000000000000000038"),
		// 	firstName: 'Matteo',
		// 	lastName: 'Gecco',
		// 	email: 'gecco@sh.sh',
		// 	phone: '+390007362864',
		// 	address: {
		// 		city: 'Milano',
		// 		lat: 45.4628327,
		// 		long: 9.1075206,
		// 	},
		// 	photos: [
		// 		'/uploads/test/32a.jpg',
		// 		'/uploads/test/32b.jpg',
		// 		'/uploads/test/32c.jpg',
		// 		'/uploads/test/32d.jpg',
		// 		'/uploads/test/32e.jpg',
		// 		'/uploads/test/32f.jpg',
		// 		'/uploads/test/32g.jpg'
		// 	],
		// 	tags: [
		// 		ObjectId("a00000000000000000000040"),
		// 		ObjectId("a00000000000000000000041"),
		// 		ObjectId("a00000000000000000000044")
		// 	],
		// 	description: "Hi, I'm Matteo, a wedding photographer based in Milan. I've been shooting weddings for 7 years after a career in graphic design and walking my dog. The wider world beckoned and it's safe to say the opportunities wedding photography has given me must make it one of the best jobs out there. Read on if you want to find out more about how I go about photographing a wedding and my slightly unhealthy obsession with using light creatively. My style of wedding photography is probably best described as creative documentary with contemporary portraiture. There’s lots of buzz words around in wedding photography so I’ll explain exactly what that means. When I first started wedding photography I was determined to do it in a way which exemplified everything I love about photography, and just as importantly, to avoid all the things I don’t like! The idea of being a traditional wedding photographer sent shivers down my spine. Herding people around, getting in the way and being the object of disdain wasn’t my idea of a fun Saturday!",
		// 	score: 0,
		// 	price: 70,
		// 	emergency: false
		// },
	]
}
