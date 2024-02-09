class MainPage {
  get header() { return $('(//h2[@class="title text-center"])[1]') };
  
  get categoryHeader() { return $('//h2[text()="Category"]') };

  get recommendedItemsHeader() { return $('//div[@class="recommended_items"]//h2') };

  get brandsHeader() { return $('//div[@class="brands_products"]//h2') };

}
export default new MainPage();
