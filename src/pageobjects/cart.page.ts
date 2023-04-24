class CartPage {


  get cartIsEmptyAlert() { return $('//b[text()="Cart is empty!"]') };

  get firstItemDeleteBtn() { return $('//td[@class="cart_delete"]//a[1]') };

  get secondItemDeleteBtn() { return $('//a[@data-product-id="2"]') };

  get proceedToCheckoutBtn() { return $('//a[contains(@class,"btn btn-default")]') };

  get cartQuantity() { return $('//td[@class="cart_quantity"]//button[1]') };

  get cartPage() { return $('//div[@class="table-responsive cart_info"]') };

  get firstItemInViewCart() { return $('(//table[@class="table table-condensed"]//tr)[2]') };

  get secondItemInViewCart() { return $('(//table[@class="table table-condensed"]//tr)[3]') };

  get firstProductPriceInCart() { return $('//tr[@id="product-1"]/td[3]/p[1]') };

  get firstProductTotalPriceInCart() { return $('//tr[@id="product-1"]/td[5]/p[1]') };

  get checkoutModalAlert() { return $('//div[@id="checkoutModal"]/div[1]/div[1]') };

  get registerOrLoginBtn() { return $('//u[text()="Register / Login"]') };



  async expectCartIsEmptyAlertIsVisible() {
    await (await this.cartIsEmptyAlert).scrollIntoView();
    expect(await this.cartIsEmptyAlert).toBeDisplayed();
  }

  async clickFirstDeleteBtnInCart(): Promise<void> {
    await (await this.firstItemDeleteBtn).scrollIntoView();
    await this.firstItemDeleteBtn.click({force: true} as any);
    if (await this.secondItemDeleteBtn.isExisting()) {
      await this.secondItemDeleteBtn.click({force: true} as any);
    }
  }




  async clickProceedToCheckOutButton() {
    await this.proceedToCheckoutBtn.click();
  }

  async getFirstCartProductQuantity(): Promise<number> {
    return parseFloat((await this.cartQuantity.getText()).toString().replace(/\s/g, ''));
  }

  async expectQuantity() {
    const firstCartProductQuantity = await this.getFirstCartProductQuantity();
    expect(firstCartProductQuantity).toEqual(4);
  }

  async expectCartPageHeaderIsVisible() {
    expect(await this.cartPage).toBeDisplayed();
  }


  async getFirstCartProductPrice(): Promise<number> {
    return parseFloat((await this.firstProductPriceInCart.getText()).toString().replace(/\s/g, ''));
  }

  async getFirstCartProductTotalPrice(): Promise<number> {
    return parseFloat((await this.firstProductTotalPriceInCart.getText()).toString().replace(/\s/g, ''));
  }

  async expectItemsInViewCartAreVisible() {
    expect(await this.firstItemInViewCart).toBeDisplayed();
    expect(await this.secondItemInViewCart).toBeDisplayed();
  }

  async expectFirstItemInCartIsVisible() {
    await (await this.firstItemInViewCart).waitForExist();
    expect(await this.firstItemInViewCart).toBeDisplayed();
  }

  async expectCorrectnessPrices() {
    const firstCartProductPrice = await this.getFirstCartProductPrice();
    const firstCartProductTotalPrice = await this.getFirstCartProductTotalPrice();
    const secondCartProductPrice = await this.getFirstCartProductPrice();
    const secondCartProductTotalPrice = await this.getFirstCartProductTotalPrice();
    expect(firstCartProductPrice).toEqual(firstCartProductTotalPrice);
    expect(secondCartProductPrice).toEqual(secondCartProductTotalPrice);
  }



  async verifyCheckOutModalIsVisible () {
    await this.checkoutModalAlert.waitForExist();
    expect(await this.checkoutModalAlert).toBeDisplayed()
  }



  async clickRegisterOrLoginButton() {
    await this.registerOrLoginBtn.click();
  }


}
export default new CartPage();
