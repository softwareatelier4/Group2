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
   },
   'Search sorting test': function(client) {
      client
         .url('http://localhost:3000/')
         .waitForElementVisible('body', 1000)
         .assert.visible('input[id=search-text]')
         .assert.visible('span[id=basic-addon1]')
         .clearValue('input[id=position]')
         .setValue('input[id=position]', 'Piacenza')
         .pause(1000)
         .setValue('input[id=position]', client.Keys.ENTER)
         .clearValue('input[id=search-text]')
         .setValue('input[id=search-text]', 'Developer')
         .pause(1000)
         .click('span[id=basic-addon1]')
         .pause(500)
         .assert.urlContains('search=Developer')
         .pause(1000)
         .assert.visible('div[id=f00000000000000000000000]')
         .assert.visible('div[id=f00000000000000000000006]')
         .assert.visible('span[id=btn-distance]')
         .click('span[id=btn-distance]')
         .pause(500)
         .assert.attributeContains('#btn-distance', 'data-sorttype', 'asc')
         .pause(1000)
         .getAttribute("#main-content .result-card:nth-child(1)", "id", function(result) {
            this.assert.equal(result.value, 'f00000000000000000000006');
         })
         .getAttribute("#main-content .result-card:nth-child(2)", "id", function(result) {
            this.assert.equal(result.value, 'f00000000000000000000000');
         })
         .assert.visible('span[id=btn-time]')
         .click('span[id=btn-time]')
         .pause(500)
         .assert.attributeContains('#btn-distance', 'data-sorttype', 'neutral')
         .assert.attributeContains('#btn-time', 'data-sorttype', 'asc')
         .click('span[id=btn-time]')
         .pause(500)
         .assert.attributeContains('#btn-time', 'data-sorttype', 'desc')
         .pause(1000)
         .getAttribute("#main-content .result-card:nth-child(1)", "id", function(result) {
            this.assert.equal(result.value, 'f00000000000000000000000');
         })
         .getAttribute("#main-content .result-card:nth-child(2)", "id", function(result) {
            this.assert.equal(result.value, 'f00000000000000000000006');
         })
         .clearValue('input[id=search-text]')
         .setValue('input[id=search-text]', 'Informatico')
         .click('span[id=basic-addon1]')
         .pause(500)
         .assert.urlContains('search=Informatico')
         .pause(1000)
         .assert.visible('div[id=f00000000000000000000000]')
         .assert.visible('div[id=f00000000000000000000006]')
         .assert.visible('span[id=btn-score]')
         .click('span[id=btn-score]')
         .pause(500)
         .assert.attributeContains('#btn-score', 'data-sorttype', 'asc')
         .pause(1000)
         .getAttribute("#main-content .result-card:nth-child(1)", "id", function(result) {
            this.assert.equal(result.value, 'f00000000000000000000000');
         })
         .getAttribute("#main-content .result-card:nth-child(2)", "id", function(result) {
            this.assert.equal(result.value, 'f00000000000000000000006');
         })
         .click('span[id=btn-score]')
         .pause(500)
         .assert.attributeContains('#btn-score', 'data-sorttype', 'desc')
         .pause(1000)
         .getAttribute("#main-content .result-card:nth-child(1)", "id", function(result) {
            this.assert.equal(result.value, 'f00000000000000000000006');
         })
         .getAttribute("#main-content .result-card:nth-child(2)", "id", function(result) {
            this.assert.equal(result.value, 'f00000000000000000000000');
         })
         .assert.visible('span[id=btn-name]')
         .click('span[id=btn-name]')
         .pause(500)
         .assert.attributeContains('#btn-score', 'data-sorttype', 'neutral')
         .assert.attributeContains('#btn-name', 'data-sorttype', 'asc')
         .pause(1000)
         .getAttribute("#main-content .result-card:nth-child(1)", "id", function(result) {
            this.assert.equal(result.value, 'f00000000000000000000000');
         })
         .getAttribute("#main-content .result-card:nth-child(2)", "id", function(result) {
            this.assert.equal(result.value, 'f00000000000000000000006');
         })
         .click('span[id=btn-name]')
         .pause(500)
         .assert.attributeContains('#btn-name', 'data-sorttype', 'desc')
         .pause(1000)
         .getAttribute("#main-content .result-card:nth-child(1)", "id", function(result) {
            this.assert.equal(result.value, 'f00000000000000000000006');
         })
         .getAttribute("#main-content .result-card:nth-child(2)", "id", function(result) {
            this.assert.equal(result.value, 'f00000000000000000000000');
         })
         .click('span[id=btn-name]')
         .pause(500)
         .assert.attributeContains('#btn-name', 'data-sorttype', 'neutral')
         .pause(1000)
         .getAttribute("#main-content .result-card:nth-child(1)", "id", function(result) {
            this.assert.equal(result.value, 'f00000000000000000000000');
         })
         .getAttribute("#main-content .result-card:nth-child(2)", "id", function(result) {
            this.assert.equal(result.value, 'f00000000000000000000006');
         })
         .clearValue('input[id=search-text]')
         .setValue('input[id=search-text]', 'Tecnico')
         .click('span[id=basic-addon1]')
         .pause(500)
         .assert.urlContains('search=Tecnico')
         .pause(1000)
         .assert.visible('div[id=f00000000000000000000000]')
         .assert.visible('div[id=f00000000000000000000004]')
         .assert.visible('div[id=f00000000000000000000005]')
         .assert.visible('div[id=f00000000000000000000006]')
         .assert.visible('span[id=btn-price]')
         .click('span[id=btn-price]')
         .pause(500)
         .assert.attributeContains('#btn-price', 'data-sorttype', 'asc')
         .pause(1000)
         .getAttribute("#main-content .result-card:nth-child(1)", "id", function(result) {
            this.assert.equal(result.value, 'f00000000000000000000000');
         })
         .getAttribute("#main-content .result-card:nth-child(2)", "id", function(result) {
            this.assert.equal(result.value, 'f00000000000000000000006');
         })
         .getAttribute("#main-content .result-card:nth-child(3)", "id", function(result) {
            this.assert.equal(result.value, 'f00000000000000000000005');
         })
         .getAttribute("#main-content .result-card:nth-child(4)", "id", function(result) {
            this.assert.equal(result.value, 'f00000000000000000000004');
         })
         .end();
   },
   'Search filter test': function(client) {
      client
         .url('http://localhost:3000/')
         .waitForElementVisible('body', 1000)
         .assert.visible('input[id=search-text]')
         .assert.visible('span[id=basic-addon1]')
         .pause(5000)
         .clearValue('input[id=position]')
         .setValue('input[id=position]', 'Piacenza')
         .pause(1000)
         .setValue('input[id=position]', client.Keys.ENTER)
         .clearValue('input[id=search-text]')
         .setValue('input[id=search-text]', 'Tecnico')
         .click('span[id=basic-addon1]')
         .pause(500)
         .assert.urlContains('search=Tecnico')
         .pause(1000)
         .assert.visible('div[id=f00000000000000000000000]')
         .assert.visible('div[id=f00000000000000000000004]')
         .assert.visible('div[id=f00000000000000000000005]')
         .assert.visible('div[id=f00000000000000000000006]')
         .assert.visible('input[id=price-input]')
         .assert.visible('input[id=distance-input]')
         .clearValue('input[id=price-input]')
         .setValue('input[id=price-input]', '120')
         .pause(1000)
         .getAttribute("#main-content .result-card:nth-child(1)", "id", function(result) {
            this.assert.equal(result.value, 'f00000000000000000000000');
         })
         .getAttribute("#main-content .result-card:nth-child(2)", "id", function(result) {
            this.assert.equal(result.value, 'f00000000000000000000006');
         })
         .clearValue('input[id=distance-input]')
         .setValue('input[id=distance-input]', '140')
         .pause(5000)
         .getAttribute("#main-content .result-card:nth-child(1)", "id", function(result) {
            this.assert.equal(result.value, 'f00000000000000000000006');
         })
         .end();
   },
   'Search filter and sort test': function(client) {
      client
         .url('http://localhost:3000/')
         .waitForElementVisible('body', 1000)
         .assert.visible('input[id=search-text]')
         .assert.visible('span[id=basic-addon1]')
         .clearValue('input[id=search-text]')
         .setValue('input[id=search-text]', 'Tecnico')
         .click('span[id=basic-addon1]')
         .pause(500)
         .assert.urlContains('search=Tecnico')
         .pause(1000)
         .assert.visible('div[id=f00000000000000000000000]')
         .assert.visible('div[id=f00000000000000000000004]')
         .assert.visible('div[id=f00000000000000000000005]')
         .assert.visible('div[id=f00000000000000000000006]')
         .assert.visible('input[id=price-input]')
         .clearValue('input[id=price-input]')
         .setValue('input[id=price-input]', '100')
         .pause(1000)
         .getAttribute("#main-content .result-card:nth-child(1)", "id", function(result) {
            this.assert.equal(result.value, 'f00000000000000000000000');
         })
         .getAttribute("#main-content .result-card:nth-child(2)", "id", function(result) {
            this.assert.equal(result.value, 'f00000000000000000000006');
         })
         .assert.visible('span[id=btn-name]')
         .click('span[id=btn-price]')
         .pause(500)
         .click('span[id=btn-price]')
         .pause(500)
         .assert.attributeContains('#btn-price', 'data-sorttype', 'desc')
         .getAttribute("#main-content .result-card:nth-child(1)", "id", function(result) {
            this.assert.equal(result.value, 'f00000000000000000000006');
         })
         .getAttribute("#main-content .result-card:nth-child(2)", "id", function(result) {
            this.assert.equal(result.value, 'f00000000000000000000000');
         })
         .end();
   }
};
