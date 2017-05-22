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

	'Search no-filter test': function(client) {
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
			.assert.visible('div[id=f00000000000000000000009]')
			.assert.visible('div[id=f00000000000000000000014]')
			.assert.visible('div[id=f00000000000000000000039]')
			.assert.visible('div[id=f00000000000000000000003]')
			.assert.visible('div[id=f00000000000000000000043]')
			.assert.visible('div[id=f00000000000000000000044]')
			.assert.visible('div[id=f00000000000000000000045]')
			.end();

	},
	'Search sorting test': function(client) {
		client
			.url('http://localhost:3000/')
			.waitForElementVisible('body', 1000)
			.assert.visible('input[id=search-text]')
			.assert.visible('span[id=basic-addon1]')

		utils.setPositionBox(client, 'Lugano');

		client
			.clearValue('input[id=search-text]')
			.setValue('input[id=search-text]', 'Plumber')
			.pause(100)
			.click('span[id=basic-addon1]')
			.pause(500)
			.assert.urlContains('search=Plumber')
			.pause(500)
			.assert.visible('div[id=f00000000000000000000009]')
			.assert.visible('div[id=f00000000000000000000014]')
			.assert.visible('div[id=f00000000000000000000039]')
			.assert.visible('div[id=f00000000000000000000003]')
			.assert.visible('div[id=f00000000000000000000043]')
			.assert.visible('div[id=f00000000000000000000044]')
			.assert.visible('div[id=f00000000000000000000045]')
			.assert.visible('span[id=btn-distance]')
			.click('span[id=btn-distance]')
			.pause(500)
			.assert.attributeContains('#btn-distance', 'data-sorttype', 'asc')
			.pause(500)
			.assert.visible('div[id=f00000000000000000000009]')
			.assert.visible('div[id=f00000000000000000000014]')
			.assert.visible('div[id=f00000000000000000000039]')
			.assert.visible('div[id=f00000000000000000000003]')
			.assert.visible('div[id=f00000000000000000000043]')
			.assert.visible('div[id=f00000000000000000000044]')
			.assert.visible('div[id=f00000000000000000000045]')
			.assert.visible('span[id=btn-time]')
			.click('span[id=btn-time]')
			.pause(500)
			.assert.attributeContains('#btn-time', 'data-sorttype', 'asc')
			.click('span[id=btn-time]')
			.pause(500)
			.assert.attributeContains('#btn-time', 'data-sorttype', 'desc')
			.pause(500)
			.assert.visible('div[id=f00000000000000000000009]')
			.assert.visible('div[id=f00000000000000000000014]')
			.assert.visible('div[id=f00000000000000000000039]')
			.assert.visible('div[id=f00000000000000000000003]')
			.assert.visible('div[id=f00000000000000000000043]')
			.assert.visible('div[id=f00000000000000000000044]')
			.assert.visible('div[id=f00000000000000000000045]')
			.clearValue('input[id=search-text]')
			.setValue('input[id=search-text]', 'Nail')
			.click('span[id=basic-addon1]')
			.pause(500)
			.assert.urlContains('search=Nail')
			.assert.visible('div[id=f00000000000000000000013]')
			.assert.visible('div[id=f00000000000000000000015]')
			.assert.visible('div[id=f00000000000000000000012]')
			.assert.visible('div[id=f00000000000000000000011]')
			.assert.visible('div[id=f00000000000000000000034]')
			.assert.visible('div[id=f00000000000000000000035]')
			.assert.visible('div[id=f00000000000000000000033]')
			.assert.visible('span[id=btn-score]')
			.click('span[id=btn-score]')
			.pause(500)
			.assert.attributeContains('#btn-score', 'data-sorttype', 'asc')
			.pause(500)
			.assert.visible('div[id=f00000000000000000000013]')
			.assert.visible('div[id=f00000000000000000000015]')
			.assert.visible('div[id=f00000000000000000000012]')
			.assert.visible('div[id=f00000000000000000000011]')
			.assert.visible('div[id=f00000000000000000000034]')
			.assert.visible('div[id=f00000000000000000000035]')
			.assert.visible('div[id=f00000000000000000000033]')
			.assert.visible('span[id=btn-name]')
			.click('span[id=btn-name]')
			.pause(500)
			.assert.attributeContains('#btn-score', 'data-sorttype', 'neutral')
			.assert.attributeContains('#btn-name', 'data-sorttype', 'asc')
			.pause(500)
			.assert.visible('div[id=f00000000000000000000013]')
			.assert.visible('div[id=f00000000000000000000015]')
			.assert.visible('div[id=f00000000000000000000012]')
			.assert.visible('div[id=f00000000000000000000011]')
			.assert.visible('div[id=f00000000000000000000034]')
			.assert.visible('div[id=f00000000000000000000035]')
			.assert.visible('div[id=f00000000000000000000033]')
			.click('span[id=btn-name]')
			.pause(500)
			.assert.attributeContains('#btn-name', 'data-sorttype', 'desc')
			.pause(500)
			.assert.visible('div[id=f00000000000000000000013]')
			.assert.visible('div[id=f00000000000000000000015]')
			.assert.visible('div[id=f00000000000000000000012]')
			.assert.visible('div[id=f00000000000000000000011]')
			.assert.visible('div[id=f00000000000000000000034]')
			.assert.visible('div[id=f00000000000000000000035]')
			.assert.visible('div[id=f00000000000000000000033]')
			.click('span[id=btn-name]')
			.pause(500)
			.assert.attributeContains('#btn-name', 'data-sorttype', 'neutral')
			.clearValue('input[id=search-text]')
			.setValue('input[id=search-text]', 'Designer')
			.click('span[id=basic-addon1]')
			.pause(500)
			.assert.urlContains('search=Designer')
			.pause(500)
			.assert.visible('div[id=f00000000000000000000046]')
			.end();
	},
	'Search filter and sort test': function(client) {
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
			.assert.visible('div[id=f00000000000000000000009]')
			.assert.visible('div[id=f00000000000000000000014]')
			.assert.visible('div[id=f00000000000000000000039]')
			.assert.visible('div[id=f00000000000000000000003]')
			.assert.visible('div[id=f00000000000000000000043]')
			.assert.visible('div[id=f00000000000000000000044]')
			.assert.visible('div[id=f00000000000000000000045]')
			.assert.visible('input[id=price-input]')
			.clearValue('input[id=price-input]')
			.setValue('input[id=price-input]', '100')
			.pause(500)
			.assert.visible('div[id=f00000000000000000000009]')
			.assert.visible('div[id=f00000000000000000000014]')
			.assert.visible('div[id=f00000000000000000000003]')
			.assert.visible('div[id=f00000000000000000000043]')
			.assert.visible('div[id=f00000000000000000000044]')
			.assert.visible('div[id=f00000000000000000000045]')
			.assert.visible('span[id=btn-name]')
			.click('span[id=btn-price]')
			.pause(500)
			.click('span[id=btn-price]')
			.pause(500)
			.assert.attributeContains('#btn-price', 'data-sorttype', 'desc')
			.getAttribute("#main-content .result-card:nth-child(1)", "id", function(result) {
				this.assert.equal(result.value, 'f00000000000000000000044');
			})
			.getAttribute("#main-content .result-card:nth-child(6)", "id", function(result) {
				this.assert.equal(result.value, 'f00000000000000000000003');
			})
			.end();
	}
};
