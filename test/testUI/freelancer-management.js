module.exports = {

	'Test modify freelancer' : function (client) {
		client
		.url('http://localhost:3000/#freelancer=f00000000000000000000000')
		.waitForElementVisible('body', 1000)
		.assert.visible('div[id=info-name-button]')
		.assert.visible('button[id=modify-button]')
		.click('button[id=modify-button]')
		.pause(200)
		.assert.visible('div[id=modal-ext]')
		.assert.visible('input[id=modal-firstName]')
		.assert.valueContains('input[id=modal-firstName]',"Marco")
		.assert.valueContains('input[id=modal-lastName]',"Tollini")
		.setValue('input[id=modal-firstName]', 'Nevio')
		.setValue('input[id=modal-lastName]', 'Valsa')
		.click('button[id=save-button]')
		.pause(1000)
		.assert.containsText('span[id=profile-name]',
			'Nevio')
		.assert.containsText('span[id=profile-name]',
			'Valsa')
		.end();
	}
};