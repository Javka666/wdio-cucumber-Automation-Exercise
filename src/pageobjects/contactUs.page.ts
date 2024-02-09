class ContactUsPage {

  testFile = '../testUploadFile';

  get successMessage() { return $('//div[text()="Success! Your details have been submitted successfully."]') };

  get nameInput() { return $('//input[@data-qa="name"]') };

  get emailInput() { return $('//input[@data-qa="email"]') };

  get subjectInput() { return $('//input[@data-qa="subject"]') };

  get messageInput() { return $('//textarea[@data-qa="message"]') };

  get fileUploadInput() { return $('//input[@type="file"]') };

  get submitBtn() { return $('//input[@name="submit"]') };

  get homeBtn() { return $('//a[@class="btn btn-success"]') };

  get contactUsForm() { return $('//div[@class="contact-form"]') };

}
export default new ContactUsPage