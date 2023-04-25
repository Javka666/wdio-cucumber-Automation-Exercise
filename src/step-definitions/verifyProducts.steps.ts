import { When, Then } from '@wdio/cucumber-framework';
import  AllProductsPage  from '../pageobjects/allProducts.page';
import AccountCreationPage from '../pageobjects/accountCreation.page';
import MainPage from '../pageobjects/main.page';
import LoginPage from '../pageobjects/login.page';
import CartPage from '../pageobjects/cart.page';
import CheckoutPage from '../pageobjects/checkout.page';
import RandomProductPage from '../pageobjects/product.page';

Then('I should see the list of products.', async () => {
  await AllProductsPage.productsListIsVisible();
});

When('I click the "View Product" button of the first product.', async () => {
  await AllProductsPage.clickViewProductButton();
});

Then('I should be on the product details page.', async () => {
  await RandomProductPage.productsInformationBlockIsVisible();
});

Then('I should see the product details.', async () => {
  await RandomProductPage.verifyInformationIsVisible();
});

Then('Increase quantity to 4.', async () => {
  await RandomProductPage.setQuantityValue();
});

When('I click "Add to Cart" button.', async () => {
  await RandomProductPage.clickAddToCartButton();
});

Then('click the "View Cart" button.', async () => {
  await AllProductsPage.clickViewCartButton();
});

Then('Verify that product is displayed in cart page with exact quantity.', async () => {
  await CartPage.expectCartPageHeaderIsVisible()
  await CartPage.expectQuantity();
});

When('I scroll down to footer.', async () => {
  await MainPage.scrollToSubscriptionHeader();
});

Then('verify text "SUBSCRIPTION".', async () => {
  await MainPage.subscriptionHeaderIsVisible();
});

When('I input email address and click arrow button.', async () => {
  await RandomProductPage.enterNameAndEmail();
});

Then('verify success message "You have been successfully subscribed!" is visible.', async () => {
  await AllProductsPage.expectSubscriptionIsSuccess();
});

Then('verify text "SUBSCRIPTION" on "Cart" page.', async () => {
  await MainPage.subscriptionHeaderIsVisible();
});

When('I input email address and click arrow button on "Cart" page.', async () => {
  await RandomProductPage.enterNameAndEmail();
});

Then('verify success message on "Cart" page "You have been successfully subscribed!" is visible.', async () => {
  await AllProductsPage.expectSubscriptionIsSuccess();
});

Then('I should see Category bar.', async () => {
  await AllProductsPage.expectLeftSideBarIsVisible();
});

When('I click "Women" button.', async () => {
  await AllProductsPage.clickWomenCategoryButton();
});

When('I click "Tops" button.', async () => {
  await AllProductsPage.clickWomenTopsCategoryButton();
});

Then('I Verify that category page is displayed and confirm text "WOMEN - TOPS PRODUCTS".', async () => {
  await AllProductsPage.expectWomenTopsHeaderIsVisible();
});

When('I click "Men" button.', async () => {
  await AllProductsPage.clickMenCategoryButton();
});

When('I click "T-shirt" button.', async () => {
  await AllProductsPage.clickMenTShirtsCategoryButton();
});

Then('I Verify that I am navigated to that category page.', async () => {
  await AllProductsPage.expectTshirtsPageIsOpen();
});

Then('I verify that Brands are visible on the left side bar.', async () => {
  await AllProductsPage.expectBrandBarIsVisible();
});

When('I Click on "BIBA" brand name.', async () => {
  await AllProductsPage.clickBibaBrandButton();
});

Then('Verify that user is navigated to brand page and brand products are displayed.', async () => {
  await AllProductsPage.expectBibaBrandHeaderIsVisible();
});

When('I click on "POLO" brand link.', async () => {
  await AllProductsPage.clickPoloBrandButton();
});

Then('Verify that I am navigated to that brand page and can see products.', async () => {
  await AllProductsPage.expectPoloBrandHeaderIsVisible();
});

When('Enter product name in search input and click search button.', async () => {
  await AllProductsPage.fillSearchInput();
});

Then('Verify "SEARCHED PRODUCT" is visible.', async () => {
  await AllProductsPage.expectSearchProductsHeaderIsVisible();
});

Then('Verify the product related to search is visible.', async () => {
  await AllProductsPage.expectSearchedProductIsVisible();
});

When('Add this product to cart.', async () => {
  await AllProductsPage.hoverOverFirstItemAndAddToCart();
});

When('Click "Cart" button and verify that product is visible in cart.', async () => {
  await AllProductsPage.clickViewCartButton();
  await CartPage.expectFirstItemInCartIsVisible();
});

When('Click "SignupOrLogin" button and submit login details.', async () => {
  await MainPage.clickLoginButton();
  await LoginPage.typeInCorrectCredentials();
});


Then('Verify that this product is visible in cart after login as well.', async () => {
  await CartPage.expectFirstItemInCartIsVisible();
});

Then('I verify "Write Your Review" is visible.', async () => {
  await RandomProductPage.expectProductReviewHeaderIsVisible();
});

When('I enter name, email and review.', async () => {
  await RandomProductPage.enterReviewCredentials();
});

When('click "Submit" button.', async () => {
  await RandomProductPage.clickReviewSubmitButton();
});

Then('I should see success message "Thank you for your review.".', async () => {
  await RandomProductPage.expectReviewSuccessMessageIsVisible();
});

Then('Scroll to bottom of page and verify "RECOMMENDED ITEMS" are visible.', async () => {
  await AllProductsPage.expectRecommendedItemsHeaderIsVisible();
});

When('click on "Add To Cart" on Recommended product.', async () => {
  await AllProductsPage.clickAddToCartRecommendedItem();
});


Then('Verify that product is displayed in cart page.', async () => {
  await CartPage.expectFirstItemInCartIsVisible();
});


Then('I verify that the delivery address is same address filled at the time of account registration.', async () => {
  await AccountCreationPage.expectDeliveryForm();
});

Then('I verify that the billing address is same address filled at the time of account registration.', async () => {
  await AccountCreationPage.expectBillingForm();
});

When('I scroll down to bottom.', async () => {
  await MainPage.scrollToSubscriptionHeader();
});

When('Click on arrow at bottom right side to move upward.', async () => {
  await MainPage.clickScrollUpButton();
});

When('I scroll up to header.', async () => {
  await MainPage.scrollUpToHomePageHeader();
});

Then('Verify that page is scrolled up and "Full-Fledged practice website for Automation Engineers" text is visible on screen.', async () => {
  await MainPage.expectHomePageHeaderIsVisible();
});

Then('I check if the cart contains both products.', async () => {
  await CartPage.expectItemsInViewCartAreVisible();
});

Then('I verify the prices, quantities, and total price is correct.', async () => {
  await CartPage.expectCorrectnessPrices();
});

Then('enter description in comment text area and click "Place Order".', async () => {
  await CheckoutPage.enterInputOrderMessage();
});