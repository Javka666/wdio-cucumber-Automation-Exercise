import ProductsPage from '../pageobjects/products.page';
import AccountCreationPage from '../pageobjects/accountCreation.page';
import MainPage from '../pageobjects/main.page';
import CartPage from '../pageobjects/cart.page';
import BaseMethods from '../pageobjects/baseMethods.page';
import CartModalWindow from './cartModal.page';
import CheckoutModalWindow from './checkoutModalWindow';
import ProductDetailsPage from '../pageobjects/productDetails.page';
import ContactUsPage from '../pageobjects/contactUs.page';
import TestCasesPage from '../pageobjects/testCases.page';
import LoginPage from '../pageobjects/login.page';
import CheckoutPage from '../pageobjects/checkout.page';
import NotificationPage from '../pageobjects/notification.page';
import PaymentPage from '../pageobjects/paymentPage.page';
import Header from './header.page'
import Footer from './footer.page'


type PageObjectsType = {
  ProductsPage: typeof ProductsPage;
  AccountCreationPage: typeof AccountCreationPage;
  MainPage: typeof MainPage;
  CartPage: typeof CartPage;
  BaseMethods: typeof BaseMethods;
  CartModalWindow: typeof CartModalWindow;
  ProductDetailsPage: typeof ProductDetailsPage;
  ContactUsPage: typeof ContactUsPage;
  TestCasesPage: typeof TestCasesPage;
  LoginPage: typeof LoginPage;
  NotificationPage: typeof NotificationPage;
  CheckoutModalWindow: typeof CheckoutModalWindow;
  CheckoutPage: typeof CheckoutPage;
  PaymentPage: typeof PaymentPage;
  Header: typeof Header;
  Footer: typeof Footer;
};

export default PageObjectsType;

export const pageObjects: PageObjectsType = {
  ProductsPage,
  AccountCreationPage,
  MainPage,
  CartPage,
  BaseMethods,
  CartModalWindow,
  ProductDetailsPage,
  ContactUsPage,
  TestCasesPage,
  LoginPage,
  NotificationPage,
  CheckoutModalWindow,
  CheckoutPage,
  PaymentPage,
  Header,
  Footer,
};

export const nonButtonIndicators = [
  'alert', 'availability', 'address', 'birth', 'block', 'brand', 'category', 'checkbox', 'condition',
  'container', 'country', 'file', 'form', 'header', 'input', 'item', 'line', 'link', 'logo',
  'message', 'productName',
];

export interface ProductDetails {
  price: number;
  quantity: number;
  totalPrice: number;
}

export async function getElementByPageAndSelector(selectorName: string, page: string) {
  return {
    locator: await BaseMethods.locatorHandler(selectorName),
    pageObjectName: await BaseMethods.pageObjectNameHandler(page)
  }
}

export interface ScrollToElementAndMethodName<T> {
  pageObject?: T;
  locatorName?: string;
  selector?: WebdriverIO.Element | undefined;
}




