module.exports = {
  'indexUI Tests' : function (page) {
    page
      .url('http://localhost:3000/')
      .waitForElementVisible('body', 1000)
      .assert.visible('input[id=search-text]')
      .assert.visible('span[id=basic-addon1]')
      .clearValue('input[id=search-text]')
      .setValue('input[id=search-text]', 'Marco')
      .click('span[id=basic-addon1]')
      .pause(1000)
      .waitForElementVisible('div[id=search-result]', 1000)
      .pause(1000)
      .assert.visible('div[id=5625fc2bd82b84d23d8c7bd0]')
      .end();
  }
};
