
class CartPage {

  get emptyCartContainer() { return $('#empty_cart') };

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

  get shoppingCartBreadcrumb () { return $('//ol[@class="breadcrumb"]//li[text()="Shopping Cart"]')}

}
export default new CartPage();
