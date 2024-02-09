class AccountCreationPage  {

  get header() { return $('(//h2[@class="title text-center"])[1]') };

  get maleBtn() { return $('//input[@type="radio"and contains(@value,"Mr")]') };

  get femaleBtn() { return $('//input[@type="radio"and contains(@value,"Mrs")]') };

  get passwordInput() { return $('//input[@type="password"]') };

  get dayOfBirth() { return $('//select[@data-qa="days"]') };

  get monthOfBirth() { return $('//select[@data-qa="months"]') };

  get yearOfBirth() { return $('//select[@data-qa="years"]') };

  get newsletterCheckbox() { return $('#newsletter') };

  get specialOffersCheckbox() { return $('#optin') };

  get firstNameInput() { return $('//input[@data-qa="first_name"]') };

  get lastNameInput() { return $('//input[@data-qa="last_name"]') };

  get companyInput() { return $('//input[@data-qa="company"]') };

  get firstAddressInput() { return $('//input[@data-qa="address"]') };

  get secondAddressInput() { return $('//input[@data-qa="address2"]') };

  get countryInput() { return $('//select[@data-qa="country"]') };

  get stateInput() { return $('//input[@data-qa="state"]') };

  get cityInput() { return $('//input[@data-qa="city"]') };

  get zipcodeInput() { return $('//input[@data-qa="zipcode"]') };

  get mobileNumberInput() { return $('//input[@data-qa="mobile_number"]') };

  get createAccountBtn() { return $('//button[@data-qa="create-account"]') };

}

export default new AccountCreationPage();
