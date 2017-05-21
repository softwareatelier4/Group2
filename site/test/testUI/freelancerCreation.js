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
			.url('http://127.0.0.1:3000/freelancerCreation.html')
			.waitForElementVisible('body', 1000)
			.assert.visible('div[id=freelancerCreation]')
			.assert.visible('input[id=firstName-complex]')
			.assert.visible('input[id=lastName]')
			.assert.visible('input[id=workName]')
			.assert.visible('input[id=phone]')
			.assert.visible('input[id=position]')
			.clearValue('input[id=firstName-complex]')
			.setValue('input[id=firstName-complex]', 'Vincenzo123')
			.clearValue('input[id=lastName]')
			.setValue('input[id=lastName]', 'Ehiy')
			.clearValue('input[id=workName]')
			.setValue('input[id=workName]', 'Grunt')
			.clearValue('input[id=phone]')
			.setValue('input[id=phone]', '123123')

		utils.setPositionBox(page,'Milan, Metropolitan City of Milan, Italy');

		page
			.pause(1000)
			.assert.visible('input[id=tags]')
			.clearValue('input[id=tags]')
			.setValue('input[id=tags]', 'Pescatore')
			.sendKeys('input[id=tags]', page.Keys.ENTER)
			.assert.visible('input[id=email]')
			.clearValue('input[id=email]')
			.setValue('input[id=email]', 'vincenzo.ehiyvirgilio.it')
			.assert.visible('textarea[id=description]')
			.clearValue('textarea[id=description]')
			.setValue('textarea[id=description]', 'descripttion')

			.click('button[id=submit]')

			.pause(1000)
			.waitForElementVisible('main[id=main-content]', 1000)
			.end();
	}
};
