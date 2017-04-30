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
			.url('http://localhost:3000/')
			.waitForElementVisible('body', 1000)
			.assert.visible('input[id=search-text]')
			.assert.visible('span[id=basic-addon1]')
			.clearValue('input[id=search-text]')
			.setValue('input[id=search-text]', 'Nevio Valsangiacomo')
			.click('span[id=basic-addon1]')
			.pause(500)
			.waitForElementVisible('main[id=main-content]', 1000)
			.waitForElementVisible('div[id=f00000000000000000000001]', 1000)
			.waitForElementVisible('#f00000000000000000000001 .card-block button', 1000)
			.click('#f00000000000000000000001 .card-block button')
			.pause(500)
			.waitForElementVisible('#profile-freelancer', 1000)
			.pause(100)
			.waitForElementVisible('div[name=c00000000000000000000002]', 1000)
			.getText("div[name=c00000000000000000000002] h5", function(result) {
				this.assert.equal(result.value, "R2");
			})
			.assert.visible('div[name=c00000000000000000000005]')
			.click('[name=c00000000000000000000005] .card-block button')
			.pause(500)
			.clearValue('[name=c00000000000000000000005] .card-block form .form-group textarea')
			.setValue('[name=c00000000000000000000005] .card-block form .form-group textarea', 'This is a nightwatch test')
			.pause(500)
			.click('[name=c00000000000000000000005] .card-block form button')
			.pause(500)
			.waitForElementVisible('[name=c00000000000000000000005] .card-block .reply .card-block p', 1000)
			.getText("[name=c00000000000000000000005] .card-block .reply .card-block p", function(result) {
				this.assert.equal(result.value, "This is a nightwatch test");
			})
			.assert.visible('[name=c00000000000000000000005] button[name=freelancer-reply-edit]')
			.assert.visible('[name=c00000000000000000000005] button[name=freelancer-reply-delete]')
			.click('[name=c00000000000000000000005] button[name=freelancer-reply-edit]')
			.pause(500)
			.assert.visible('[name=c00000000000000000000005] button[name=freelancer-reply-save]')
			.assert.visible('[name=c00000000000000000000005] button[name=freelancer-reply-delete]')
			.assert.visible('[name=c00000000000000000000005] button[name=freelancer-reply-eraser]')
			.assert.visible('[name=c00000000000000000000005] button[name=freelancer-reply-times]')
			.clearValue('[name=c00000000000000000000005] .reply textarea')
			.setValue('[name=c00000000000000000000005] .reply textarea', 'This is a nightwatch test modify')
			.click('[name=c00000000000000000000005] button[name=freelancer-reply-eraser]')
			.pause(500)
			.click('[name=c00000000000000000000005] button[name=freelancer-reply-save]')
			.pause(500)
			.waitForElementVisible('[name=c00000000000000000000005] .card-block .reply .card-block p', 1000)
			.getText("[name=c00000000000000000000005] .card-block .reply .card-block p", function(result) {
				this.assert.equal(result.value, "This is a nightwatch test");
			})
			.assert.visible('[name=c00000000000000000000005] button[name=freelancer-reply-edit]')
			.assert.visible('[name=c00000000000000000000005] button[name=freelancer-reply-delete]')
			.click('[name=c00000000000000000000005] button[name=freelancer-reply-edit]')
			.pause(500)
			.assert.visible('[name=c00000000000000000000005] button[name=freelancer-reply-save]')
			.assert.visible('[name=c00000000000000000000005] button[name=freelancer-reply-delete]')
			.assert.visible('[name=c00000000000000000000005] button[name=freelancer-reply-eraser]')
			.assert.visible('[name=c00000000000000000000005] button[name=freelancer-reply-times]')
			.click('[name=c00000000000000000000005] button[name=freelancer-reply-times]')
			.pause(500)
			.waitForElementVisible('[name=c00000000000000000000005] .card-block .reply .card-block p', 1000)
			.getText("[name=c00000000000000000000005] .card-block .reply .card-block p", function(result) {
				this.assert.equal(result.value, "This is a nightwatch test");
			})
			.assert.visible('[name=c00000000000000000000005] button[name=freelancer-reply-edit]')
			.assert.visible('[name=c00000000000000000000005] button[name=freelancer-reply-delete]')
			.click('[name=c00000000000000000000005] button[name=freelancer-reply-edit]')
			.pause(500)
			.assert.visible('[name=c00000000000000000000005] button[name=freelancer-reply-save]')
			.assert.visible('[name=c00000000000000000000005] button[name=freelancer-reply-delete]')
			.assert.visible('[name=c00000000000000000000005] button[name=freelancer-reply-eraser]')
			.assert.visible('[name=c00000000000000000000005] button[name=freelancer-reply-times]')
			.clearValue('[name=c00000000000000000000005] .reply textarea')
			.setValue('[name=c00000000000000000000005] .reply textarea', 'This is a nightwatch test modify')
			.click('[name=c00000000000000000000005] button[name=freelancer-reply-save]')
			.pause(500)
			.waitForElementVisible('[name=c00000000000000000000005] .card-block .reply .card-block p', 1000)
			.getText("[name=c00000000000000000000005] .card-block .reply .card-block p", function(result) {
				this.assert.equal(result.value, "This is a nightwatch test modify");
			})
			.assert.visible('[name=c00000000000000000000005] button[name=freelancer-reply-edit]')
			.assert.visible('[name=c00000000000000000000005] button[name=freelancer-reply-delete]')
			.click('[name=c00000000000000000000005] button[name=freelancer-reply-delete]')
			.pause(500)
			.assert.visible('[name=c00000000000000000000005] button[name=freelancer-reply-delete-yes]')
			.assert.visible('[name=c00000000000000000000005] button[name=freelancer-reply-delete-no]')
			.click('[name=c00000000000000000000005] button[name=freelancer-reply-delete-no]')
			.pause(500)
			.assert.hidden('[name=c00000000000000000000005] button[name=freelancer-reply-delete-yes]')
			.assert.hidden('[name=c00000000000000000000005] button[name=freelancer-reply-delete-no]')
			.click('[name=c00000000000000000000005] button[name=freelancer-reply-delete]')
			.pause(500)
			.assert.visible('[name=c00000000000000000000005] button[name=freelancer-reply-delete-yes]')
			.assert.visible('[name=c00000000000000000000005] button[name=freelancer-reply-delete-no]')
			.click('[name=c00000000000000000000005] button[name=freelancer-reply-delete-yes]')
			.pause(500)
			.assert.hidden('[name=c00000000000000000000005] .reply .card-block')
			.end();
	}
};