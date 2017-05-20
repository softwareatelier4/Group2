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

	'Freelancer Creation': function(page) {
		page
			.url('http://localhost:3000/freelancerCreation.html')
			.waitForElementVisible('body', 1000)
			.assert.visible('div[id=freelancerCreation]')
			.assert.visible('input[id=firstName-complex]')
			.clearValue('input[id=firstName-complex]')
			.setValue('input[id=firstName-complex]', 'Vincenzo')
			.assert.visible('input[id=lastName]')
			.clearValue('input[id=lastName]')
			.setValue('input[id=lastName]', 'Ehiy')
			.assert.visible('input[id=workName]')
			.clearValue('input[id=workName]')
			.setValue('input[id=workName]', 'Grunt')
			.assert.visible('input[id=phone]')
			.clearValue('input[id=phone]')
			.setValue('input[id=phone]', '123123')
			.assert.visible('input[id=position]')
			.clearValue('input[id=position]')
			.setValue('input[id=position]', 'Milano')
			// .assert.visible('input[id=street]')
			// .clearValue('input[id=street]')
			// .setValue('input[id=street]', 'via Garibaldi')
			// .assert.visible('input[id=number]')
			// .clearValue('input[id=number]')
			// .setValue('input[id=number]', '12')
			// .assert.visible('input[id=zip]')
			// .clearValue('input[id=zip]')
			// .setValue('input[id=zip]', '20885')
			.assert.visible('input[id=tags]')
			.clearValue('input[id=tags]')
			.setValue('input[id=tags]', 'Pescatore')
			.sendKeys('input[id=tags]', page.Keys.ENTER)
			.assert.visible('input[id=email]')
			.clearValue('input[id=email]')
			.setValue('input[id=email]', 'vincenzo.ehiy@virgilio.it')
			.assert.visible('textarea[id=description]')
			.clearValue('textarea[id=description]')
			.setValue('textarea[id=description]', 'asd')
			// .click('button[id=submit]')
			// .pause(1000)
			// .waitForElementVisible('main[id=main-content]', 1000)
			// .waitForElementVisible('span[id=profile-name]', 1000)
			// .assert.containsText('span[id=profile-name]', 'Vincenzo Ehiy')
			// .assert.containsText('div[id=info-name-bottom]', 'Grunt')
			// .assert.visible('div[id=tag]')
			.end();
	}
};

