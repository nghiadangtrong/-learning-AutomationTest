
describe("API Cpmmand", () => {

  it("Login Form", () => {
    //open page
    browser.url('http://the-internet.herokuapp.com/login');

    // insert input
    const INPUT_USERNAME = "input#username"
    $(INPUT_USERNAME).waitForDisplayed({timeout: 10000});
    $(INPUT_USERNAME).setValue("tomsmith");

    const INPUT_PASSWORD = "input#password"
    $(INPUT_PASSWORD).waitForDisplayed({timeout: 10000});
    $(INPUT_PASSWORD).setValue("SuperSecretPassword!");

    const BTN_LOGIN = '[type="submit"]';
    $(BTN_LOGIN).waitForDisplayed({timeout: 10000});
    $(BTN_LOGIN).click();

    browser.pause(3000);
  })
})
