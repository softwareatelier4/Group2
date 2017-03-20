// 'use strict';
//
// var should = require('should');
// var utils = require('../utils');
// var request = require('supertest');
// var app = require('../../app');
//
// var Browser = require("zombie");
// Browser.localhost('127.0.0.1', 3000);
//
// describe("Testing index page (initial search bar)", function() {
// 	var browser = new Browser();
//
// 	before(function(done) {
// 		browser.visit('#', done);
// 	});
//
//     describe("Search for the name \'Marco\'", function() {
//
//         before(function(done) {
//             let target = browser.querySelector('#basic-addon1');
//
//             browser
//                 .fill('#search-text', 'Marco')
//                 .fire(target, 'click', done);
//         });
//
//         browser.assert.style('#main-content', 'visibility', 'visible');
//
//
//         it('should have the correct title', function() {
//           browser.assert.text('title', 'JobAdvisor');
//         });
//
//         // it(", the main should be visible", function() {
//         //     //browser.assert.attribute("#main-content", "style", "visibility: visible;")
//         //     browser.assert.style('#main-content', 'visibility', 'visible');
//         // });
//
//         // it('should see welcome page', function() {
//         //     browser.assert.text('title', 'Welcome To Brains Depot');
//         // });
//
//     });
//
//     describe('Reach using search', function() {
//       it('should have the correct title', function() {
//           browser.assert.text('title', 'JobAdvisor');
//         });
//     });
// });
