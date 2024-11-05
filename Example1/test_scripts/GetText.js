describe('Get context', () => {
  const BTN_CONFIRM = '[onclick="jsConfirm()"]';
  const RESULT = '#result';

  browser.url('http://the-internet.herokuapp.com/javascript_alerts');

  it('Get result in case clicking on ok', () => {
    $(BTN_CONFIRM).click();

    browser.acceptAlert();

    $(RESULT).waitForDisplayed({ timeout: 2000 });

    let result = $(RESULT).getText();

    console.log('[+] Click on ok result', result)
  })

  it('Get result in case clicking on cancel', () => {

  })
})
