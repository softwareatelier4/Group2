## Getting Started
### Install dependencies
To install the dependencies (express.js, mongoose, testing framework, etc.) type:

    npm install

And istanbul:

    npm install -g istanbul

### Run the server
To start:

    npm start
or, if you want to use nodemon

    npm run dev

##REST API
###Overview


### Responses
All the response are in JSON.

List of methods:

    GET /api/freelancer/:id
    GET /api/review/freelancer/:id

### Examples
Note: In the examples we only present the headers of interest.

#### `/api/freelancer/:id`

    #Request headers
    GET /api/freelancer/5625fc2bd82b84d23d8c7bd0 HTTP/1.1
    Host: localhost:3000
    Accept: application/json

    200 OK
    #Response headers
    Content-Type: application/json; charset=utf-8

Response body:

    {
       "_id": "5625fc2bd82b84d23d8c7bd0",
       "firstName": "Marco",
       "lastName": "Tollini",
       "email": "test@usi.ch",
       "phone": "test",
       "profilePhoto": "/uploads/5625fc2bd82b84d23d8c7bd5/profile.jpg",
       "description": "This is a description",
       "tags": [{
          "_id": "4625fc2bd82b84d23d8c7bd0",
          "name": "Idraulico",
          "freelancer": ["5625fc2bd82b84d23d8c7bd0"],
          "__v": 0
       }, {
          "_id": "4625fc2bd82b84d23d8c7bd1",
          "name": "Vetraio",
          "freelancer": ["5625fc2bd82b84d23d8c7bd0", "5625fc2bd82b84d23d8c7bd1"],
          "__v": 0
       }, {
          "_id": "4625fc2bd82b84d23d8c7bd2",
          "name": "Carpentiere",
          "freelancer": ["5625fc2bd82b84d23d8c7bd0"],
          "__v": 0
       }],
       "address": {
          "road": "Via Zurigo",
          "number": 10,
          "city": "Lugano",
          "cap": 29100
       },
       "photos": [],
       "workName": "BHO",
       "__v": 0
    }


#### `/api/review/freelancer/:id`

  #Request headers
  GET /api/review/freelancer/5625fc2bd82b84d23d8c7bd0 HTTP/1.1
  Host: localhost:3000
  Accept: application/json

  200 OK
  #Response headers
  Content-Type: application/json; charset=utf-8

Response body:

    [{
       "_id": "3625fc2bd82b84d23d8c7bd1",
       "title": "R2",
       "score": 5,
       "user": {
          "_id": "1625fc2bd82b84d23d8c7bd2",
          "firstName": "Super",
          "lastName": "Man",
          "password": "$2a$10$JxFkVu2/vEwxDyD6zlltleABuRiioCz5qP498M84HZrgIoxhsp2Lq",
          "email": "super@man.hero",
          "__v": 0
       },
       "freelancer": {
          "_id": "5625fc2bd82b84d23d8c7bd0",
          "firstName": "Marco",
          "lastName": "Tollini",
          "email": "test@usi.ch",
          "phone": "380474747",
          "profilePhoto": "/uploads/5625fc2bd82b84d23d8c7bd5/profile.jpg",
          "description": "This is a description",
          "tags": ["4625fc2bd82b84d23d8c7bd0", "4625fc2bd82b84d23d8c7bd1", "4625fc2bd82b84d23d8c7bd2"],
          "address": {
             "road": "Via Zurigo",
             "number": 10,
             "city": "Lugano",
             "cap": 29100
          },
          "photos": [],
          "workName": "BHO",
          "__v": 0
       },
       "date": "2017-03-11T18:43:31.420Z",
       "photo": ["/uploads/review/13432424242.jpg"],
       "description": "This is some super text",
       "__v": 0
    }]
