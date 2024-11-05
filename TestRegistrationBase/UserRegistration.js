const RegistrationBase = require('./RegistrationBase');

class UserRegistration extends RegistrationBase {
  constructor(userInfo) {
    super(userInfo);
  }

  registerUser() {
    let isUsernameValid = super.isUsernameValid(),
      emailDomain = super.getEmailDomain();

    if(!isUsernameValid) {
      return console.log('Username not validate')
    }

    if (emailDomain === 'gmail.com') {
      return this._registerGmailUser();
    }

    if(emailDomain === 'outlook.com') {
      return this._registerOutlookUser();
    }

    return console.log("Email domain is Not supported!")
  }

  _registerGmailUser() {
    console.log("Registered Gmail User Successfully")
  }

  _registerOutlookUser() {
    console.log("Registered Outlook User Successfully")
  }
}

module.exports = UserRegistration;
