describe("Get CSS Property", () => {
  const BTN_CONFIRM = '[onclick="jsConfirm()"]';
  const RESULT = '#result';

  browser.url('http://the-internet.herokuapp.com/javascript_alerts');

  it('Get result color', () => {
    $(BTN_CONFIRM).waitForDisplayed({ timeout: 3000 });
    $(BTN_CONFIRM).click();

    browser.acceptAlert();

    $(RESULT).waitForDisplayed({ timeout: 3000 });

    let resultColor = $(RESULT).getCSSProperty('color');

    console.log('[+] ResultColor', resultColor)
  })
})
