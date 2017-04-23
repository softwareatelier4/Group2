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

	'Check a correct claim': function(client) {
		client
			.url('http://localhost:3000/#freelancer=f00000000000000000000002')
			/// miss login
			.waitForElementVisible('body', 1000)
			.assert.visible('button[id=claim-button]')
			.click("#claim-button")
			.pause(100)
			.assert.visible('div[class=modal-content]')
			.pause(100)
			.setValue('input#uploadPictureClaim', require('path').resolve(__dirname + '/test-image.jpg'))
			.setValue('textarea#modal-descriptionClaim', 'I <3 cats')
			.click('button#submit-button')
			.pause(2000)
			.assert.visible("div#pending-claim-button")\
			.end()
	}

	'Check an error during the claim': function(client) {
		client
			.url('http://localhost:3000/html/claimRequestsView.html')
			/// miss login
			.waitForElementVisible('body', 1000)
			.assert.visible('tbody')
			.assert(getEls('tr', function(collection) {
				if (collection.length == 2) {
					return true;
				} else {
					return false;
				}
				return;
			}), true)
			.end()
	}
};
