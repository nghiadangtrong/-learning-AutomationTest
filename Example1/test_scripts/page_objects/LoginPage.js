let expect = require('chai').expect;

const Page = require('./Page');
const SecurePage = require('./SecurePage');

const USERNAME_INPUT = "#username";
const PASSWORD_INPUT = "#password";
const LOGIN_BTN = "[type=\"submit\"]";
const LOGIN_TITLE = "h2"

class LoginPage extends Page {

  get userName() { return $(USERNAME_INPUT) }

  get password() { return $(PASSWORD_INPUT) }

  get loginBtn() { return $(LOGIN_BTN) }

  getLoginTitle() {
    return $(LOGIN_TITLE).getText();
  }

  inputUsername(value) {
    this.userName.setValue(value);
    return this;
  }

  inputPassword(value) {
    this.password.setValue(value);
    return this;
  }

  login() {
    this.loginBtn.click();
    return SecurePage;
  }

  verifyLoginTitle() {
    let actualLoginTitle = this.getLoginTitle();
    let expectedLoginTitle = "Login Page";

    expect(actualLoginTitle).to.equal(expectedLoginTitle, "Err: Is not Login page");
  }

}

module.exports = new LoginPage();
