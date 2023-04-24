class LoginPage {

  get signUpHeader () { return $('//h2[text()="New User Signup!"]')};

  get signUpNameInput () { return $('//input[@data-qa="signup-name"]')};

  get signUpEmailInput () { return $('//input[@data-qa="signup-email"]')};

  get signUpBtnLoc () {return $('//button[@data-qa="signup-button"]')};

  get loginEmailInputLoc () {return $('input[name="email"]')};

  get loginPasswordInputLoc () {return $('input[name="password"]')};

  get userAlreadyExist () {return $('//p[text()="Email Address already exist!"]')};

  get incorrectCredsError () {return $('//p[text()="Your email or password is incorrect!"]')};

  get existingEmailError () {return $('//p[text()="Email Address already exist!"]')};

  get loginBtnLoc () {return $('//button[@data-qa="login-button"]')};

  get loginBtnHeader () { return $('//a[@href="/login"]')}; 

  get deleteBtn () { return $('//a[@href="/delete_account"]')};






  async verifySignUpHeaderIsVisible() {
    await this.signUpHeader.waitForExist();
    expect(await this.signUpHeader).toBeDisplayed()
  }
  
  async enterNameAndEmail(): Promise<void> {
    const name = "Alex Morales";
    const email = "alexM@gmail.com";
    await this.signUpNameInput.waitForExist();
    await this.signUpNameInput.setValue(name);
    await this.signUpEmailInput.setValue(email);
  }

  async enterExistingNameAndEmailAndClickSignUpBtn(): Promise<void> {
    const name = "Alex Morales";
    const email = "alexM@gmail.com";
    await this.signUpNameInput.waitForExist();
    await this.signUpNameInput.setValue(name);
    await this.signUpEmailInput.setValue(email);
   await this.signUpBtnLoc.click();
  }
  
  async clickSignUpButton () {
      await (await this.signUpBtnLoc).waitForExist();
      await (await this.signUpBtnLoc).scrollIntoView();
      await this.signUpBtnLoc.click();
    if (await this.userAlreadyExist.isDisplayed()) {
      await $('input[name="email"]').setValue('alexM@gmail.com');
      await $('input[name="password"]').setValue('123');
      await this.loginBtnLoc.click();
      await this.deleteBtn.waitForExist();
      await this.deleteBtn.click();
      await browser.url("https://automationexercise.com/");
      await this.loginBtnHeader.waitForExist();
      await this.loginBtnHeader.click();
      await this.enterNameAndEmail();
      await this.clickSignUpButton();
    }
  }

  async inputIncorrectCredentials () {
    const email = "alexM@mail.ru";
    const pass = "///";
    await this.loginEmailInputLoc.waitForExist();
    await this.loginEmailInputLoc.setValue(email);
    await this.loginPasswordInputLoc.setValue(pass);
    await this.loginBtnLoc.click()
  }

  async verifyIncorrectCredsErrorIsVisible() {
    await this.incorrectCredsError.waitForExist();
    expect(await this.incorrectCredsError).toBeDisplayed()
  }

  async inputCorrectCredentials () {
    const email = "alexM@gmail.com";
    const pass = "123";
    await this.loginEmailInputLoc.waitForExist();
    await this.loginEmailInputLoc.setValue(email);
    await this.loginPasswordInputLoc.setValue(pass);
    await this.loginBtnLoc.click()
  }

  async verifyExistingCredsErrorIsVisible() {
    await this.existingEmailError.waitForExist();
    expect(await this.existingEmailError).toBeDisplayed()
  }



}
 export default new LoginPage