import { When, Then } from '@wdio/cucumber-framework';
import AccountCreationPage from '../pageobjects/accountCreation.page';
import LoginPage from '../pageobjects/login.page';

Then('"New User Signup!" is visible.', async () => {
  await LoginPage.verifySignUpHeaderIsVisible();
});

When('I enter name and email address.', async () => {
  await LoginPage.enterNameAndEmail();
});

When('I enter existing name and email address and click the "Signup" button.', async () => {
  await LoginPage.enterExistingNameAndEmailAndClickSignUpBtn();
});

Then('click the "Signup" button.', async () => {
  await LoginPage.clickSignUpButton();
});

Then('"ENTER ACCOUNT INFORMATION" is visible.', async () => {
  await AccountCreationPage.verifyRegistrationHeaderIsVisible();
});

When('I fill in the account details.', async () => {
  await AccountCreationPage.fillAccountCreationForm();
});

Then('click the "Create Account" button.', async () => {
  await AccountCreationPage.submitAccountCreationForm();
});

Then('"ACCOUNT CREATED!" is visible.', async () => {
  await AccountCreationPage.verifyRegistrationIsComplete();
});

When('I login with correct email and password.', async () => {
  await LoginPage.inputCorrectCredentials();
});

Then('I should see "ACCOUNT DELETED!" is visible.', async () => {
  await AccountCreationPage.verifyDeleteIsComplete();
});

Then('I should see "Email Address already exist!".', async () => {
  await LoginPage.verifyExistingCredsErrorIsVisible();
});

