class ContactUsPage {

  get header() { return $('//h2[text()="Get In Touch"]') };

  get homePageHeader() { return $('//div[@class="logo pull-left"]') };

  get successMessage() { return $('//div[text()="Success! Your details have been submitted successfully."]') };

  get nameField() { return $('//input[@data-qa="name"]') };

  get emailField() { return $('//input[@data-qa="email"]') };

  get subjectField() { return $('//input[@data-qa="subject"]') };

  get messageField() { return $('//textarea[@data-qa="message"]') };

  get fileUploadField() { return $('//input[@type="file"]') };

  get submitButton() { return $('//input[@data-qa="submit-button"]') };

  async isHeaderVisible() {
    await this.header.waitForExist();
    expect(await this.header).toBeDisplayed()
  }

  async enterContactDetails(name: string, email: string, subject: string, message: string): Promise<void> {
    await (await this.nameField).setValue(name);
    await (await this.emailField).setValue(email);
    await (await this.subjectField).setValue(subject);
    await (await this.messageField).setValue(message);
  }

  async uploadFile() {

    const filePath = '/Users/aleksandrpuchek/Desktop/wdio-cucumber/src/evil_angry';

    await this.fileUploadField.setValue(filePath);
  }

  async clickSubmitButton() {
    await this.submitButton.scrollIntoView({ block: 'center', inline: 'center' });
    await this.submitButton.click({ force: true }as any);
    await browser.waitUntil(async () => {
      return await browser.getAlertText() !== null;
    });
    await browser.acceptAlert();
  }

  async waitForSuccessMessage() {
    await this.successMessage.waitForExist();
    expect(await this.successMessage).toBeDisplayed()
  }

  async homePageHeaderIsVisible() {
    await this.homePageHeader.waitForExist();
    expect(await this.homePageHeader).toBeDisplayed()
  }




}
export default new ContactUsPage