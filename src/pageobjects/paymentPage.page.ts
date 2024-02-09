class PaymentPage {

  get header() { return $('//h2[@class="heading"]') };

  get cardholdderInput() { return $('//input[@data-qa="name-on-card"]') };

  get cardNumberInput() { return $('//input[@data-qa="card-number"]') };

  get cvcInput() { return $('//input[@data-qa="cvc"]') };

  get expirationMonthInput() { return $('//input[@data-qa="expiry-month"]') };

  get expirationYearInput() { return $('//input[@data-qa="expiry-year"]') };

  get payAndConfirmBtn() { return $('//button[@data-qa="pay-button"]') };
  
  get successMessage() { return $('//div[@id="success_message"]//div[@class="alert-success alert"]')}

}
export default new PaymentPage()