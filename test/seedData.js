'use strict';

var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

var freelancer = {
   name: 'Freelancer',
   data: [{
         '_id': ObjectId("5625fc2bd82b84d23d8c7bd0"),
         'firstName': 'Marco',
         'lastName': 'Tollini',
         'workName': 'BHO',
         'email': 'tollim@usi.ch',
         'phone': '380474747',
         'profilePhoto': '/uploads/5625fc2bd82b84d23d8c7bd5/profile.jpg',
         'address': {
            road: 'Via Zurigo',
            number: 10,
            city: 'Lugano',
            cap: 29100
         },
         'tags': [
            ObjectId("4625fc2bd82b84d23d8c7bd0"),
            ObjectId("4625fc2bd82b84d23d8c7bd1"),
            ObjectId("4625fc2bd82b84d23d8c7bd2")
         ],
         'description': 'This is a description'
      },
      {
         '_id': ObjectId("5625fc2bd82b84d23d8c7bd1"),
         'firstName': 'Nevio',
         'lastName': 'Valsan',
         'workName': 'Van',
         'email': 'valsan@usi.ch',
         'phone': '380474747',
         'profilePhoto': '/uploads/5625fc2bd82b84d23d8c7bd5/profile.jpg',
         'address': {
            road: 'Via Shisha',
            number: 69,
            city: 'Lugano',
            cap: 29100
         },
         'tags': [
            ObjectId("4625fc2bd82b84d23d8c7bd1"),
            ObjectId("4625fc2bd82b84d23d8c7bd4"),
            ObjectId("4625fc2bd82b84d23d8c7bd9")
         ],
         'description': 'Hello, I am nevio'
      }
   ]
}

var tag = {
   name: 'Freelancer',
   data: [{
         '_id': ObjectId("4625fc2bd82b84d23d8c7bd0"),
         'name': 'Idraulico',
         'freelancer': [
            ObjectId("5625fc2bd82b84d23d8c7bd0"),
         ]
      },
      {
         '_id': ObjectId("4625fc2bd82b84d23d8c7bd1"),
         'name': 'Vetraio',
         'freelancer': [
            ObjectId("5625fc2bd82b84d23d8c7bd0"),
            ObjectId("5625fc2bd82b84d23d8c7bd1")
         ]
      },
      {
         '_id': ObjectId("4625fc2bd82b84d23d8c7bd2"),
         'name': 'Carpentiere',
         'freelancer': [
            ObjectId("5625fc2bd82b84d23d8c7bd0")
         ]
      },
      {
         '_id': ObjectId("4625fc2bd82b84d23d8c7bd3"),
         'name': 'Developer',
         'freelancer': []
      },
      {
         '_id': ObjectId("4625fc2bd82b84d23d8c7bd4"),
         'name': 'Informatico',
         'freelancer': [
            ObjectId("5625fc2bd82b84d23d8c7bd1")
         ]
      },
      {
         '_id': ObjectId("4625fc2bd82b84d23d8c7bd9"),
         'name': 'Tecnico',
         'freelancer': [
            ObjectId("5625fc2bd82b84d23d8c7bd1")
         ]
      }
   ]
}

// var review = {
//    name: 'Review',
//    data: [{
//       '_id': ObjectId("3625fc2bd82b84d23d8c7bd0"),
//       'title':
//    }]
// }

var seedData = [];
seedData.push(freelancer);
seedData.push(tag);

module.exports = seedData;
