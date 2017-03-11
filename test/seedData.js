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
   name: 'Tag',
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

var user = {
   name: 'User',
   data: [{
         '_id': ObjectId("1625fc2bd82b84d23d8c7bd1"),
         'firstName': 'Costanza',
         'lastName': 'Fox',
         'password': 'a wrong contact',
         'email': 'volpic@usi.ch'
      },
      {
         '_id': ObjectId("1625fc2bd82b84d23d8c7bd2"),
         'firstName': 'Super',
         'lastName': 'Man',
         'password': 'a wrong contact',
         'email': 'super@man.hero'
      }
   ]
}

var review = {
   name: 'Review',
   data: [{
         '_id': ObjectId("3625fc2bd82b84d23d8c7bd0"),
         'title': 'R1',
         'description': 'This is some text',
         'score': 1,
         'photo': [
            '/uploads/review/134324242342.jpg'
         ],
         'user': ObjectId("1625fc2bd82b84d23d8c7bd1"),
         'freelancer': ObjectId("5625fc2bd82b84d23d8c7bd1")
      },
      {
         '_id': ObjectId("3625fc2bd82b84d23d8c7bd1"),
         'title': 'R2',
         'description': 'This is some super text',
         'score': 5,
         'photo': [
            '/uploads/review/13432424242.jpg'
         ],
         'user': ObjectId("1625fc2bd82b84d23d8c7bd2"),
         'freelancer': ObjectId("5625fc2bd82b84d23d8c7bd0")
      }
   ]
}

var seedData = [];
seedData.push(freelancer);
seedData.push(tag);
seedData.push(review);
seedData.push(user);

module.exports = seedData;
