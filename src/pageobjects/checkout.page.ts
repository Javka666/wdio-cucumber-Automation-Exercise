class CheckoutPage {
  get reviewOrderHeader() { return $('//h2[text()="Review Your Order"]') };

  get orderMessage() { return $('//div[@id="ordermsg"]//textarea[1]') };

  get placeOrderBtn() { return $('//a[@href="/payment"]') };

  async expectReviewHeaderIsVisible() {
    await (await this.reviewOrderHeader).scrollIntoView();
    expect(await this.reviewOrderHeader).toBeDisplayed();
  }

  async enterInputOrderMessage() {
    await this.orderMessage.setValue('Test Message');
    await this.placeOrderBtn.click();
  }
 


}

export default new CheckoutPage()