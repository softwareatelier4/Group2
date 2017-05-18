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

	'Review from homepage': function(client) {
		client
			.resizeWindow(1500, 800)
			.url('http://localhost:3000')
			.waitForElementVisible('body', 1000)

			.assert.visible('div[id=navbarSupportedContent]')
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


			.setValue('input[id=login-email]', 's.s@usi.ch')
			.setValue('input[id=modal-password]', 'test')

			.assert.valueContains('input[id=login-email]', 's.s@usi.ch')
			.assert.valueContains('input[id=modal-password]', 'test')

			.assert.visible('button[id="login-button"]')

			.click('button[id="login-button"]')

			.pause(200)

			.assert.visible('#navbar-top-desktop a[name="logout-link"]')

			.waitForElementVisible('body', 1000)
			.assert.visible('input[id=search-text]')
			.assert.visible('span[id=basic-addon1]')
			.pause(100)
			.clearValue('input[id=search-text]')

		utils.setPositionBox(client, 'Berlin')

		client
			.pause(500)
			.clearValue('input[id=search-text]')
			.setValue('input[id=search-text]', 'Scotti')
			.click('span[id=basic-addon1]')
			.pause(500)
			.waitForElementVisible('main[id=main-content]', 1000)
			.waitForElementVisible('div[id=f00000000000000000000004]', 1000)
			.waitForElementVisible('#f00000000000000000000004 .card-block button', 1000)
			.click('#f00000000000000000000004 .card-block button')
			.pause(500)
			.waitForElementVisible('#profile-freelancer', 1000)
			.pause(100)
			.waitForElementVisible('div[name=c00000000000000000000002]', 1000)
			.getText("div[name=c00000000000000000000002] h5", function(result) {
				this.assert.equal(result.value, "Amazing Interior Designer!");
			})
			.assert.visible('div[name=c00000000000000000000002]')
			.click('[name=c00000000000000000000002] .card-block button')
			.pause(500)
			.clearValue('[name=c00000000000000000000002] .card-block form .form-group textarea')
			.setValue('[name=c00000000000000000000002] .card-block form .form-group textarea', 'This is a nightwatch test')
			.pause(500)
			.click('[name=c00000000000000000000002] .card-block form button')
			.pause(500)
			.waitForElementVisible('[name=c00000000000000000000002] .card-block .reply .card-block p', 1000)
			.getText("[name=c00000000000000000000002] .card-block .reply .card-block p", function(result) {
				this.assert.equal(result.value, "This is a nightwatch test");
			})
			.assert.visible('[name=c00000000000000000000002] button[name=freelancer-reply-edit]')
			.assert.visible('[name=c00000000000000000000002] button[name=freelancer-reply-delete]')
			.click('[name=c00000000000000000000002] button[name=freelancer-reply-edit]')
			.pause(500)
			.assert.visible('[name=c00000000000000000000002] button[name=freelancer-reply-save]')
			.assert.visible('[name=c00000000000000000000002] button[name=freelancer-reply-delete]')
			.assert.visible('[name=c00000000000000000000002] button[name=freelancer-reply-eraser]')
			.assert.visible('[name=c00000000000000000000002] button[name=freelancer-reply-times]')
			.clearValue('[name=c00000000000000000000002] .reply textarea')
			.setValue('[name=c00000000000000000000002] .reply textarea', 'This is a nightwatch test modify')
			.click('[name=c00000000000000000000002] button[name=freelancer-reply-eraser]')
			.pause(500)
			.click('[name=c00000000000000000000002] button[name=freelancer-reply-save]')
			.pause(500)
			.waitForElementVisible('[name=c00000000000000000000002] .card-block .reply .card-block p', 1000)
			.getText("[name=c00000000000000000000002] .card-block .reply .card-block p", function(result) {
				this.assert.equal(result.value, "This is a nightwatch test");
			})
			.pause(500)
			.click('[name=c00000000000000000000002] button[name=freelancer-reply-delete]')
			.assert.visible('[name=c00000000000000000000002] button[name=freelancer-reply-delete-yes]')
			.assert.visible('[name=c00000000000000000000002] button[name=freelancer-reply-delete-no]')
			.click('[name=c00000000000000000000002] button[name=freelancer-reply-delete-no]')
			.pause(500)
			.assert.hidden('[name=c00000000000000000000002] button[name=freelancer-reply-delete-yes]')
			.assert.hidden('[name=c00000000000000000000002] button[name=freelancer-reply-delete-no]')
			.click('[name=c00000000000000000000002] button[name=freelancer-reply-delete]')
			.pause(500)
			.assert.visible('[name=c00000000000000000000002] button[name=freelancer-reply-delete-yes]')
			.assert.visible('[name=c00000000000000000000002] button[name=freelancer-reply-delete-no]')
			.click('[name=c00000000000000000000002] button[name=freelancer-reply-delete-yes]')
			.pause(500)
			.assert.hidden('[name=c00000000000000000000002] .reply .card-block')

			.end();
	}
};
