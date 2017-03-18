'use strict';

var should = require('should');
var utils = require('../../utils');
var app = require('../../../app');
var request = require('supertest');

describe('Testing Read for api/', function() {
	describe('GET /api/', function() {

		it('Should return the correct view', function(done) {
			request(app)
				.get('/api/')
				.set('Accept', 'text/html')
				.expect('Content-Type', /html/, 'it should respond with HTML')
				.expect(200, done);
		});
	});
});
