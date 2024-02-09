class ProductsPage {
    
  // get firstProductViewButton() { return $('//a[@href="/product_details/1"]') };

  // get subscriptionSuccess() { return $('//h2[text()="You have been successfully subscribed!"]') };

  // get productsList() { return $('//div[@class="features_items"]') };

  // get continueShoppingBtn() { return $('//button[text()="Continue Shopping"]') };

  // get viewCartBtn() { return $('//u[text()="View Cart"]') };

  // get firstItem() { return $('(//div[@class="col-sm-4"]//div)[2]') };

  // get firstItemDescription() { return $('(//p[text()="Blue Top"])[1]') };

  // get addToCartSecondItem() { return $('(//a[@data-product-id="2"])[2]') };

  // get leftSideBar() { return $('//div[@class="panel-group category-products"]') };

  // get womenCategory() { return $('//a[@href="#Women"]') };

  // get womenTopsCategory() { return $('//a[@href="/category_products/2"]') };

  // get menCategory() { return $('//a[@href="#Men"]') };

  // get menTShirtsCategory() { return $('//a[@href="/category_products/3"]') };

  // get bibaBrandBtn() { return $('//a[@href="/brand_products/Biba"]') };

  // get poloBrandBtn() { return $('//a[@href="/brand_products/Polo"]') };

  // get brandBar() { return $('//div[@class="brands_products"]//div[1]') };
 
  get searchInput() { return $('//input[@id="search_product"]') };

  get searchBtn() { return $('#submit_search') };

  // get selectedItemInRecommended() { return $('(//p[text()="Blue Top"])[3]') };

  // get selectedItemAddToCartBtn() { return $('(//a[@data-product-id="1"])[3]') };
 
  // get recommendedItemsHeader() { return $('//h2[text()="recommended items"]') };
 
  // get scrollRecommendedSlide() { return $('(//a[@data-slide="prev"]//i)[2]') };

  // get selectorAddToCartBtnByName() { return $('(//a[@data-slide="prev"]//i)[2]') };

}
export default new ProductsPage

