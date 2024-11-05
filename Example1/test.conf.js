exports.config = {
  specs: [
    //'./test/specs/**/*.js',
    //'./test_scripts/openPage.js'
    //'./test_scripts/LoginForm.js'
    //'./test_scripts/Dropdown.js'
    //'./test_scripts/Alert.js'
    //'./test_scripts/GetText.js'
    //'./test_scripts/GetCss.js'
    //'./test_scripts/GetAttribute.js'
    //'./test_scripts/GetElementSize.js'
    //'./test_scripts/GetUrlAndTitle.js'
    //'./test_scripts/UploadFile.js'
    //'./test_scripts/SaveScreenShort.js'
    './test_scripts/specs_script/TestLogin.js',
    './test_scripts/specs_script/TestLoginVerification.js'
  ],
  suites: { // Test theo group
    group_a: [
      './test_scripts/specs_script/TestLogin.js'
    ],
    group_b: [
      './test_scripts/specs_script/TestLoginVerification.js'
    ]
  },
  hostname: 'localhost',
  port: 9515,
  path: '/', // DUng cho chrome
  capabilities: [
    {
      browserName: 'chrome'
    }
  ],
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 600000
  },
  //logLevel: 'trace',
  maxInstances: 10 // Cho phép chạy tối đa song song script
}
