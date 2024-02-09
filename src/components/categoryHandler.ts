export default class CategoryHandler {

  category:string;
  subcategory:string;

  constructor(category:string,subcategory?:string){
    this.category = category;
    this.subcategory = subcategory;
  }

  get locatorByCategoryName () { return $(`[href="#${this.category}"]`) };

  get locatorBySubCategoryName () { return $(`//div[@id="${this.category}"]//a[contains(text(), "${this.subcategory}")]`) };

}
