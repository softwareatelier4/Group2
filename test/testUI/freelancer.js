'use strict';

var should = require('should');
var utils = require('../utils');
var request = require('supertest');
var app = require('../../app');

var Browser = require("zombie");
Browser.localhost('127.0.0.1', 3000);

describe("testing freelancer frontend", function() {
	var browser = new Browser();

	before(function(done) {
		// starting the server
		app.set('port', 3000);
		this.server = app.listen(app.get('port'));

		browser.visit('', done);
	});

	describe('Reach using search', function() {
		it('should have the correct title', function() {
			browser.assert.text('title', 'JobAdvisor');
		});
	});
});
