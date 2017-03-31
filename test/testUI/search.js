module.exports = {
   'Search no-filter test': function(client) {
      client
         .url('http://localhost:3000/')
         .waitForElementVisible('body', 1000)
         .assert.visible('input[id=search-text]')
         .assert.visible('span[id=basic-addon1]')
         .clearValue('input[id=search-text]')
         .setValue('input[id=search-text]', 'Informatico')
         .click('span[id=basic-addon1]')
         .pause(500)
         .assert.urlContains('search=Informatico')
         .pause(1000)
         .assert.visible('div[id=f00000000000000000000000]')
         .assert.visible('div[id=f00000000000000000000006]')
         .end();
   }
};
