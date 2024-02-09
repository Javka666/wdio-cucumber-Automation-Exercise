import {ScrollToElementAndMethodName, nonButtonIndicators} from "../components/types";
import ContactUsPage from '../pageobjects/contactUs.page'
import path from 'path';
import {Selector} from 'webdriverio'

class BaseMethods {
  get title() {
    return $("//h2[@class='title text-center']");
  };

  testFile = '../testUploadFile';

  async navigate() {
    await browser.url("https://automationexercise.com/");
  }

  async scrollToElementAndClick<T>({
                                     pageObject,
                                     locatorName,
                                     selector
                                   }: ScrollToElementAndMethodName<T>): Promise<void> {

    const locator = selector || (pageObject && locatorName ? pageObject[locatorName] as WebdriverIO.Element | undefined : undefined);

    if (locator) {
      try {
        if (!await locator.isDisplayedInViewport()) {
          await locator.scrollIntoView();
        }
        await locator.waitForClickable();
        await locator.click();
        if (pageObject === ContactUsPage && locatorName === 'submitBtn') {
          await this.acceptBrowserAlert()
        }
      } catch (error) {
        throw new Error(`Error clicking on element "${locatorName}"`);
      }
    } else {
      throw new Error(`Locator "${locatorName}" not found on the page.`);
    }
  }

  async locatorHandler(locatorName: string) {
    const isNonButton: boolean = locatorName.split(' ').some((word: string) => nonButtonIndicators.includes(word.toLowerCase()));

    let words: string[] = locatorName.split(' ');
    let firstWord: string = words.shift().toLowerCase();
    let camelCaseLocator: string = isNonButton
      ? firstWord + words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')
      : firstWord + words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('') + 'Btn';

    return camelCaseLocator;
  }

  async pageObjectNameHandler(page: string) {
    // if (page === 'Header' || page === 'Footer'){return }
    let pageObjectName = page
      .split(' ')
      .map((word, index) => (index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)))
      .join('');

    return pageObjectName;
  }

  async verifyElementIsVisible<T>(pageObject: T, locatorName: string) {
    const locator = pageObject[locatorName] as WebdriverIO.Element | undefined;
    if (locator) {
      try {
        await locator.waitForExist();
        await locator.isDisplayed()
      } catch (error) {
        throw new Error(`Element "${locatorName}" doesn't exist or can't be displayed`);
      }
    } else {
      throw new Error(`Locator "${locatorName}" not found on the page.`);
    }
  }

  async scrollAndFillInputField<T>(pageObject: T, inputName: string, value: string | number): Promise<void> {
    const locator = pageObject[inputName] as WebdriverIO.Element | undefined;
    if (locator) {
      try {
        await this.scrollToElement(pageObject, inputName)
        await locator.setValue(value)
      } catch (error) {
        throw new Error(`Error Filling input "${inputName}":`);
      }
    } else {
      throw new Error(`Locator "${inputName}" not found on the page.`);
    }
  }

  async scrollToElement<T>(pageObject: T, locatorName: string): Promise<void> {
    const locator = pageObject[locatorName] as WebdriverIO.Element | undefined;
    if (locator) {
      try {
        await locator.waitForExist();
        await locator.scrollIntoView();
      } catch (error) {
        throw new Error(`Error Scrolling to element "${locatorName}":`);
      }
    } else {
      throw new Error(`Locator "${locatorName}" not found on the page.`);
    }
  }


  async getLinkFromElement<T>(pageObject: T, locatorName: string): Promise<string> {
    let locator = pageObject[locatorName] as WebdriverIO.Element | undefined;
    if (locator) {
      try {
        return await locator.getAttribute('href')
      } catch (error) {
        throw new Error(`Error getting link from element "${locatorName}":`);
      }
    } else {
      throw new Error(`Locator "${locatorName}" not found on the page.`);
    }
  }

  async verifyUrl(targetString: string): Promise<boolean> {
    const currentUrl: string = await browser.getUrl();
    return currentUrl === `https://automationexercise.com` + `${targetString}`
  }

  async getTitleText(): Promise<string> {
    return (await this.title.getText()).toLowerCase()
  }


  async getTextFromElement<T>({pageObject, locatorName, selector}: ScrollToElementAndMethodName<T>): Promise<string> {
    const locator = selector || (pageObject && locatorName ? pageObject[locatorName] as WebdriverIO.Element | undefined : undefined);
    if (locator) {
      try {
        await locator.waitForDisplayed();
        return await locator.getText();
      } catch (error) {
        throw new Error(`Error getting text from element "${locatorName}"`);
      }
    } else {
      throw new Error(`Locator "${locatorName}" not found on the page.`);
    }
  }


  async brandNameAndCategoryHandler(brandName: string): Promise<string> {
    if (brandName === 'H&M') {
      return 'H&M'
    }
    let words: string[] = brandName.toLowerCase().split(' ');
    let camelCaseLocator: string = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    return camelCaseLocator
  }

  async scrollToElementAndUploadFile<T>({
                                          pageObject,
                                          locatorName,
                                          selector
                                        }: ScrollToElementAndMethodName<T>, fileLocatorName: string): Promise<void> {
    const locator = selector || (pageObject && locatorName ? pageObject[locatorName] as WebdriverIO.Element | undefined : undefined);
    let filePath = await this.getPathToFile(pageObject, fileLocatorName);
    if (locator) {
      try {
        if (!await locator.isDisplayedInViewport()) {
          await locator.scrollIntoView();
        }
        await locator.waitForDisplayed();
        await locator.setValue(filePath);
      } catch (error) {
        throw new Error(`Error clicking on element "${locatorName}"`);
      }
    } else {
      throw new Error(`Locator "${locatorName}" not found on the page.`);
    }
  }

  private async getPathToFile<T>(pageObject: T, name: string) {
    let camelCaseLocator = await this.locatorHandler(name)
    return path.resolve(__dirname, pageObject[camelCaseLocator])
  }

  async acceptBrowserAlert() {
    await browser.waitUntil(async () => {
      return await browser.getAlertText() !== null;
    });
    await browser.acceptAlert();
  }

  async scrollAndSelectValue<T>(pageObject: T, inputName: string, value: string | number): Promise<void> {
    const locator = pageObject[inputName] as WebdriverIO.Element | undefined;
    if (locator) {
      try {
        await this.scrollToElement(pageObject, inputName)
        await locator.selectByVisibleText(value)
      } catch (error) {
        throw new Error(`Error Filling input "${inputName}":`);
      }
    } else {
      throw new Error(`Locator "${inputName}" not found on the page.`);
    }
  }

  async getNumberFromString(text: string) {
    return Number(text.replace(/[^0-9]/g, ''));
  }


}

export default new BaseMethods

