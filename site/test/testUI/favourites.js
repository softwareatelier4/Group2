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

	'User favorites tests': function(client) {
		client
			.url('http://localhost:3000/')
			.waitForElementVisible('body', 1000)
			.resizeWindow(1500, 800)
			.pause(100)
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
			.clearValue('input[id=search-text]')
			.setValue('input[id=search-text]', 'Angelo')
			.pause(100)
			.waitForElementVisible('main[id=main-content]', 1000)
			.waitForElementVisible('div[id=f00000000000000000000015]', 1000)
			.waitForElementVisible('#f00000000000000000000015', 1000)
			.pause(500)
			.click('#f00000000000000000000015 .card-block button')
			.waitForElementVisible('#profile-freelancer', 1000)
			.pause(500)
			.assert.visible('#main-info')
			.assert.visible('#info-name')
			.assert.visible('.info-name-top')
			.assert.visible('#info-name-bottom')
			.assert.visible('#favorite')
			.click('#favorite')
			.pause(200)
			.assert.visible('#navbar-top-desktop a[name="favorites-link"]')
			.click('#navbar-top-desktop a[name="favorites-link"]')
			.pause(200)
			.waitForElementVisible('main[id=main-content]', 1000)
			.assert.visible('div[id=f00000000000000000000022]')
			.assert.visible('div[id=f00000000000000000000012]')
			.assert.visible('div[id=f00000000000000000000050]')
			.assert.visible('div[id=f00000000000000000000043]')
			.assert.visible('div[id=f00000000000000000000002]')
			.assert.visible('div[id=f00000000000000000000018]')
			.assert.visible('div[id=f00000000000000000000015]')
			.assert.visible('div[id=f00000000000000000000001]')
			.assert.visible('div[id=f00000000000000000000032]')
			.assert.visible('div[id=f00000000000000000000021]')
			.assert.visible('div[id=f00000000000000000000042]')
			.pause(200)
			.end();
		}
};
