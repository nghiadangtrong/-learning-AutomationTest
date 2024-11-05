describe('API Alert', () => {
  const BTN_CONFIRM = '[onclick="jsConfirm()"]';

  browser.url('http://the-internet.herokuapp.com/javascript_alerts');

  it('Alert Accept', () => {
    $(BTN_CONFIRM).waitForDisplayed({ timeout: 3000 })
    $(BTN_CONFIRM).click();

    browser.acceptAlert();

    browser.pause(3000);
  })

  it('Alert Dismiss', () => {
    $(BTN_CONFIRM).click();

    browser.dismissAlert();

    browser.pause(3000);
  })

  it('Alert get Text', () => {
    $(BTN_CONFIRM).click();

    let alertContent = browser.getAlertText();

    console.log('[+] Alert Content: ', alertContent);
  })
})
