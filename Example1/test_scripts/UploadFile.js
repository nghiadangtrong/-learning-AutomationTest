const path = require('path');

describe("API upload file", () => {
  const FILE_UPLOAD = "#file-upload";
  const BTN_UPLOAD = "#file-submit";

  browser.url("http://the-internet.herokuapp.com/upload");

  it("upload file", () => {
    $(FILE_UPLOAD).waitForDisplayed({ timeout: 3000 });

    //const remoteFilePath = browser.uploadFile('./test_scripts/Alert.js');
    const remoteFilePath = browser.uploadFile(path.join(__dirname,'./Alert.js'));

    $(FILE_UPLOAD).setValue(remoteFilePath);

    console.log(`[+] path.join(__dirname): ${path.join(__dirname)}`)
    console.log(`[+] Remote file path ${remoteFilePath}`);

    $(BTN_UPLOAD).click();

    browser.pause(3000);
  })
})
