export default class SelectorHandler {

  name: string;
  field: string;

  constructor(name: string, field?: string) {
    this.name = name;
    this.field = 'cart_' + field
  }

  get viewProductBtnByName() { return $(`((//p[text()="${this.name}"])[1]//parent::div//parent::div//parent::div//a)[3]`) }

  get addToCartBtnByName() { return $(`(//p[text()="${this.name}"])[1]//parent::div//a[@class="btn btn-default add-to-cart"]`) };

  get itemInCartByName() { return $(`//td[@class="cart_description"]//a[text()="${this.name}"]`) };

  get fieldInCartByName() { return $(`//a[text()="${this.name}"]/parent::h4/parent::td/parent::tr//td[@class="${this.field}"]`) };

  get deleteItemInCartByName() { return $(`//a[text()="${this.name}"]/parent::h4/parent::td/parent::tr//td//a[@class="cart_quantity_delete"]`) };


  async scrollAndClick(selectorName: string) {
    if (this[selectorName].isExisting()) {
      await this[selectorName].scrollIntoView();
      await this[selectorName].click()
    } else {
      throw new Error(`Can't find item with that name: ${this.name}`)
    }
  }

  async checkItemExistInCart() {
    if (await this.itemInCartByName.isExisting()) { return; } else {
      throw new Error(`Can't find item with that name: ${this.name}`)
    }
  }

  async getLinkFromCustomSelector(selectorName: string) {
    if (await this[selectorName].isExisting()) {
      return  this[selectorName].getAttribute('href')
    } else {
      throw new Error(`Locator "${this[selectorName]}" not found on the page.`);
    }
  }

  async getFieldValueInCart() {
    return await this.fieldInCartByName.getText()
  }

}