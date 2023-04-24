class PaymentPage {
  get nameOnCard() { return $('//input[@data-qa="name-on-card"]') };

  get cardNumber() { return $('//input[@data-qa="card-number"]') };

  get cvc() { return $('//input[@data-qa="cvc"]') };

  get expirationMonth() { return $('//input[@data-qa="expiry-month"]') };

  get expirationYear() { return $('//input[@data-qa="expiry-year"]') };

  get payAndConfirmBtn() { return $('//button[@data-qa="pay-button"]') };

  get orderPlacedHeader() { return $('//b[text()="Order Placed!"]') };


  async enterPaymentCredentials() {
    await this.nameOnCard.setValue('ALEX MORALES');
    await this.cardNumber.setValue('1111 1111 1111 1111');
    await this.cvc.setValue('111');
    await this.expirationMonth.setValue('11');
    await this.expirationYear.setValue('2026');
  }

  async clickPayAndConfirmButton() {
    await this.payAndConfirmBtn.click();
  }


  async orderPlaceHeaderIsVisible() {
    await this.orderPlacedHeader.waitForExist();
    expect(await this.orderPlacedHeader).toBeDisplayed();
  }


}

export default new PaymentPage()