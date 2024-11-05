describe("Dropdown Input", ()=> {
  const DROPDOWN_MENU = '#dropdown'

  it("select by visible text", () => {
    browser.url('http://the-internet.herokuapp.com/dropdown')
    $(DROPDOWN_MENU).waitForDisplayed({timeout: 10000});
    $(DROPDOWN_MENU).selectByVisibleText('Option 1');

    browser.pause(3000);
  })

  it("Select by value or attribute", () => {
    $(DROPDOWN_MENU).selectByAttribute('value', '2');

    browser.pause(2000);
  })

  it("Select by index", () => {
    $(DROPDOWN_MENU).selectByIndex(1);

    browser.pause(2000)
  })
})
