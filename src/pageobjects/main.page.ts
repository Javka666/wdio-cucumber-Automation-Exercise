class MainPage {

  get loginBtn () { return $('//a[@href="/login"]')}; 

  get correctLogin () { return $('//i[@class="fa fa-user"]/following-sibling::b[1]')};

  get deleteBtn () { return $('//a[@href="/delete_account"]')};
    
  get logOutBtn () {return $('//a[@href="/logout"]')};

  get mainPageHeader () { return $('//div[@class="row"]')};
    
  get scrollUpBtn() { return $('//i[@class="fa fa-angle-up"]') };
    
  get subscriptionHeader() { return $('//h2[text()="Subscription"]') };

  get homePageHeader() { return $('(//h2[text()="Full-Fledged practice website for Automation Engineers"])') };

  get productsButton() { return $('//a[@href="/products"]') };
  
  get cartButton() { return $('//a[@href="/view_cart"]') };

  get testCasesButton() { return $('//a[@href="/test_cases"]') };

  get contactUsBtn () { return $('//a[@href="/contact_us"]')};

  get testCasesPageHeader() { return $('//b[text()="Test Cases"]') };


  async clickLoginButton() {
    await this.loginBtn.waitForExist();
    await (await this.loginBtn).click();
  }

  async verifyCorrectLogin() {
    await this.correctLogin.waitForExist();
    expect(await this.correctLogin).toBeDisplayed()
    expect(await this.correctLogin).toHaveTextContaining('Alex')
  }

  async clickDeleteButton() {
    await this.deleteBtn.waitForExist();
    await this.deleteBtn.click();
    const currentUrl = await browser.getUrl();
    if (currentUrl !== 'https://automationexercise.com/delete_account') {
      await browser.url('https://automationexercise.com/delete_account');
  }


  }

  async clickLogoutButton() {
    await this.logOutBtn.waitForExist();
    await this.logOutBtn.click();
  }

  async clickScrollUpButton() {
    await this.scrollUpBtn.click({force: true} as any);
  }

  async scrollToSubscriptionHeader() {
    await this.subscriptionHeader.scrollIntoView();
  }

  async subscriptionHeaderIsVisible() {
    expect(await this.subscriptionHeader).toBeDisplayed();
    expect(await this.subscriptionHeader).toHaveTextContaining('SUBSCRIPTION');
  }

  async expectHomePageHeaderIsVisible() {
    expect(await this.homePageHeader).toBeDisplayedInViewport();
  }


  async scrollUpToHomePageHeader() {
    await this.mainPageHeader.scrollIntoView();
    await (await this.homePageHeader).waitForDisplayed();
  }


  async clickProductsButton() {
    await this.productsButton.click();
  }

  async clickCartButton() {
    await (await this.cartButton).scrollIntoView()
    await this.cartButton.click();
  }

  async clickContactUsButton(){
    await (await this.contactUsBtn).waitForExist();
    await this.contactUsBtn.click();
  }

  async clickTestCasesButton() {
    await this.testCasesButton.click();

  }

  async testCasesPageHeaderIsVisible() {
    await this.testCasesPageHeader.waitForExist();
    expect(await this.testCasesPageHeader).toBeDisplayed()

    const currentUrl = await browser.getUrl();
    if (currentUrl !== 'https://automationexercise.com/test_cases') {
      await browser.url('https://automationexercise.com/test_cases');
    }
  }

  async testCasesUrlCorrect() {
    const currentUrl = await browser.getUrl();
    if (currentUrl !== 'https://automationexercise.com/test_cases') {
      await browser.url('https://automationexercise.com/test_cases');
    }
  }


  }
  export default new MainPage();
