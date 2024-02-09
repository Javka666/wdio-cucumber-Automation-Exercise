import SelectorHandler from "./customSelectorHandler";

export default class BrandsHandler extends SelectorHandler {

  constructor(name:string){
    super(name);
  }
  get locatorByBrandName () { return $(`//a[@href="/brand_products/${this.name}"]`) }

}
