let LoginPage = require('../page_objects/LoginPage');
let LoginData = require('../test_data/TestLogin.json');

describe("Page Object", () => {
  let url = 'http://the-internet.herokuapp.com/login'

  before('Before', () => {
    LoginPage.openPage(url)
  })

  beforeEach('before each test it', () => {
    //browser.refresh();
  })

  afterEach('After each test it to refresh', () => {
    browser.refresh();
  })

  it("Login Page with incorect credentials", () => {

    LoginPage
      .inputUsername(LoginData.incorrectCredentials.username)
      .inputPassword(LoginData.incorrectCredentials.password)
      .login()

  })

  it("Login Page with corect credentials", () => {

    let text = LoginPage
      .inputUsername(LoginData.correctCredentials.username)
      .inputPassword(LoginData.correctCredentials.password)
      .login()
      .getSecureAreaText();

    console.log('[+] textAlert: ', text)

  })


  after("Clear data", () => {
    console.log("clear data");
  })
})
