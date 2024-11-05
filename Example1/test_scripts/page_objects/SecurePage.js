const Page = require('./Page');

class SecurePage extends Page {
  getSecureAreaText() {
    return $("#flash").getText();
  }
}

module.exports = new SecurePage();
