module.exports = {
   'Check insertion of city-state search test': function(client) {
      client
         .url('http://localhost:3000/')
         .waitForElementVisible('body', 1000)
         .assert.visible('input[id=search-text]')
         .assert.visible('span[id=basic-addon1]')
         .pause(300)
         .clearValue('input[id=search-text]')
         .clearValue('input[id=position]')
         .setValue('input[id=position]', 'Piacenza')
         .pause(1000)
         .setValue('input[id=position]', client.Keys.ENTER)
         .click('span[id=basic-addon1]')
         .pause(1000)
         .assert.urlContains('city=Piacenza')
         .assert.urlContains('state=Italy')
         .assert.urlContains('latitude=45.0526206&longitude=9.692984499999966')
         .end();
   }
};
