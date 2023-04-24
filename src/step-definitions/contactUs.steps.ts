import { When, Then } from '@wdio/cucumber-framework';
import  ContactUsPage  from '../pageobjects/contactUs.page';

Then('I should see the Get in Touch section.', async () => {
  await ContactUsPage.isHeaderVisible();
});

When('I enter my name, email, subject and message.', async () => {
  await ContactUsPage.enterContactDetails('Alex Morales','alexM@gmail.com', 'Test Case', 'Need some practice');
});

When('I upload a file.', async () => {
  await ContactUsPage.uploadFile();
});

Then('I click the Submit button.', async () => {
  await ContactUsPage.clickSubmitButton();
});

Then('I should see a success message.', async () => {
  await ContactUsPage.waitForSuccessMessage()
});

Then('I should see main page.', async () => {
  await ContactUsPage.homePageHeaderIsVisible();
});

Then('should see main page.', async () => {
  await ContactUsPage.homePageHeaderIsVisible();
});
