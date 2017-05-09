'use strict';

module.exports = {
	'Test modify freelancer': function(client) {
		client
			.resizeWindow(1500, 800)
			.url('http://localhost:3000/#freelancer=f00000000000000000000002')
			.waitForElementVisible('body', 1000)
			.end();
	}
};
