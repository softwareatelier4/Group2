'use strict';
var seedDb = require('../seedDb');
var utils = require('../utils');

module.exports = {
	beforeEach: (browser, done) => {
		seedDb.seed(done);
	},

	afterEach: (browser, done) => {
		utils.dropDbAndCloseConnection(done);
	},

	'Search for emergency': function(client) {
		client
			.url('http://localhost:3000/')
			.waitForElementVisible('body', 1000)
			.assert.visible('input[id=search-text]')
			.assert.visible('span[id=basic-addon1]')

		utils.setPositionBox(client, 'Lugano');

		client
			.clearValue('input[id=search-text]')
			.setValue('input[id=search-text]', 'Plumber')
			.click('span[id=basic-addon1]')
			.pause(500)
			.assert.urlContains('search=Plumber')
			.pause(500)
			.assert.visible('div[id=f00000000000000000000003]')
			.assert.visible('div[id=f00000000000000000000009]')
			.assert.visible('div[id=f00000000000000000000039]')
			.assert.visible('div[id=f00000000000000000000044]')
			.assert.visible('span[id=emergency-btn]')
			.pause(200)
			.execute(function() {
				document.getElementById('emergency-btn').click();
			})
			.assert.attributeContains('#btn-distance', 'data-sorttype', 'asc')
			.assert.visible('div[id=f00000000000000000000014]')
			.assert.visible('div[id=f00000000000000000000009]')
			.getAttribute("#main-content .result-card:nth-child(1)", "id", function(result) {
				this.assert.equal(result.value, 'f00000000000000000000014');
			})
			.getAttribute("#main-content .result-card:nth-child(2)", "id", function(result) {
				this.assert.equal(result.value, 'f00000000000000000000009');
			})
			.execute(function() {
				document.getElementById('emergency-btn').click();
			})
			.pause(500)
			.assert.attributeContains('#btn-distance', 'data-sorttype', 'neutral')
			.assert.visible('div[id=f00000000000000000000003]')
			.assert.visible('div[id=f00000000000000000000009]')
			.assert.visible('div[id=f00000000000000000000039]')
			.assert.visible('div[id=f00000000000000000000044]')
			.end();
	},
	'Search for emergency with filter and sort test': function(client) {
		client
			.url('http://localhost:3000/')
			.waitForElementVisible('body', 1000)
			.assert.visible('input[id=search-text]')
			.assert.visible('span[id=basic-addon1]')


		utils.setPositionBox(client, 'Lugano');

		client
			.clearValue('input[id=search-text]')
			.setValue('input[id=search-text]', 'Plumber')
			.click('span[id=basic-addon1]')
			.pause(200)
			.assert.urlContains('search=Plumber')
			.pause(500)
			.assert.visible('div[id=f00000000000000000000003]')
			.assert.visible('div[id=f00000000000000000000009]')
			.assert.visible('div[id=f00000000000000000000039]')
			.assert.visible('div[id=f00000000000000000000044]')
			.assert.visible('input[id=price-input]')
			.clearValue('input[id=price-input]')
			.setValue('input[id=price-input]', '100')
			.pause(500)
			.assert.visible('div[id=f00000000000000000000043]')
			.assert.visible('div[id=f00000000000000000000009]')
			.assert.visible('span[id=btn-price]')
			.click('span[id=btn-price]')
			.pause(500)
			.click('span[id=btn-price]')
			.pause(500)
			.assert.visible('div[id=f00000000000000000000043]')
			.assert.visible('div[id=f00000000000000000000003]')
			.assert.visible('span[id=emergency-btn]')
			.pause(200)
			.execute(function() {
				document.getElementById('emergency-btn').click();
			})
			.pause(200)
			.assert.attributeContains('#btn-distance', 'data-sorttype', 'asc')
			.assert.attributeContains('#btn-price', 'data-sorttype', 'neutral')
			.assert.visible('div[id=f00000000000000000000014]')
			.assert.visible('div[id=f00000000000000000000009]')
			.execute(function() {
				document.getElementById('emergency-btn').click();
			})
			.pause(500)
			.assert.attributeContains('#btn-distance', 'data-sorttype', 'neutral')
			.assert.attributeContains('#btn-price', 'data-sorttype', 'desc')
			.assert.visible('div[id=f00000000000000000000043]')
			.assert.visible('div[id=f00000000000000000000003]')
			.end();
	}
};
