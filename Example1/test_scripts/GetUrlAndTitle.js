describe("API Url and Title", () => {

  browser.url("http://webdriver.io/");

  it("Get title and url", () => {
    let url = browser.getUrl();
    let title = browser.getTitle();

    console.log(`[+] Url: ${url}, Title: ${title}`)
  })
})
