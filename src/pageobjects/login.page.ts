class LoginPage {

  get signupNameInput () { return $('//input[@data-qa="signup-name"]')};

  get signupEmailInput () { return $('//input[@data-qa="signup-email"]')};

  get signupBtn() {return $('//button[@data-qa="signup-button"]')};

  get loginEmailInput () {return $('input[name="email"]')};

  get loginPasswordInput () {return $('input[name="password"]')};

  get incorrectCredentialsMessage () {return $('//p[text()="Your email or password is incorrect!"]')};

  get existingUserMessage () {return $('//p[text()="Email Address already exist!"]')};

  get loginBtn () {return $('//button[@data-qa="login-button"]')};

  get deleteBtn () { return $('//a[@href="/delete_account"]')};
  
}
 export default new LoginPage