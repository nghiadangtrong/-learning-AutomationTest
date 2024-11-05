describe("API get attribute", () => {
  const FORM = "#login";

  browser.url("http://the-internet.herokuapp.com/login");

  it("Get method attribute value", () => {
    $(FORM).waitForDisplayed({ timeout: 3000 });

    let methodAttributeValue = $(FORM).getAttribute('method');

    console.log('[+] Method name: ', methodAttributeValue);
  })
})
