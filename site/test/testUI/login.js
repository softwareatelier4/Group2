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

	'Test Login Modal': function(client) {
		client
			.resizeWindow(1500, 800)
			.url('http://localhost:3000')
			.waitForElementVisible('body', 1000)

			.assert.visible('div[id=navbarSupportedContent]')


			// REGISTRATION TEST

			.assert.visible('#navbar-top-desktop a[name="register-link"]')

			.click('#navbar-top-desktop a[name="register-link"]')
			.pause(100)

			.assert.urlEquals('http://localhost:3000/registration.html')

			.assert.visible('input[id="firstName"]')
			.assert.visible('input[id="lastName"]')
			.assert.visible('input[id="email"]')
			.assert.visible('input[id="password"]')
			.assert.visible('input[id="repeatPassword"]')

			.clearValue('input[id="firstName"]')
			.clearValue('input[id="lastName"]')
			.clearValue('input[id="email"]')
			.clearValue('input[id="password"]')
			.clearValue('input[id="repeatPassword"]')

			.setValue('input[id="firstName"]', "Riccardo")
			.setValue('input[id="lastName"]', "Gabriele")
			.setValue('input[id="email"]', "riccardo@usi.ch")
			.setValue('input[id="password"]', "123123")
			.setValue('input[id="repeatPassword"]', "123123")

			.assert.valueContains('input[id="firstName"]', "Riccardo")
			.assert.valueContains('input[id="lastName"]', "Gabriele")
			.assert.valueContains('input[id="email"]', "riccardo@usi.ch")
			.assert.valueContains('input[id="password"]', "123123")
			.assert.valueContains('input[id="repeatPassword"]', "123123")

			.assert.visible('button[id="formButton"]')

			.click('button[id="formButton"]')

			.pause(2000)

			.assert.urlEquals('http://localhost:3000/')


			// LOGIN TEST

			.pause(2000)

			.assert.elementPresent('a[name=login-link]')

			.assert.visible('#navbar-top-desktop a[name="login-link"]')

			.assert.hidden('div[id=modal-login]')

			.click('#navbar-top-desktop a[name="login-link"]')

			.pause(500)

			.waitForElementVisible('div[id=modal-login]', 1000)

			.assert.visible('input[id=login-email]')
			.assert.visible('input[id=modal-password]')

			.clearValue('input[id=login-email]')
			.clearValue('input[id=modal-password]')

			.setValue('input[id=login-email]', 'm.t@usi.ch')
			.setValue('input[id=modal-password]', 'test')

			.assert.valueContains('input[id=login-email]', 'm.t@usi.ch')
			.assert.valueContains('input[id=modal-password]', 'test')

			.assert.visible('button[id="login-button"]')

			.click('button[id="login-button"]')

			.pause(200)

			.assert.visible('#navbar-top-desktop a[name="logout-link"]')

			.end();
	}
};
