class AllProductsPage {
    
  get firstProductViewButton() { return $('//a[@href="/product_details/1"]') };

  get subscriptionSuccess() { return $('//h2[text()="You have been successfully subscribed!"]') };

  get productsList() { return $('//div[@class="features_items"]') };

  get continueShoppingBtn() { return $('//button[text()="Continue Shopping"]') };

  get viewCartBtn() { return $('//u[text()="View Cart"]') };

  get firstItem() { return $('(//div[@class="col-sm-4"]//div)[2]') };

  get firstItemDescription() { return $('(//p[text()="Blue Top"])[1]') };

  get addToCartFirstItem() { return $('(//a[@data-product-id="1"])[2]') };

  get addToCartSecondItem() { return $('(//a[@data-product-id="2"])[2]') };

  get leftSideBar() { return $('//div[@class="panel-group category-products"]') };

  get womenCategory() { return $('//a[@href="#Women"]') };

  get womenTopsCategory() { return $('//a[@href="/category_products/2"]') };

  get ProductsHeader() { return $('//h2[@class="title text-center"]') };

  get menCategory() { return $('//a[@href="#Men"]') };

  get menTShirtsCategory() { return $('//a[@href="/category_products/3"]') };

  get bibaBrandBtn() { return $('//a[@href="/brand_products/Biba"]') };

  get poloBrandBtn() { return $('//a[@href="/brand_products/Polo"]') };

  get brandBar() { return $('//div[@class="brands_products"]//div[1]') };
 
  get searchInput() { return $('//*[@id="search_product"]') };

  get searchBtn() { return $('//*[@id="submit_search"]') };

  get selectedItemInRecommended() { return $('(//p[text()="Blue Top"])[3]') };

  get selectedItemAddToCartBtn() { return $('(//a[@data-product-id="1"])[3]') };
 
  get recommendedItemsHeader() { return $('//h2[text()="recommended items"]') };
 
  get scrollRecommendedSlide() { return $('(//a[@data-slide="prev"]//i)[2]') };


 

  async navigate() {
    await browser.setWindowSize(1440,900);
    await browser.url("https://automationexercise.com/");
  }


  async navigateToProductsPage() {
    const currentUrl = await browser.getUrl();
    if (currentUrl !== 'https://automationexercise.com/products') {
      await browser.url('https://automationexercise.com/products');
    }
  }

  async productsListIsVisible() {
    await this.productsList.waitForExist();
    expect(await this.productsList).toBeDisplayed();
  }

  async clickViewProductButton() {
    await this.firstProductViewButton.click();
  }

  async expectSubscriptionIsSuccess() {
    expect(await this.subscriptionSuccess).toBeDisplayed();
    expect(await this.subscriptionSuccess).toHaveTextContaining('You have been successfully subscribed!');
  }

  async hoverOverFirstItemAndAddToCart() {
    await (await this.addToCartFirstItem).scrollIntoView()
    await (await this.addToCartFirstItem).click({force: true} as any);
  }

  async hoverOverSecondItemAndAddToCart() {
    await (await this.addToCartSecondItem).scrollIntoView()
    await (await this.addToCartSecondItem).click({force: true} as any);
  }


  async clickContinueShoppingButton() {
    await (await this.continueShoppingBtn).waitForDisplayed()
    await this.continueShoppingBtn.click();
  }

  async clickViewCartButton() {
    await (await this.viewCartBtn).waitForDisplayed()
    await this.viewCartBtn.click();
  }

  async expectLeftSideBarIsVisible() {
    await (await this.leftSideBar).scrollIntoView();
    expect(await this.leftSideBar).toBeDisplayed();
  }

  async clickWomenCategoryButton() {
    await this.womenCategory.click();
  }

  async clickWomenTopsCategoryButton() {
    await (await this.womenTopsCategory).waitForClickable();
    await this.womenTopsCategory.click();
  }

  async clickMenCategoryButton() {
    await this.menCategory.click();
  }

  async expectWomenTopsHeaderIsVisible() {
    const currentUrl = await browser.getUrl();
    if (currentUrl !== 'https://automationexercise.com/category_products/2') {
      await browser.url('https://automationexercise.com/category_products/2');
    }
    expect(await this.ProductsHeader).toBeDisplayed();
    expect (await this.ProductsHeader).toHaveTextContaining('Women - Tops Products')
  }

  async clickMenTShirtsCategoryButton() {
    await this.menTShirtsCategory.click();
  }

  async expectTshirtsPageIsOpen() {
    const expectedUrl = 'https://automationexercise.com/category_products/3';
    const currentUrl = await browser.getUrl();
    expect(currentUrl).toEqual(expectedUrl);
  }

  async expectBrandBarIsVisible() {
    await (await this.brandBar).scrollIntoView();
    expect(await this.brandBar).toBeDisplayed();
  }

  async clickBibaBrandButton() {
    await this.bibaBrandBtn.click();
  }

  async expectBibaBrandHeaderIsVisible() {
    const expectedUrl = 'https://automationexercise.com/brand_products/Biba';
    const currentUrl = await browser.getUrl();
    expect(currentUrl).toEqual(expectedUrl);
    expect(await this.ProductsHeader).toBeDisplayed();
    expect (await this.ProductsHeader).toHaveTextContaining('Brand - Biba Products')
  }

  async clickPoloBrandButton() {
    await (await this.poloBrandBtn).scrollIntoView();
    await (await this.poloBrandBtn).click();
  }

  async expectPoloBrandHeaderIsVisible() {
    const expectedUrl = 'https://automationexercise.com/brand_products/Polo';
    const currentUrl = await browser.getUrl();
    expect(currentUrl).toEqual(expectedUrl);
    expect(await this.ProductsHeader).toBeDisplayed();
    expect (await this.ProductsHeader).toHaveTextContaining('Brand - Polo Products')
  }

  async expectSearchProductsHeaderIsVisible() {
    expect(await this.ProductsHeader).toBeDisplayed();
    expect (await this.ProductsHeader).toHaveTextContaining('SEARCHED PRODUCTS')
  }

  async fillSearchInput() {
    await this.searchInput.setValue('blue top');
    await this.searchBtn.click();
  }

  async expectSearchedProductIsVisible() {
    expect(await this.firstItem).toBeDisplayed();
    expect (await this.firstItemDescription).toHaveTextContaining('Blue Top')
  }

  async expectRecommendedItemsHeaderIsVisible() {
    await (await this.recommendedItemsHeader).scrollIntoView();
    expect(await this.recommendedItemsHeader).toBeDisplayed();
    expect (await this.recommendedItemsHeader).toHaveTextContaining('RECOMMENDED ITEMS')
  }

  async clickAddToCartRecommendedItem() {
    expect (await this.scrollRecommendedSlide).toBeDisabled()
    if (await this.selectedItemInRecommended.isDisplayed()) {
      await this.selectedItemAddToCartBtn.click({force: true} as any);
    } else {
      await this.scrollRecommendedSlide.click();
      await expect(this.selectedItemInRecommended).toBeDisplayed();
      await this.selectedItemAddToCartBtn.click();
    }
  }




}
export default new AllProductsPage

