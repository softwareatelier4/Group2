'use strict';

var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

var freelancer = {
   name: 'Freelancer',
   data: [{
         '_id': ObjectId("f00000000000000000000000"),
         'firstName': 'Marco',
         'lastName': 'Tollini',
         'workName': 'Il Tollo',
         'email': 'tollim@usi.ch',
         'phone': '+39 380474747',
         'profilePhoto': '/uploads/test/profile0.jpg',
         'address': {
            road: 'Via Zurigo',
            number: 10,
            city: 'Lugano',
            cap: 69100,
            lat: 46.0119793,
            long: 8.9517463,
         },
         'tags': [
            ObjectId("a00000000000000000000003"),
            ObjectId("a00000000000000000000004"),
            ObjectId("a00000000000000000000006")
         ],
         'description': 'Hello guys! I am an amazing developer. ',
         'photos': [
            '/uploads/test/1.jpg',
            '/uploads/test/2.jpg',
            '/uploads/test/3.jpg',
         ],
         'score': 5,
         'price': 20,
         'ownerId': 'b00000000000000000000000'
      },
      {
         '_id': ObjectId("f00000000000000000000001"),
         'firstName': 'Nevio',
         'lastName': 'Valsangiacomo',
         'workName': 'SuperNevio94',
         'email': 'valsan@usi.ch',
         'phone': '+ 39 380474747',
         'profilePhoto': '/uploads/test/profile1.jpg',
         'address': {
            road: 'Via Shisha',
            number: 69,
            city: 'New York',
            cap: 29100,
            lat: 51.4891946,
            long: 44.4395238,
         },
         'tags': [
            ObjectId("a00000000000000000000009"),
         ],
         'description': "I'm Nevio, an award-winning photographer based in New York, specialising in weddings professionally, I will capture your special day. My passion is capturing the beauty of my city in landscapes.",
         'score': 3,
         'price': 30
      },
      {
         '_id': ObjectId("f00000000000000000000002"),
         'firstName': 'Vanessa',
         'lastName': 'Braglia',
         'workName': 'Ninni',
         'email': 'tester@usi.ch',
         'phone': '23234234234',
         'profilePhoto': '/uploads/test/profile2.jpg',
         'address': {
            road: 'Via Schianno',
            number: 99,
            city: 'Varese',
            cap: 29100,
            lat: 45.7790629,
            long: 8.8427876,
         },
         'tags': [
            ObjectId("a00000000000000000000007"),
            ObjectId("a00000000000000000000011")
         ],
         'description': "I am a CIDESCO trained therapist with meticulous high standards. I have experience as a personal beauty therapist, in 5* spas on land and at sea, working for luxury skin care brands and also management and training experience. My experiences have meant that I have been able to travel around the world and work with people of all ages, cultures, nationalities and religions. This has allowed me to improve my people skills and enabled me to have the confidence and ability to work with people from different backgrounds. As a therapist I am extremely passionate, hard-working, professional and I love to make people feel and look their best. I am a very empathetic and understanding person and give 100% at all times in my work"
      },
      {
         '_id': ObjectId("f00000000000000000000003"),
         'firstName': 'Daniele',
         'lastName': 'LoPred',
         'email': 'lopred@usi.ch',
         'phone': '+4107362864',
         'profilePhoto': '/uploads/test/profile3.jpg',
         'address': {
            city: 'Casinò di lugano',
            lat: 46.0040767,
            long: 8.9530366,
         },
         'tags': [
            ObjectId("a00000000000000000000008"),
            ObjectId("a00000000000000000000001"),
            ObjectId("a00000000000000000000002")
         ],
         'description': "With over twenty years experience in the international distribution and coproduction business including stints as Head of International Distribution at Mediatoon and Alphanim Paris, I have created indie distributor awol animation in 2004. Significant representations since then include/have included Emmy award winning Little Airplane Productions NYC, The Jim Henson Company, Les Films de l’Arlequin and Supamonks France, Korean based Goldilocks Studio and Funny Flux Entertainment, along with Belfast based BAFTA award winning studio Black North-Enter Yes and multi award winning UK based studio Dot to Dot Productions etc. With over 130 international clients including public service broadcasters, pan-regional and commercial channels, digital platforms, Educational Networks, book publishers and consumer products partners, awol animation offers a one stop shop vertically integrated roll out for new brands.",
         'score': 4,
         'price': 10
      },
      {
         '_id': ObjectId("f00000000000000000000004"),
         'firstName': 'Samantha',
         'lastName': 'Ferri',
         'email': 'sammi@gmail.com',
         'address': {
            city: 'Mendrisio',
            lat: 45.8887047,
            long: 8.9552257,
         },
         'tags': [
            ObjectId("a00000000000000000000005"),
            ObjectId("a00000000000000000000000"),
            ObjectId("a00000000000000000000006")
         ],
         'description': "I love building online communities that have heart and purpose to impact the world and create transformation and change. To be able to create pathways that connect purpose and destiny with reality. Here's what some people have said about me after we chatted....Working in the design industry for the last 10+ years Samantha has creative flair combined with sharp marketing savvy and the passion to reveal your message in an authentic way. Founding Design Reaction in 2006, she has worked with a large range of clients in the Newcastle and Sydney area including: Hunter New England Health, State Spinal, Bone Marrow Transplant Network, Hunter Development Corporation and many well known small businesses in the Newcastle region."
      },
      {
         '_id': ObjectId("f00000000000000000000005"),
         'firstName': 'Costanza',
         'lastName': 'Fox',
         'workName': 'Cocco',
         'email': 'cocco@gmail.com',
         'address': {
            city: 'Milano',
            lat: 45.4627124,
            long: 9.1076929,
         },
         'description': "Dr. Fox has provided care to children of Isabella and surrounding counties for over 10 years.  A Board Certified Pediatrician for nearly 22 years, Dr. Constanza I. Fox graduated from the Univ De Antioquia, Fac De Med, Medellin, Colombia in 1980. She provides compassionate care to patients from birth to 18 years of age. Her primary focus is to give your child the best diagnosis possible, while sharing vital health-related information with you to further improve your child's health. Dr. Fox has special interest in children with both chronic and acute Asthma. She cares about every child's well-being, which is why she takes the time to get to know each of her patients very well.",
         score: 3,
         'price': 200,
         'tags': [
            ObjectId("a00000000000000000000005"),
            ObjectId("a00000000000000000000000"),
            ObjectId("a00000000000000000000006")
         ],
      },
      {
         '_id': ObjectId("f00000000000000000000006"),
         'firstName': 'Zeno',
         'lastName': 'Treviz',
         'email': 'zenos@gmail.com',
         'address': {
            city: 'Mendrisio',
            lat: 45.8887047,
            long: 8.9552257,
         },
         'tags': [
            ObjectId("a00000000000000000000004"),
            ObjectId("a00000000000000000000003"),
            ObjectId("a00000000000000000000006")
         ],
         'description': "Sono dimplomato come informatico presso SAMT. Terminata la scuola ho svolto il servizio militare, dopo ciò mi sono messo in proprio aprendo la mia azienda. Principalmente al momento mi occupo di assistenza ai clienti e di sviluppo di siti web. Sto studiando presso la Xamarin University e la Microsoft Virtual Accademy in maniera da continuare ad accrescermi professionalmente.",
         'score': 3,
         'price': 100
      },
      {
         '_id': ObjectId("f00000000000000000000007"),
         'firstName': 'Kate',
         'lastName': 'Baluba',
         'email': 'balubina@hotmail.com',
         'address': {
            city: 'Zurich',
         },
         'tags': [
            ObjectId("a00000000000000000000008")
         ],
         'description': "I don't want to share my information with you. Believe I am the best freelancer!",
         'score': 5
      },
   ]
}

var tag = {
   name: 'Tag',
   data: [{
         '_id': ObjectId("a00000000000000000000000"),
         'name': 'Idraulico',
         'freelancer': [
            ObjectId("a0f000000000000000000004"),
         ]
      },
      {
         '_id': ObjectId("a00000000000000000000001"),
         'name': 'Vetraio',
         'freelancer': [
            ObjectId("a0f000000000000000000003")
         ]
      },
      {
         '_id': ObjectId("a00000000000000000000002"),
         'name': 'Carpentiere',
         'freelancer': [
            ObjectId("a0f000000000000000000003")
         ]
      },
      {
         '_id': ObjectId("a00000000000000000000003"),
         'name': 'Developer',
         'freelancer': [
            ObjectId("a0f000000000000000000000"),
            ObjectId("a0f000000000000000000006")
         ]
      },
      {
         '_id': ObjectId("a00000000000000000000004"),
         'name': 'Informatico',
         'freelancer': [
            ObjectId("a0f000000000000000000000"),
            ObjectId("a0f000000000000000000006")
         ]
      },
      {
         '_id': ObjectId("a00000000000000000000005"),
         'name': 'Meccanic',
         'freelancer': [
            ObjectId("a0f000000000000000000004")
         ]
      },
      {
         '_id': ObjectId("a00000000000000000000006"),
         'name': 'Tecnico',
         'freelancer': [
            ObjectId("a0f000000000000000000000"),
            ObjectId("a0f000000000000000000004"),
            ObjectId("a0f000000000000000000006")
         ]
      },
      {
         '_id': ObjectId("a00000000000000000000007"),
         'name': 'Nail Artist',
         'freelancer': [
            ObjectId("a0f000000000000000000002")
         ]
      },
      {
         '_id': ObjectId("a00000000000000000000008"),
         'name': 'House Painter',
         'freelancer': [
            ObjectId("a0f000000000000000000003"),
            ObjectId("a0f000000000000000000007")
         ]
      },
      {
         '_id': ObjectId("a00000000000000000000009"),
         'name': 'Photographer',
         'freelancer': [
            ObjectId("a0f000000000000000000001")
         ]
      },
      {
         '_id': ObjectId("a00000000000000000000010"),
         'name': 'Movie Producer',
         'freelancer': []
      },
      {
         '_id': ObjectId("a00000000000000000000011"),
         'name': 'Beautician',
         'freelancer': [
            ObjectId("a0f000000000000000000002")
         ]
      }
   ]
}

var user = {
   name: 'User',
   data: [{
         '_id': ObjectId("b00000000000000000000000"),
         'firstName': 'Costanza',
         'lastName': 'Fox',
         'password': '00001',
         'email': 'volpic@usi.ch'
      },
      {
         '_id': ObjectId("b00000000000000000000001"),
         'firstName': 'Vanessa',
         'lastName': 'Volpini',
         'password': '00002',
         'email': 'vanessa.volpini@usi.ch'
      },
      {
         '_id': ObjectId("b00000000000000000000002"),
         'firstName': 'Marco',
         'lastName': 'Lo Preiato',
         'password': '00003',
         'email': 'marco.lopreiato@man.ch'
      }
   ]
}

var review = {
   name: 'Review',
   data: [{
         '_id': ObjectId("c00000000000000000000000"),
         'title': 'R1',
         'date': '2017-01-22T23:58:43.122Z',
         'description': "Mi ha lasciato il muro imbiancato a metá!!!!!!!!!!!!!!!!!!!!!!!!!! :O",
         'score': 1,
         'photo': [
            '/uploads/test/3.jpg'
         ],
         'user': ObjectId("b00000000000000000000000"),
         'freelancer': ObjectId("f00000000000000000000003")
      },
      {
         '_id': ObjectId("c00000000000000000000001"),
         'title': 'R2',
         'date': '1970-01-13T23:58:43.122Z',
         'description': "In questa rubrica giornaliera vi proponiamo la meditazione del Vangelo del giorno preparata da un fratello o una sorella di Bose. Il nostro desiderio è di spezzare il pane quotidiano della parola di Dio, condividendo la lectio divina fatta nella solitudine della cella monastica. Per tutti il fine è quello indicato da Ignazio d’Antiochia, “rifugiarmi nel Vangelo come nella carne di Gesù” (Lettera ai Filadelfiesi).",
         'score': 5,
         'photo': [
            '/uploads/test/1.jpg',
            '/uploads/test/2.jpg'
         ],
         'user': ObjectId("b00000000000000000000001"),
         'freelancer': ObjectId("f00000000000000000000007")
      },
      {
         '_id': ObjectId("c00000000000000000000002"),
         'title': 'R2',
         'date': '1971-01-13T23:58:43.122Z',
         'description': "In questa rubrica giornaliera vi proponiamo la meditazione del Vangelo del giorno preparata da un fratello o una sorella di Bose. Il nostro desiderio è di spezzare il pane quotidiano della parola di Dio, condividendo la lectio divina fatta nella solitudine della cella monastica. Per tutti il fine è quello indicato da Ignazio d’Antiochia, “rifugiarmi nel Vangelo come nella carne di Gesù” (Lettera ai Filadelfiesi).",
         'score': 2,
         'photo': [
            '/uploads/test/4.jpg',
            '/uploads/test/5.jpg',
            '/uploads/test/6.jpg'
         ],
         'user': ObjectId("b00000000000000000000002"),
         'freelancer': ObjectId("f00000000000000000000001")
      },
      {
         '_id': ObjectId("c00000000000000000000003"),
         'title': 'R2',
         'date': '1972-01-13T23:58:43.122Z',
         'description': "In questa rubrica giornaliera vi proponiamo la meditazione del Vangelo del giorno preparata da un fratello o una sorella di Bose. Il nostro desiderio è di spezzare il pane quotidiano della parola di Dio, condividendo la lectio divina fatta nella solitudine della cella monastica. Per tutti il fine è quello indicato da Ignazio d’Antiochia, “rifugiarmi nel Vangelo come nella carne di Gesù” (Lettera ai Filadelfiesi).",
         'score': 3,
         'photo': [],
         'user': ObjectId("b00000000000000000000000"),
         'freelancer': ObjectId("f00000000000000000000001")
      },
      {
         '_id': ObjectId("c00000000000000000000004"),
         'title': 'R2',
         'date': '1973-01-13T23:58:43.122Z',
         'description': "In questa rubrica giornaliera vi proponiamo la meditazione del Vangelo del giorno preparata da un fratello o una sorella di Bose. Il nostro desiderio è di spezzare il pane quotidiano della parola di Dio, condividendo la lectio divina fatta nella solitudine della cella monastica. Per tutti il fine è quello indicato da Ignazio d’Antiochia, “rifugiarmi nel Vangelo come nella carne di Gesù” (Lettera ai Filadelfiesi).",
         'score': 4,
         'photo': [
            '/uploads/test/7.jpg',
            '/uploads/test/8.jpg',
            '/uploads/test/9.jpg',
            '/uploads/test/10.jpg',
            '/uploads/test/11.jpg',
         ],
         'user': ObjectId("b00000000000000000000001"),
         'freelancer': ObjectId("f00000000000000000000001")
      },
      {
         '_id': ObjectId("c00000000000000000000005"),
         'title': 'R2',
         'date': '1974-01-13T23:58:43.122Z',
         'description': "In questa rubrica giornaliera vi proponiamo la meditazione del Vangelo del giorno preparata da un fratello o una sorella di Bose. Il nostro desiderio è di spezzare il pane quotidiano della parola di Dio, condividendo la lectio divina fatta nella solitudine della cella monastica. Per tutti il fine è quello indicato da Ignazio d’Antiochia, “rifugiarmi nel Vangelo come nella carne di Gesù” (Lettera ai Filadelfiesi).",
         'score': 3,
         'photo': [
            '/uploads/test/1.jpg'
         ],
         'user': ObjectId("b00000000000000000000000"),
         'freelancer': ObjectId("f00000000000000000000001")
      },
      {
         '_id': ObjectId("c00000000000000000000006"),
         'title': 'R2',
         'date': '1975-01-13T23:58:43.122Z',
         'description': "In questa rubrica giornaliera vi proponiamo la meditazione del Vangelo del giorno preparata da un fratello o una sorella di Bose. Il nostro desiderio è di spezzare il pane quotidiano della parola di Dio, condividendo la lectio divina fatta nella solitudine della cella monastica. Per tutti il fine è quello indicato da Ignazio d’Antiochia, “rifugiarmi nel Vangelo come nella carne di Gesù” (Lettera ai Filadelfiesi).",
         'score': 5,
         'photo': [
            '/uploads/test/7.jpg',

         ],
         'user': ObjectId("b00000000000000000000000"),
         'freelancer': ObjectId("f00000000000000000000000")
      },
      {
         '_id': ObjectId("c00000000000000000000007"),
         'title': 'R2',
         'date': '1976-01-13T23:58:43.122Z',
         'description': "In questa rubrica giornaliera vi proponiamo la meditazione del Vangelo del giorno preparata da un fratello o una sorella di Bose. Il nostro desiderio è di spezzare il pane quotidiano della parola di Dio, condividendo la lectio divina fatta nella solitudine della cella monastica. Per tutti il fine è quello indicato da Ignazio d’Antiochia, “rifugiarmi nel Vangelo come nella carne di Gesù” (Lettera ai Filadelfiesi).",
         'score': 4,
         'photo': [],
         'user': ObjectId("b00000000000000000000001"),
         'freelancer': ObjectId("f00000000000000000000003")
      },
      {
         '_id': ObjectId("c00000000000000000000008"),
         'title': 'R2',
         'date': '2016-01-13T23:58:43.122Z',
         'description': "In questa rubrica giornaliera vi proponiamo la meditazione del Vangelo del giorno preparata da un fratello o una sorella di Bose. Il nostro desiderio è di spezzare il pane quotidiano della parola di Dio, condividendo la lectio divina fatta nella solitudine della cella monastica. Per tutti il fine è quello indicato da Ignazio d’Antiochia, “rifugiarmi nel Vangelo come nella carne di Gesù” (Lettera ai Filadelfiesi).",
         'score': 1,
         'photo': [],
         'user': ObjectId("b00000000000000000000002"),
         'freelancer': ObjectId("f00000000000000000000005")
      },
      {
         '_id': ObjectId("c00000000000000000000009"),
         'title': 'R2',
         'date': '2015-01-13T23:58:43.122Z',
         'description': "In questa rubrica giornaliera vi proponiamo la meditazione del Vangelo del giorno preparata da un fratello o una sorella di Bose. Il nostro desiderio è di spezzare il pane quotidiano della parola di Dio, condividendo la lectio divina fatta nella solitudine della cella monastica. Per tutti il fine è quello indicato da Ignazio d’Antiochia, “rifugiarmi nel Vangelo come nella carne di Gesù” (Lettera ai Filadelfiesi).",
         'score': 5,
         'photo': [],
         'user': ObjectId("b00000000000000000000001"),
         'freelancer': ObjectId("f00000000000000000000005")
      },
      {
         '_id': ObjectId("c00000000000000000000010"),
         'title': 'R2',
         'date': '2003-01-13T23:58:43.122Z',
         'description': "In questa rubrica giornaliera vi proponiamo la meditazione del Vangelo del giorno preparata da un fratello o una sorella di Bose. Il nostro desiderio è di spezzare il pane quotidiano della parola di Dio, condividendo la lectio divina fatta nella solitudine della cella monastica. Per tutti il fine è quello indicato da Ignazio d’Antiochia, “rifugiarmi nel Vangelo come nella carne di Gesù” (Lettera ai Filadelfiesi).",
         'score': 3,
         'photo': [],
         'user': ObjectId("b00000000000000000000000"),
         'freelancer': ObjectId("f00000000000000000000006")
      },
   ]
}

var seedData = [];
seedData.push(freelancer);
seedData.push(tag);
seedData.push(review);
seedData.push(user);

module.exports = seedData;
