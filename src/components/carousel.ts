import SelectorHandler from "./customSelectorHandler"

export default class CarouselItem extends SelectorHandler {

  constructor(name: string) {
    super(name)
  }

  get prevBtnRecommendedCarousel() { return $(`//a[@data-slide="prev" and contains(@class, "left recommended-item-control")]`) };

  get nextBtnRecommendedCarousel() { return $(`//a[@data-slide="next" and contains(@class, "right recommended-item-control")]`) };

  get addToCartRecommendedItemByName() { return $(`(//p[text()="${this.name}"]//parent::div//a[@class="btn btn-default add-to-cart"])[3]`) };


  async findAndClickBtnToRecommendedItem() {
    if (await this.searchItemInCarousel()) {
      await this.addToCartRecommendedItemByName.waitForClickable();
      await this.addToCartRecommendedItemByName.click();
    } else { throw new Error(`Can't find element with name: ${this.name}`) }

  }

  async searchItemInCarousel(count = 0) {
    while (count < 10) {
      if (await this.addToCartRecommendedItemByName.isDisplayed()) {
        return true;
      }
      await this.prevBtnRecommendedCarousel.click();
      count++;
    }
    return false
  }
}