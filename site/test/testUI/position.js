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
			.pause(100)
			.clearValue('input[id=search-text]')

		utils.setPositionBox(client, 'Piacenza');

		client
			.click('span[id=basic-addon1]')
			.pause(1000)
			.assert.urlContains('city=Piacenza')
			.assert.urlContains('formatted_address=Piacenza,$Province$of$Piacenza,$Italy')
			.assert.urlContains('latitude=45.0526206&longitude=9.692984499999966')
			.end();

	}
};
