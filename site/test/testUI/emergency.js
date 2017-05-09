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

		utils.setPositionBox(client, 'Udine');

		client
			.clearValue('input[id=search-text]')
			.setValue('input[id=search-text]', 'Developer')
			.click('span[id=basic-addon1]')
			.pause(500)
			.assert.urlContains('search=Developer')
			.pause(500)
			.assert.visible('div[id=f00000000000000000000000]')
			.assert.visible('div[id=f00000000000000000000006]')
			.assert.visible('span[id=emergency-btn]')
			.click('span[id=emergency-btn]')
			.pause(500)
			.assert.attributeContains('#btn-distance', 'data-sorttype', 'asc')
			.assert.visible('div[id=f00000000000000000000000]')
			.getAttribute("#main-content .result-card:nth-child(1)", "id", function(result) {
				this.assert.equal(result.value, 'f00000000000000000000000');
			})
			.click('span[id=emergency-btn]')
			.pause(500)
			.assert.attributeContains('#btn-distance', 'data-sorttype', 'neutral')
			.getAttribute("#main-content .result-card:nth-child(1)", "id", function(result) {
				this.assert.equal(result.value, 'f00000000000000000000000');
			})
			.getAttribute("#main-content .result-card:nth-child(2)", "id", function(result) {
				this.assert.equal(result.value, 'f00000000000000000000006');
			})
			.end();
	},
	'Search for emergency with filter and sort test': function(client) {
		client
			.url('http://localhost:3000/')
			.waitForElementVisible('body', 1000)
			.assert.visible('input[id=search-text]')
			.assert.visible('span[id=basic-addon1]')


		utils.setPositionBox(client, 'Udine');

		client
			.clearValue('input[id=search-text]')
			.setValue('input[id=search-text]', 'Tecnico')
			.click('span[id=basic-addon1]')
			.pause(500)
			.assert.urlContains('search=Tecnico')
			.pause(500)
			.assert.visible('div[id=f00000000000000000000000]')
			.assert.visible('div[id=f00000000000000000000004]')
			.assert.visible('div[id=f00000000000000000000005]')
			.assert.visible('div[id=f00000000000000000000006]')
			.assert.visible('input[id=price-input]')
			.clearValue('input[id=price-input]')
			.setValue('input[id=price-input]', '100')
			.pause(500)
			.getAttribute("#main-content .result-card:nth-child(1)", "id", function(result) {
				this.assert.equal(result.value, 'f00000000000000000000000');
			})
			.getAttribute("#main-content .result-card:nth-child(2)", "id", function(result) {
				this.assert.equal(result.value, 'f00000000000000000000006');
			})
			.assert.visible('span[id=btn-price]')
			.click('span[id=btn-price]')
			.pause(500)
			.click('span[id=btn-price]')
			.pause(500)
			.assert.attributeContains('#btn-price', 'data-sorttype', 'desc')
			.getAttribute("#main-content .result-card:nth-child(1)", "id", function(result) {
				this.assert.equal(result.value, 'f00000000000000000000006');
			})
			.getAttribute("#main-content .result-card:nth-child(2)", "id", function(result) {
				this.assert.equal(result.value, 'f00000000000000000000000');
			})
			.click('span[id=emergency-btn]')
			.pause(500)
			.assert.attributeContains('#btn-distance', 'data-sorttype', 'asc')
			.assert.attributeContains('#btn-price', 'data-sorttype', 'neutral')
			.getAttribute("#main-content .result-card:nth-child(1)", "id", function(result) {
				this.assert.equal(result.value, 'f00000000000000000000000');
			})
			.click('span[id=emergency-btn]')
			.pause(500)
			.assert.attributeContains('#btn-distance', 'data-sorttype', 'neutral')
			.assert.attributeContains('#btn-price', 'data-sorttype', 'desc')
			.getAttribute("#main-content .result-card:nth-child(1)", "id", function(result) {
				this.assert.equal(result.value, 'f00000000000000000000006');
			})
			.getAttribute("#main-content .result-card:nth-child(2)", "id", function(result) {
				this.assert.equal(result.value, 'f00000000000000000000000');
			})
			.end();
	}
};
