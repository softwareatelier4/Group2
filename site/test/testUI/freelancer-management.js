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

	'Test modify freelancer': function(client) {
		client
			.resizeWindow(1500, 800)
			.url('http://localhost:3000/#freelancer=f00000000000000000000004')
			.waitForElementVisible('body', 1000)

		.assert.elementPresent('a[name=login-link]')
			.assert.visible('#navbar-top-desktop a[name="login-link"]')
			.click('#navbar-top-desktop a[name="login-link"]')
			.pause(200)
			.assert.visible('input#modal-password')
			.setValue('input[id=login-email]', 's.s@usi.ch')
			.setValue('input#modal-password', 'test')
			.pause(200)
			.click('button[id=login-button]')
			.pause(500)

		.url('http://localhost:3000/#freelancer=f00000000000000000000004')
			.waitForElementVisible('button[id=modify-button]', 2000)
			.assert.visible('div[id=info-name-button]')
			.assert.visible('div[id=info-name-bottom]')
			.assert.visible('div[id=info]')
			.assert.visible('div[id=email]')
			.assert.visible('div[id=phone]')


		.click('button[id=modify-button]')
			.pause(500)

		.clearValue('input[id=modal-workName]')
			.clearValue('input[id=modal-phone]')
			.clearValue('textarea[id=modal-description]')

		.setValue('input[id=modal-workName]', "Sample Name")
			.setValue('input[id=modal-phone]', "+41 24 2222222")
			.setValue('textarea[id=modal-description]', "New Description")

		.pause(500)

		.click('button[id=save-button]')
			.pause(100)
			.url('http://127.0.0.1:3000/#freelancer=f00000000000000000000004')
			.waitForElementVisible('body', 2000)
			.assert.containsText('div[id=info-name-bottom]', "Sample Name")
			.assert.containsText('div[id=phone]', "+41 24 2222222")
			.assert.containsText('span[id=description]', "New Description")
			.end();
	}
};
