class RegistrationBase {
  constructor(userInfo) {
    this._username = userInfo.username;
    this._email = userInfo.email;
  }

  isUsernameValid() {
    return this._username.indexOf(' ') === -1;
  }

  getEmailDomain() {
    return this._email.split('@')[1];
  }
}

module.exports = RegistrationBase;
