'use strict';

var should = require('should');
var utils = require('../utils');
var request = require('supertest');

var Browser = require("zombie");
var url = "http://localhost:3000/";


describe("testing freelancer frontend", function() {
	before(function() {
		var browser = new Browser({
			site: url
		});
	});

	describe('Reach using search', function() {
		it('should have the correct title', function() {
			browser.assert.text('title', 'JobAdvisor');
		});
	});
});
