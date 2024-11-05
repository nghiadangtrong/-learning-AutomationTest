class Page {
  openPage(url) {
    browser.url(url);
    return this;
  }

  pause(params) {
    browser.pause(params);
    return this;
  }
}

module.exports = Page;
