
class CartModalWindow { 
  get viewCartBtn() { return $('//p[@class="text-center"]/a[@href="/view_cart"]') };
  get continueShoppingBtn() { return $('//button[text()="Continue Shopping"]') };
  get modalWindow() {return $('[class="modal-content"]')};
}
export default new CartModalWindow 