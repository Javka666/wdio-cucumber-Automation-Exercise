class ProductDetailsPage {

  get productInformationBlock() { return $('//div[@class="product-information"]') };

  get productName() { return $('//div[@class="product-information"]//h2[1]') };

  get category() { return $('//div[@class="product-information"]//p[1]') };

  get price() { return $('(//div[@class="product-information"]//span)[2]') };

  get quantityInput() { return $('//input[@type="number"]') };

  get addToCartBtn() { return $('//button[@type="button"]/i[@class= "fa fa-shopping-cart"]') };


  get availability() { return $('(//div[@class="product-information"]//p)[2]') };

  get condition() { return $('(//div[@class="product-information"]//p)[3]') };

  get brand() { return $('(//div[@class="product-information"]//p)[4]') };

  get inputEmailField() { return $('//input[@type="email"]') };

  get submitBtn() { return $('#button-review') };

  get reviewHeader() { return $('//a[@href="#reviews"]') };

  get reviewNameInput() { return $('#name') };

  get reviewEmailInput() { return $('#email') };

  get reviewInput() { return $('#review') };

  get reviewSubmitBtn() { return $('//form[@id="review-form"]//button[1]') };

  get successMessage() { return $('//div[@class="alert-success alert"]//span') };


  async getProductName(){
    await this.productName.waitForDisplayed()
    return await this.productName.getText()
  }
}
export default new ProductDetailsPage();