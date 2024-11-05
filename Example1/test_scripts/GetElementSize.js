describe("API get element size", () => {
  const FORM = "#login";

  browser.url('http://the-internet.herokuapp.com/login');

  it('Get Element Size', () => {
    $(FORM).waitForDisplayed({ timeout: 3000 });

    let formSize = $(FORM).getSize();
    console.log('[+] Form size', formSize)
  })
})
