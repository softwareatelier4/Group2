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
			.resizeWindow(1500, 800)
			.url('http://localhost:3000/#freelancer=f00000000000000000000002')
			.waitForElementVisible('body', 1000)
			.assert.elementPresent('a[name=login-link]')
			.assert.visible('#navbar-top-desktop a[name="login-link"]')
			.assert.hidden('div[id=modal-login]')
			.click('#navbar-top-desktop a[name="login-link"]')
			.pause(500)
			.assert.visible('input#modal-password')
			.setValue('input[id=login-email]', 'm.b@usi.ch')
			.setValue('input#modal-password', 'test')
			.pause(1000)
			.assert.visible('button[id=login-button]')
			.click('button[id=login-button]')
			.pause(500)
			.assert.visible('button[id=claim-button]')
			.click("#claim-button")
			.waitForElementVisible('button[id=submit-button]', 2000)
			.pause(100)
			.setValue('input#uploadPictureClaim', require('path').resolve(__dirname + '/../test.jpg'))
			.setValue('textarea#modal-descriptionClaim', 'I <3 cats')
			.click('button#submit-button')
			.pause(300)
			.assert.visible("div#pending-claim-button")
			.end()
	},

	'Check claim request table and a put request': function(client) {
		client
			.resizeWindow(1500, 800)
			.url('http://localhost:3000')
			.waitForElementVisible('body', 1000)
			.assert.elementPresent('a[name=login-link]')
			.assert.visible('#navbar-top-desktop a[name="login-link"]')
			.assert.hidden('div[id=modal-login]')
			.click('#navbar-top-desktop a[name="login-link"]')
			.pause(500)
			.assert.visible('input#modal-password')
			.setValue('input[id=login-email]', 'v.b@usi.ch')
			.setValue('input#modal-password', 'test')
			.pause(500)
			.assert.visible('button[id=login-button]')
			.click('button[id=login-button]')
			.pause(100)
			.assert.visible('#navbar-top-desktop a[name="claim-link"]')
			.click('#navbar-top-desktop a[name="claim-link"]')
			.pause(100)
			.assert.visible('tbody')
			.elements('css selector', 'tr', function(result) {
				client.assert.equal(result.value.length, 6);
			})
			.assert.visible('button[id=accept-btn]')
			.assert.visible('button[id=refuse-btn]')
			.click('button[id=accept-btn]')
			.elements('css selector', 'tr', function(result) {
				client.assert.equal(result.value.length, 6);
			})
			.end()
	},

};
