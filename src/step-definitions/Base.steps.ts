import { Given, When, Then } from '@wdio/cucumber-framework';
import  AllProductsPage  from '../pageobjects/allProducts.page';
import AccountCreationPage from '../pageobjects/accountCreation.page';
import MainPage from '../pageobjects/main.page';
import CartPage from '../pageobjects/cart.page';



Given('I navigate to Main Page.', async () => {
  await AllProductsPage.navigate();
});

When('I click the "Logout" button.', async () => {
  await MainPage.clickLogoutButton();
});

When('I click on the Login button.', async () => {
  await MainPage.clickLoginButton();
});

When('I click on "Delete Account" button.', async () => {
  await MainPage.clickDeleteButton();
});


When('I click "Products" button.', async () => {
  await MainPage.clickProductsButton();
});

When('I click the "Cart" button.', async () => {
  await MainPage.clickCartButton();
});

When('I click on the Contact Us button.', async () => {
  await MainPage.clickContactUsButton();
});

When('I click on the Test Cases button.', async () => {
  await MainPage.clickTestCasesButton();
});

Then('I should see "TEST CASES" header.', async () => {
  await MainPage.testCasesUrlCorrect();
  await MainPage.testCasesPageHeaderIsVisible();
});

When('I go to Main Page.', async () => {
  await AllProductsPage.navigate();
});

Then('I am on the Cart page.', async () => {
  await CartPage.expectCartPageHeaderIsVisible();
});

When('Click "Delete Account" button.', async () => {
  await MainPage.clickDeleteButton();
});

Then('verify "ACCOUNT DELETED!".', async () => {
  await AccountCreationPage.verifyDeleteIsComplete();
});
  