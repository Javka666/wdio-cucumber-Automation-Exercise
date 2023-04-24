import { When, Then } from '@wdio/cucumber-framework';
import  AllProductsPage  from '../pageobjects/allProducts.page';
import AccountCreationPage from '../pageobjects/accountCreation.page';
import MainPage from '../pageobjects/main.page';
import CartPage from '../pageobjects/cart.page';
import CheckoutPage from '../pageobjects/checkout.page';
import PaymentPage from '../pageobjects/paymentPage.page';



Then('I am on the All Products page.', async () => {
  await AllProductsPage.navigateToProductsPage();
});

When('I hover over the first product and click "Add to cart".', async () => {
  await AllProductsPage.hoverOverFirstItemAndAddToCart();
});

When('I click the "Continue Shopping" button.', async () => {
  await AllProductsPage.clickContinueShoppingButton();
});

When('I hover over the second product and click "Add to cart".', async () => {
  await AllProductsPage.hoverOverSecondItemAndAddToCart();
});

When('click "X" button to delete both products.', async () => {
  await CartPage.clickFirstDeleteBtnInCart();
});

Then('I should see "Cart is empty!".', async () => {
  await CartPage.expectCartIsEmptyAlertIsVisible()
});

When('I click on "Proceed To Checkout" button.', async () => {
  await CartPage.clickProceedToCheckOutButton();
});

Then('I should see Checkout pop-up alert.', async () => {
  await CartPage.verifyCheckOutModalIsVisible();
});

When('I click "RegisterOrLogin" button.', async () => {
  await CartPage.clickRegisterOrLoginButton();
});

When('I back to Main Page.', async () => {
  await AllProductsPage.navigate();
});

Then('I should see "Logged in as username".', async () => {
  await MainPage.verifyCorrectLogin();
});

When('I click "Proceed To Checkout" button.', async () => {
  await CartPage.clickProceedToCheckOutButton();
});

Then('verify Address Details and Review Your Order.', async () => {
  await CheckoutPage.expectReviewHeaderIsVisible()
  await AccountCreationPage.expectDeliveryForm();
  await CartPage.expectCorrectnessPrices();
});


Then('enter payment details: Name on Card, Card Number, CVC, Expiration date.', async () => {
  await PaymentPage.enterPaymentCredentials();
});

When('click "Pay and Confirm Order" button.', async () => {
  await PaymentPage.clickPayAndConfirmButton();
});

Then('verify success message "Your order has been placed successfully!".', async () => {
  await PaymentPage.orderPlaceHeaderIsVisible();
});
