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

	'Check insertion of city-state search test': function(client) {
		client
			.url('http://localhost:3000/')
			.waitForElementVisible('body', 1000)
			.assert.visible('input[id=search-text]')
			.assert.visible('span[id=basic-addon1]')
			.pause(1000)
			.clearValue('input[id=search-text]')
			.clearValue('input[id=position]')
			.setValue('input[id=position]', 'Piacenza')
			.click('input[id=position]')
			.waitForElementVisible('.pac-container', 60000)
			.pause(500)
			.setValue('input[id=position]', client.Keys.ENTER)
			.click('span[id=basic-addon1]')
			.pause(1000)
			.assert.urlContains('city=Piacenza')
			.assert.urlContains('state=Italy')
			.assert.urlContains('latitude=45.0526206&longitude=9.692984499999966')
			.end();

	}
};
