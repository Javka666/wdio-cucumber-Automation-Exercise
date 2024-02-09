export default new class Header {
  get logo() { return $('//div[@class="logo pull-left"]') };

  get homeBtn() { return $('//i[@class="fa fa-home"]') };
  get productsBtn() { return $('//a[@href="/products"]') };

  get cartBtn() { return $('//a[@href="/view_cart"]') };
  get loginBtn() { return $('//a[@href="/login"]') };
  get testCasesBtn() { return $('//a[@href="/test_cases"]') };
  get apitestingBtn() { return $('//a[@href="/api_list"]') };
  get contactUsBtn() { return $('//a[@href="/contact_us"]') };

  get loggedInUserMessage() { return $('//i[@class="fa fa-user"]/following-sibling::b[1]') };

  get deleteAccountBtn() { return $('//a[@href="/delete_account"]') };

  get logoutBtn() { return $('//a[@href="/logout"]') };
}