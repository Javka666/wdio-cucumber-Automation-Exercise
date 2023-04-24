class RandomProductPage {

  get productInformationBlock() { return $('//div[@class="product-information"]') };

  get productName() { return $('//div[@class="product-information"]//h2[1]') };

  get category() { return $('//div[@class="product-information"]//p[1]') };

  get price() { return $('(//div[@class="product-information"]//span)[2]') };

  get availability() { return $('(//div[@class="product-information"]//p)[2]') };

  get condition() { return $('(//div[@class="product-information"]//p)[3]') };

  get brand() { return $('(//div[@class="product-information"]//p)[4]') };

  get inputEmailField() { return $('//input[@type="email"]') };

  get submitBtn() { return $('//button[@type="submit"]') };

  get reviewHeader() { return $('//a[@href="#reviews"]') };

  get reviewNameInput() { return $('//input[@placeholder="Your Name"]') };

  get reviewEmailInput() { return $('//input[@placeholder="Email Address"]') };

  get reviewTextArea() { return $('//textarea[@placeholder="Add Review Here!"]') };

  get reviewSubmitBtn() { return $('//form[@id="review-form"]//button[1]') };

  get reviewSuccessMsg() { return $('//*[@id="review-section"]/div/div/span') };

  get quantityBtn() { return $('//input[@type="number"]') };

  get addToCartBtn() { return $('(//i[@class="fa fa-shopping-cart"])[2]') };



  async productsInformationBlockIsVisible() {
    await this.productInformationBlock.waitForExist();
    expect(await this.productInformationBlock).toBeDisplayed();
  }

  async verifyInformationIsVisible() {
    expect(await this.brand).toBeDisplayed();
    expect(await this.condition).toBeDisplayed();
    expect(await this.availability).toBeDisplayed();
    expect(await this.price).toBeDisplayed();
    expect(await this.category).toBeDisplayed();
    expect(await this.productName).toBeDisplayed();
  }

  async enterNameAndEmail() {
    const email = "alexM@gmail.com";
    await this.inputEmailField.setValue(email);
    await this.submitBtn.click();
  }

  async expectProductReviewHeaderIsVisible() {
    await (await this.reviewHeader).scrollIntoView();
    expect(await this.reviewHeader).toBeDisplayed();
    expect (await this.reviewHeader).toHaveTextContaining('Write Your Review')
  }

  async enterReviewCredentials() {
    await this.reviewNameInput.setValue('ALEX MORALES');
    await this.reviewEmailInput.setValue('AlexM@gmail.com');
    await this.reviewTextArea.setValue('Test TEST test');
  }

  async clickReviewSubmitButton() {
    await (await this.reviewSubmitBtn).scrollIntoView();
    await this.reviewSubmitBtn.click();
  }

  async expectReviewSuccessMessageIsVisible() {
    expect(await this.reviewSuccessMsg).toBeDisplayed();
    expect (await this.reviewSuccessMsg).toHaveTextContaining('Thank you for your review.')
  }

  async setQuantityValue() {
    await this.quantityBtn.setValue(4);
  }

  async clickAddToCartButton() {
    await this.addToCartBtn.click();
  }


}
export default new RandomProductPage();