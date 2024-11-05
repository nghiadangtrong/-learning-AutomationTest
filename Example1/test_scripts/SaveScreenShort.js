const path = require('path');

describe("API save screen short", () => {

  browser.url("https://www.youtube.com");

  it("Save screen short", () => {
    browser.pause(3000)
    browser.saveScreenshot(path.join(__dirname, "./youtube.png"))
  })
})
