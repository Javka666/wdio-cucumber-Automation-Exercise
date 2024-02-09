import { Given, When, Then } from '@wdio/cucumber-framework';
import BaseMethods from '../pageobjects/baseMethods.page';
import SelectorHandler from '../components/customSelectorHandler';
import { ProductDetails, getElementByPageAndSelector, pageObjects } from '../components/types';
import cartPage from '../pageobjects/cart.page';
import ProductDetailsPage from '../pageobjects/productDetails.page';
import CarouselItem from '../components/carousel';
import BrandsHandler from '../components/brandsHandler';
import CategoryHandler from '../components/categoryHandler';
import AddressBoxHandler from '../components/addressBoxHandler';

let selectorHandler: SelectorHandler;
let expectedUrl: string;
let productDetails: ProductDetails;

Then("{int} pause", async (timeout:number) => {
  await browser.pause(timeout);
});

Given("Navigate to Main Page.", async () => {
  await BaseMethods.navigate();
});

When("Click {string} button on {string}.", async (button: string, page: string) => {
  let element = await getElementByPageAndSelector(button, page);
  let pageObjectClass = pageObjects[element.pageObjectName];

  if (pageObjectClass) {
    if (element.pageObjectName !== 'AccountCreationPage') { expectedUrl = await BaseMethods.getLinkFromElement(pageObjectClass, element.locator); }
    await BaseMethods.scrollToElementAndClick({ pageObject: pageObjectClass, locatorName: element.locator });
  } else {
    throw new Error(`Page object '${element.pageObjectName}' not found.`);
  }
});

When("Should see {string} on {string}.", async (selector: string, page: string) => {
  let element = await getElementByPageAndSelector(selector, page)
  let pageObjectClass = pageObjects[element.pageObjectName];

  if (pageObjectClass) {
    await BaseMethods.verifyElementIsVisible(pageObjectClass, element.locator);
  } else {
    throw new Error(`Page object '${element.pageObjectName}' not found.`);
  }
});

When("Close the advertisement if it appears.", async () => {
  if (await BaseMethods.verifyUrl(expectedUrl)) { return; }
  else { await browser.url(`https://automationexercise.com` + `${expectedUrl}`); }
});

When("Check that I'm on the {string} page.", async (expectedTitleText: string) => {
  if (expectedTitleText === 'Cart') {
    await BaseMethods.verifyElementIsVisible(cartPage, 'shoppingCartBreadcrumb');
  } else {
    let titleText = await BaseMethods.getTitleText();
    expect(titleText).toContain(expectedTitleText.toLowerCase());
  }
});

When('Click {string} button to {string}.', async (buttonName: string, productName: string) => {
  selectorHandler = new SelectorHandler(productName);
  switch (buttonName) {
    case "Add to cart":
      await selectorHandler.scrollAndClick('addToCartBtnByName');
      break;
    case "Delete Item":
      await selectorHandler.scrollAndClick('deleteItemInCartByName');
      break;
    case "View Product":
      expectedUrl = await selectorHandler.getLinkFromCustomSelector('viewProductBtnByName');
      await selectorHandler.scrollAndClick('viewProductBtnByName');
      break;
    default:
      throw new Error(`This ${buttonName} is not defined`)
  }
});

Then('Check if the {string} contains {string}.', async (page: string, name: string) => {
  switch (page) {
    case 'Cart Page':
      selectorHandler = new SelectorHandler(name);
      await selectorHandler.checkItemExistInCart();
      break;
    case 'Product details page':
      let productName = await ProductDetailsPage.getProductName()
      expect(name).toEqual(productName)
      break;
    default:
      throw new Error(`This ${page} is not defined`)
  }
});

When('Fill {string} in {string} on {string}.', async (text: string, inputName: string, page: string) => {
  let element = await getElementByPageAndSelector(inputName, page)
  let pageObjectClass = pageObjects[element.pageObjectName];
  if (pageObjectClass) {
    await BaseMethods.scrollAndFillInputField(pageObjectClass, element.locator, text);
  } else {
    throw new Error(`Page object '${element.pageObjectName}' not found.`);
  }
});

Then('The {string} expected "price" equals {int}, "quantity" equals {int}, and "total price" equals {int}.', async (name: string, price: number, quantity: number, total: number) => {
  let priceValue = (await new SelectorHandler(name, 'price').getFieldValueInCart());
  let quantityValue = (await new SelectorHandler(name, 'quantity').getFieldValueInCart());
  let totalPriceValue = (await new SelectorHandler(name, 'total').getFieldValueInCart());

  expect(Number(priceValue.replace(/[^0-9]/g, ''))).toEqual(price);
  expect(Number(quantityValue)).toEqual(quantity);
  expect(Number(totalPriceValue.replace(/[^0-9]/g, ''))).toEqual(total);
});

Then('the details for {string} should be:', async (product: string, dataTable: any) => {
  const expectedProductDetails: ProductDetails = {
    price: parseInt(dataTable.hashes()[0].Price),
    quantity: parseInt(dataTable.hashes()[0].Quantity),
    totalPrice: parseInt(dataTable.hashes()[0]['Total Price']),
  };

  productDetails = {
    price: await BaseMethods.getNumberFromString(await new SelectorHandler(product, 'price').getFieldValueInCart()),
    quantity: await BaseMethods.getNumberFromString(await new SelectorHandler(product, 'quantity').getFieldValueInCart()),
    totalPrice: await BaseMethods.getNumberFromString(await new SelectorHandler(product, 'total').getFieldValueInCart()),
  }

  expect(productDetails).toEqual(expectedProductDetails);
});

Then('Check that {string} on {string} contains {string}.', async (elementName: string, page: string, expectedText: string) => {
  let element = await getElementByPageAndSelector(elementName, page)
  let pageObjectClass = pageObjects[element.pageObjectName];

  if (pageObjectClass) {
    let actualText: string = await BaseMethods.getTextFromElement({ pageObject: pageObjectClass, locatorName: element.locator });
    expect(actualText.toUpperCase().trim()).toContain(expectedText.toUpperCase().trim());
  } else {
    throw new Error(`Page object '${element.pageObjectName}' not found.`);
  }
});


When('Click "Add To Cart" button to {string} on Recommended items carousel.', async (productName: string) => {
  let carouselItem = new CarouselItem(productName);
  await carouselItem.findAndClickBtnToRecommendedItem();
});

Then('Scroll to {string} on {string}.', async (elementName: string, page: string) => {
  let element = await getElementByPageAndSelector(elementName, page)
  let pageObjectClass = pageObjects[element.pageObjectName];
  if (pageObjectClass) {
    await BaseMethods.scrollToElement(pageObjectClass, element.locator)
  } else {
    throw new Error(`Page object '${element.pageObjectName}' not found.`);
  }
});

When('Click on {string} {string}.', async (selectorName: string, blockName: string) => {
  let correctedName = await BaseMethods.brandNameAndCategoryHandler(selectorName);

  switch (blockName) {
    case 'brand':
      let brandLocator = await new BrandsHandler(correctedName).locatorByBrandName as unknown as WebdriverIO.Element | undefined;
      expectedUrl = await brandLocator.getAttribute('href');
      await BaseMethods.scrollToElementAndClick({ selector: brandLocator });
      break;
    case 'category':
      let categoryLocator = await new CategoryHandler(correctedName).locatorByCategoryName as unknown as WebdriverIO.Element | undefined;
      await BaseMethods.scrollToElementAndClick({ selector: categoryLocator });
      expectedUrl = await categoryLocator.getAttribute('href');
      break;
    default:
      throw new Error(`This ${blockName} is not defined`)
  }
});


When('Scroll to {string} category and choose the {string} subcategory.', async (category: string, subcategory: string) => {
  let correctedCategory = await BaseMethods.brandNameAndCategoryHandler(category);
  let correctedSubcategory = await BaseMethods.brandNameAndCategoryHandler(subcategory);
  let categoryLocator = await new CategoryHandler(correctedCategory, correctedSubcategory).locatorBySubCategoryName as unknown as WebdriverIO.Element | undefined;
  await BaseMethods.scrollToElementAndClick({ selector: categoryLocator });
  expectedUrl = await categoryLocator.getAttribute('href');
});

When('Upload {string} in {string} on {string}.', async (fileName: string, inputName: string, page: string) => {
  let element = await getElementByPageAndSelector(inputName, page)
  let pageObjectClass = pageObjects[element.pageObjectName];
  if (pageObjectClass) {
    await BaseMethods.scrollToElementAndUploadFile({ pageObject: pageObjectClass, locatorName: element.locator }, fileName);
  } else {
    throw new Error(`Page object '${element.pageObjectName}' not found.`);
  }

});

When('Select {string} in {string} on {string}.', async (value: string|number, inputName: string, page: string) => {
  let element = await getElementByPageAndSelector(inputName, page);
  let pageObjectClass = pageObjects[element.pageObjectName];
  if (pageObjectClass) {
    await BaseMethods.scrollAndSelectValue(pageObjectClass, element.locator, value);
  } else {
    throw new Error(`Page object '${element.pageObjectName}' not found.`);
  }
});

When("Select the {string} checkbox on the {string}.", async (checkboxName: string, page: string) => {
  let element = await getElementByPageAndSelector(checkboxName+' checkbox', page);
  let pageObjectClass = pageObjects[element.pageObjectName];

  if (pageObjectClass) {
    if (element.pageObjectName !== 'AccountCreationPage') { expectedUrl = await BaseMethods.getLinkFromElement(pageObjectClass, element.locator); }
    await BaseMethods.scrollToElementAndClick({ pageObject: pageObjectClass, locatorName: element.locator });
  } else {
    throw new Error(`Page object '${element.pageObjectName}' not found.`);
  }
});

When("Check that the {string} in the {string} box contains {string}.", async (lineName: string, box: string,text:string) => {
  // let element = await getElementByPageAndSelector(elementName, page);
  let selector = await BaseMethods.locatorHandler(lineName+' line');
  let element = await new AddressBoxHandler(box)[selector];
    let actualText: string = await BaseMethods.getTextFromElement({ selector: element });
    expect(actualText).toContain(text);
});

Then('Scroll to {string} to {string}.', async (elementName: string, page: string) => {
  let element = await getElementByPageAndSelector(elementName, page);
  let pageObjectClass = pageObjects[element.pageObjectName];
  if (pageObjectClass) {
    await BaseMethods.scrollToElement(pageObjectClass, element.locator)
  } else {
    throw new Error(`Page object '${element.pageObjectName}' not found.`);
  }
});



 