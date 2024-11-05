let expect = require('chai').expect;

let LoginPage = require('../page_objects/LoginPage');
let LoginData = require('../test_data/TestLogin.json');

describe("Page Object", () => {
  let url = 'http://the-internet.herokuapp.com/login'

  before('Before', () => {
    LoginPage.openPage(url)
  })

  it("Check login page title", () => {
    LoginPage.verifyLoginTitle();
  })

  it("Login", () => {
    LoginPage
      .inputUsername(LoginData.correctCredentials.username)
      .inputPassword(LoginData.correctCredentials.password)
      .login();
  })
})
