class CheckoutModalWindow { 
  get registerOrLoginBtn() { return $('//div[@class="modal-body"]//a[@href="/login"]') };
  get continueOnCartBtn() { return $('//button[text()="Continue On Cart"]') };
  get header() {return $('//div[@class="modal-header"]//h4[text()="Checkout"]')};
}
export default new CheckoutModalWindow 