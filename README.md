## Getting Started
### Install dependencies
To install the dependencies (express.js, mongoose, testing framework, etc.) type:

    npm install

Also you need to install redis:

    brew install redis
    brew services start redis

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



## Testing
### Overview
Tests are under the `test/` dir are organized by exercise:

* `ex1` are model tests
* `ex2`, `ex3` and `ex4` are API tests
* `ex5` are functional test that fire up your browser


We use [Mocha](https://mochajs.org/) as the test runner and [should.js](https://github.com/shouldjs/should.js) is the assertion library. For the API tests we use [supertest](https://github.com/tj/supertest), a library on top of [superagent](https://visionmedia.github.io/superagent/). Finally for the browser testing we use [nightwatch](http://nightwatchjs.org/)

### Running all the tests except from the browser ones (exercises 1 to 4)
TL;DR:

    npm test

_Full Version_: You don't have to start the server, the tests are going to start it automatically.
If you have a look at the `package.json` you will see the following entry:

    "test": "npm run test-mocha"

which wil call in turn

    "test": "./node_modules/mocha/bin/mocha -R spec ./test/ex1 ./test/ex2 ./test/ex3 ./test/ex4"

under the `scripts` property. This command runs `mocha` on the target directories with a test reporter named `spec`. To run the command just enter:

    npm test

_Important_: The above command will not run the tests for Exercise 5. These tests are browser tests and you can see how to run them in the following section.

## Running the browser tests (for exercise 5)
TL;DR:

    npm start # in seperate terminal
    npm run test-nightwatch

_Full Version_: First you __need__ to start your server:

    npm start

Now,  in the `package.json`, you will see the following entry:

    "test-nightwatch": "node seed.js && ./nightwatch"

under the `scripts` property. This command runs `nightwatch` with the configuration specified in `nightwatch.conf.js`. To run the command just enter:

    npm run test-nightwatch

_Note_: Nightwatch needs a selenium driver and a chrome driver to run the tests. When you ran 'npm install' the script `"./bin/installSeleniumAndChromeWebDriver"` should have been executed and install the dependencies for you. If make sure it has executable permissions with:

    chmod u+x ./bin/installSeleniumAndChromeWebDriver

and run it again with:

    ./bin/installSeleniumAndChromeWebDriver


### Running individual mocha tests (exercises 1 to 4)
If you want to run an individual test or set of tests do

    ./node_modules/mocha/bin/mocha -R spec <file-or-dir-1> <file-or-dir-2> ... <file-or-dir-n>

To make things a bit easier, install `mocha` globally with:

    npm install -g mocha

This will allow you to run tests like:

    mocha -R spec <file-or-dir-1> <file-or-dir-2> ... <file-or-dir-n>

## Tips and Tricks
###Installing npm packages
To install an [npm](https://www.npmjs.org/) package and save it to package.json:

    npm install --save <package-name>

###Productivity

* __[nodemon](http://nodemon.io/)__ monitors changes in your source and restarts the server automatically.

install with:

    npm install -g nodemon

* __[livereload](http://livereload.com/)__ monitors changes in your source and refreshes your browser. It also supports preprocessing, for example compiling [LESS](http://lesscss.org/) files .

install with:

    npm install -g livereload

###Seed db
If you have implemented your model and the model tests pass, you should be able to seed the db with some data by typing:

    node seed.js //it will drop the db first

### Upload
`body-parser` is already set up for you. It's better if you set `Content-Type: 'application/json'` when you upload. The uploaded body will be available under `req.body` in you route handlers.

### How to organize your routes
This is a matter of personal preference but here's some rough guidelies:

* __Your logic is small (< 20-30 Lines Of Code (LOC) per route) and you don't have a lot or subroutes (say less than 10 for a specific resource)__.  In this case you may have one file per resource where you define the router, routes and logic and one file shared by all resources for common functionality.

Example dir tree:

    routes
    |-- index.js      // router, routes and logic for /
    |-- artists.js    // router, routes and logic for /artists (model Artist)
    |-- tracks.js     // router, routes and logic for /tracks (model Track)
    |-- utils.js      // common functionality shared among all routes

* __Your logic is average (between 20 and 100 LOC per route) and you have a lot of subroutes (say more than 15 for a specific)__. In this case for each resource you may have a dir with a `router.js`, `handler.js` and `util.js`. `router.js` will host the router instantiation and the assignment of handlers and middleware to routes. `handler.js` will host the handler functions implemantation. `util.js` will have functionality that is common within the specific resource. It's important to note that a 100 LOC function is a good indication that you need to break this function to smaller ones that focus on one thing. Finally, like in the first scenario, for functionality that is common among all resources, can create one shared file that implements all this functionality.

Example dir tree:

    routes
    |-- utils.js      //common functionality shared among all routes
    `-- root
        `-- router.js  // router and routes for /
        `-- handler.js // logic for /
        `-- utils`.js  // common functionality with /
    `-- artists
        `-- router.js  // router and routes for /artists
        `-- handler.js // logic for /artists (model Artist)
        `-- utils`.js  // common functionality with /artists
    `-- tracks
        `-- router.js  // router and routes for /tracks
        `-- handler.js // logic for /tracks (model Track)
        `-- utils`.js  // common functionality with /tracks

If your logic is bigger than the _average_ case then it's better if your logic is organized on a per feature basis (for example 'Upload', 'Control Panel').

### Do not Repeat Yourself - DRY
You may notice that some tasks are repeated often. Examples:

* `Model.findbyId` when a route has an :id parameter.
* sending `404`'s when an `id` doesn't exist
* mongoose error handling for `POST` or `PUT` requests. First we check if it's a `CastError` or `TypeError` to send `400 - Bad Request` otherwise send `500`);

To conform to the DRY principle it helps to refactor common code so that is reusable by the rest of the app. Some express tips to help you with that:

* [middleware](http://expressjs.com/api.html#middleware)
* [app param](http://expressjs.com/api.html#app.param) and [router params](http://expressjs.com/api.html#router.param)
* [mongoose middleware](http://mongoosejs.com/docs/middleware.html)

Of course, for a lot of cases just moving boilerplate code to separate functions is enough.
### Mongoose

* [MongoHub](https://github.com/jeromelebel/MongoHub-Mac) is a GUI client for MongoDB. It can help you inspect your data, delete stuff etc.
* __Password Encryption__. It's not very secure to store user passwords unencrypted. [bcrypt](https://github.com/ncb000gt/node.bcrypt.js/) can help you encrypt your passwords for mongoose. This [article](http://devsmash.com/blog/password-authentication-with-mongoose-and-bcrypt) has more info on how to do that.
If you decide to implement this, uncomment the relevant test in `test/ex1/user.js`
* ` mongoose.Schema.Types.ObjectId` __!=__ ` mongoose.Types.ObjectId`. The former is used when defining a schema type, the latter when you want to create an ObjectId and assign it to a model instance property.

Example:

    //Creating a Schema  
    var mongoose = require('mongoose')
    var ObjectId = mongoose.Schema.Types.ObjectId;

    var Track = new Schema({
      artist : {type: ObjectId, ref:'Artist'}
    });

    //Creating a model instance  
    var mongoose = require('mongoose')
    var ObjectId = mongoose.Types.ObjectId;

    var artist = new Artist({
      _id : ObjectId()
    });

    var Track = new Track({
      artist: artist._id
    });
