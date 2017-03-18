module.exports = {
	'indexUI Tests': function(page) {
		page
			.url('http://localhost:3000/#5625fc2bd82b84d23d8c7bd0')
			.waitForElementVisible('body', 1000)
			.assert.visible('span[id=profile-name]')
			.assert.visible('div[id=email]')
			.assert.visible('div[id=rank]')
			.assert.visible('div[id=info]')
			.assert.visible('div[id=reviews]')
			.end();
	}
};
