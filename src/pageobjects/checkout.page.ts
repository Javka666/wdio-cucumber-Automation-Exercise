class CheckoutPage {

  get addressDetailsHeader() { return $('//h2[@class="heading" and contains(text(), "Address Details")]')};

  get deliveryAddressBox() {return $('#address_delivery')};

  get billingAddressBox() {return $('#address_invoice')};

  get addressTitle() {return $('#address_delivery')};

  get reviewOrderHeader() { return $('//h2[text()="Review Your Order"]') };

  get orderMessageInput() { return $('//div[@id="ordermsg"]//textarea[1]') };

  get placeOrderBtn() { return $('//a[@href="/payment"]') };

}

export default new CheckoutPage()