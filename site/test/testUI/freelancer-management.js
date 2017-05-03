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
			.url('http://localhost:3000/#freelancer=f00000000000000000000000')
			.waitForElementVisible('body', 1000)

			.pause(500)

			.assert.elementPresent('a[name=login-link]')
			.assert.visible('#navbar-top-desktop a[name="login-link"]')
			.click('#navbar-top-desktop a[name="login-link"]')
			.pause(200)
			.assert.visible('input#modal-password')
			.setValue('input[id=login-email]', 'm.t@usi.ch')
			.setValue('input#modal-password', 'test')
			.pause(200)
			.click('button[id=login-button]')
			.pause(500)

			.assert.visible('div[id=info-name-button]')
			.assert.visible('button[id=modify-button]')
			.assert.visible('div[id=info-name-bottom]')
			.assert.visible('div[id=info]')
			.assert.visible('div[id=email]')
			.assert.visible('div[id=phone]')

			.click('button[id=modify-button]')
			.pause(200)

			.assert.visible('div[id=modal-ext]')
			.assert.visible('input[id=modal-firstName]')

			.assert.valueContains('input[id=modal-firstName]', "Marco")
			.assert.valueContains('input[id=modal-lastName]', "Tollini")
			.assert.valueContains('input[id=modal-workName]', "Il Tollo")
			.assert.valueContains('input[id=modal-email]', "tollim@usi.ch")
			.assert.valueContains('input[id=modal-phone]', "+39 380474747")


			.clearValue('input[id=modal-firstName]')
			.clearValue('input[id=modal-lastName]')
			.clearValue('input[id=modal-workName]')
			.clearValue('input[id=modal-email]')
			.clearValue('input[id=modal-phone]')

			.setValue('input[id=modal-firstName]', 'Nevio')
			.setValue('input[id=modal-lastName]', 'Valsa')
			.setValue('input[id=modal-workName]', "Sample Name")
			.setValue('input[id=modal-email]', "valsan@usi.ch")
			.setValue('input[id=modal-phone]', "+41 24 2222222")

			.click('button[id=save-button]')
			.pause(1000)

			.assert.containsText('span[id=profile-name]', 'Nevio')
			.assert.containsText('span[id=profile-name]', 'Valsa')
			.assert.containsText('div[id=info-name-bottom]', "Sample Name")
			.assert.containsText('div[id=email]', "valsan@usi.ch")
			.assert.containsText('div[id=phone]', "+41 24 2222222")

			.click('button[id=modify-button]')
			.pause(200)

			.clearValue('input[id=modal-firstName]')
			.clearValue('input[id=modal-lastName]')
			.clearValue('input[id=modal-workName]')
			.clearValue('input[id=modal-email]')
			.clearValue('input[id=modal-phone]')

			.setValue('input[id=modal-firstName]', 'Marco')
			.setValue('input[id=modal-lastName]', 'Tollini')
			.setValue('input[id=modal-workName]', "Il Tollo")
			.setValue('input[id=modal-email]', "tollim@usi.ch")
			.setValue('input[id=modal-phone]', "+39 380474747")

			.click('button[id=save-button]')
			.end();
	}
};
