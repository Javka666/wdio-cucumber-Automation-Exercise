import { When, Then } from '@wdio/cucumber-framework';
import AccountCreationPage from '../pageobjects/accountCreation.page';
import MainPage from '../pageobjects/main.page';
import LoginPage from '../pageobjects/login.page';

Then('"Logged in as username" is visible.', async () => {
  await MainPage.verifyCorrectLogin();
});

When('I try to login with incorrect email and password.', async () => {
  await LoginPage.inputIncorrectCredentials();
});

Then('I should see "Your email or password is incorrect!".', async () => {
  await LoginPage.verifyIncorrectCredsErrorIsVisible();
});

Then('I should see sign-up page.', async () => {
  await LoginPage.verifySignUpHeaderIsVisible();
});

When('click "Signup" button.', async () => {
  await LoginPage.clickSignUpButton();
});

Then('I should see "ENTER ACCOUNT INFORMATION".', async () => {
  await AccountCreationPage.verifyRegistrationHeaderIsVisible();
});

When('I fill all account details.', async () => {
  await AccountCreationPage.fillAccountCreationForm();
});

Then('click "Create Account" button.', async () => {
  await AccountCreationPage.submitAccountCreationForm();
});


