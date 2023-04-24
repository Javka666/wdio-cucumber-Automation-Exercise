

class AccountCreationPage  {

  get gender() { return $('//*[@id="id_gender1"]') };

  get firstName() { return $('//input[@data-qa="first_name"]') };

  get lastName() { return $('//input[@data-qa="last_name"]') };

  get password() { return $('//input[@type="password"]') };

  get dayOfBirth() { return $('//select[@data-qa="days"]') };

  get monthOfBirth() { return $('//select[@data-qa="months"]') };

  get yearOfBirth() { return $('//select[@data-qa="years"]') };

  get newsletterCheckbox() { return $('//label[text()="Sign up for our newsletter!"]') };

  get specialOffersCheckbox() { return $('//label[text()="Receive special offers from our partners!"]') };

  get company() { return $('//input[@data-qa="company"]') };

  get address1() { return $('//input[@data-qa="address"]') };

  get address2() { return $('//input[@data-qa="address2"]') };

  get city() { return $('//input[@data-qa="city"]') };

  get state() { return $('//input[@data-qa="state"]') };

  get zipCode() { return $('//input[@data-qa="zipcode"]') };

  get country() { return $('//select[@data-qa="country"]') };

  get mobilePhone() { return $('//input[@data-qa="mobile_number"]') };

  get createAccountButton() { return $('//button[@data-qa="create-account"]') };

  get registrationHeader () { return $('//b[text()="Enter Account Information"]')};

  get registrationComplete () { return $('//b[text()="Account Created!"]')};

  get deletingIsComplete () { return $('//b[text()="Account Deleted!"]')};

  get deliveryFullNameCheckout () { return $('(//ul[contains(@class,"address item")]//li)[2]')};

  get deliveryCompanyCheckout () { return $('(//ul[contains(@class,"address item")]//li)[3]')};

  get deliveryAddress1Checkout () { return $('(//ul[contains(@class,"address item")]//li)[4]')};

  get deliveryAddress2Checkout () { return $('(//ul[contains(@class,"address item")]//li)[5]')};

  get deliveryCityAndStateAndPostCodeCheckout () { return $('(//ul[contains(@class,"address item")]//li)[6]')};

  get deliveryCountryCheckout () { return $('(//ul[contains(@class,"address item")]//li)[7]')};

  get deliveryPhoneCheckout () { return $('(//ul[contains(@class,"address item")]//li)[8]')};

  get billingFullNameCheckout () { return $('//ul[@id="address_invoice"]/li[2]')};

  get billingCompanyCheckout () { return $('//ul[@id="address_invoice"]/li[3]')};

  get billingAddress1Checkout () { return $('//ul[@id="address_invoice"]/li[4]')};

  get billingAddress2Checkout () { return $('//ul[@id="address_invoice"]/li[5]')};

  get billingCityAndStateAndPostCodeCheckout () { return $('//ul[@id="address_invoice"]/li[6]')};

  get billingCountryCheckout () { return $('//ul[@id="address_invoice"]/li[7]')};

  get billingPhoneCheckout () { return $('//ul[@id="address_invoice"]/li[8]')};

  testPerson = {
    firstName:'Alex', 
    lastName:'Morales',
    password:'123',
    day:'21',
    month:'May',
    year:'1999',
    email:'alexM@gmail.com', 
    address1: 'Test 999 str', 
    address2: 'Test 11 str',
    city: 'Tbilisi',
    state: 'Georgia',
    country: 'Canada',
    zipCode: '220110',
    salary :'123456789',
    age:99,
    company: 'TestCompany',
    mobilePhone: '1234567890',
};



  async verifyRegistrationHeaderIsVisible() {
   await this.registrationHeader.waitForExist();
   expect(await this.registrationHeader).toBeDisplayed()
  }


  async fillAccountCreationForm() {
   await this.gender.click();
   await this.firstName.setValue(this.testPerson.firstName);
   await this.lastName.setValue(this.testPerson.lastName);
   await this.password.setValue(this.testPerson.password);
   await this.dayOfBirth.selectByVisibleText(this.testPerson.day);
   await this.monthOfBirth.selectByVisibleText(this.testPerson.month);
   await this.yearOfBirth.selectByVisibleText(this.testPerson.year);
   await this.newsletterCheckbox.click();
   await this.specialOffersCheckbox.click();
   await this.company.setValue(this.testPerson.company);
   await this.address1.setValue(this.testPerson.address1);
   await this.address2.setValue(this.testPerson.address2);
   await this.city.setValue(this.testPerson.city);
   await this.state.setValue(this.testPerson.state);
   await this.zipCode.setValue(this.testPerson.zipCode);
   await this.country.selectByVisibleText(this.testPerson.country);
   await this.mobilePhone.setValue(this.testPerson.mobilePhone);
  }


  async submitAccountCreationForm() {
    await this.createAccountButton.scrollIntoView();
    await this.createAccountButton.click();
  }

  async verifyRegistrationIsComplete() {
    await this.registrationComplete.waitForExist();
    expect(await this.registrationComplete).toBeDisplayed();
  }

  async verifyDeleteIsComplete() {
    await this.deletingIsComplete.waitForExist();
    expect(await this.deletingIsComplete).toBeDisplayed();
  }

  async expectDeliveryForm() {
    expect (await this.deliveryFullNameCheckout).toHaveText('Mr. Alex Morales');
    expect (await this.deliveryCompanyCheckout).toHaveText(this.testPerson.company);
    expect (await this.deliveryAddress1Checkout).toHaveText(this.testPerson.address1);
    expect (await this.deliveryAddress2Checkout).toHaveText(this.testPerson.address2);
    expect (await this.deliveryCityAndStateAndPostCodeCheckout).toHaveText('Tbilisi Georgia 220110');
    expect (await this.deliveryCountryCheckout).toHaveText(this.testPerson.country);
    expect (await this.deliveryPhoneCheckout).toHaveText(this.testPerson.mobilePhone);
  }


  async expectBillingForm() {
    expect (await this.billingFullNameCheckout).toHaveText('Mr. Alex Morales');
    expect (await this.billingCompanyCheckout).toHaveText(this.testPerson.company);
    expect (await this.billingAddress1Checkout).toHaveText(this.testPerson.address1);
    expect (await this.billingAddress2Checkout).toHaveText(this.testPerson.address2);
    expect (await this.billingCityAndStateAndPostCodeCheckout).toHaveText('Tbilisi Georgia 220110');
    expect (await this.billingCountryCheckout).toHaveText(this.testPerson.country);
    expect (await this.billingPhoneCheckout).toHaveText(this.testPerson.mobilePhone);
  }

}

export default new AccountCreationPage();
