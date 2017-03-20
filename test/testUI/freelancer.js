'use strict';

var should = require('should');
var utils = require('../utils');
var request = require('supertest');

var Browser = require("zombie");
var url = "http://localhost:3000/";

var app = require('../../app');

describe("testing freelancer frontend", function() {
	var browser = new Browser();

	before(function(done) {
		// starting the server
		app.set('port', process.env.PORT || 3000);
		this.server = app.listen(app.get('port'));

		browser.visit(url, done);
	});

	describe('Reach using search', function() {
		it('should have the correct title', function() {
			browser.assert.text('title', 'JobAdvisor');
		});
	});
});
