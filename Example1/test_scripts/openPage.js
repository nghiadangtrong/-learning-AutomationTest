describe('Api command', function () {

  it('open Page API', function () {
    // open browser
    browser.url('http://google.com');

    const INPUT_SEARCH = '.gLFyf';

    // Đợi input hiển thị
    $(INPUT_SEARCH).waitForDisplayed({
      timeout: 3000
    })

    // Chèn giá trị cho input
    $(INPUT_SEARCH).setValue('automation test');
  })

})
