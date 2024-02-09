class NotificationPage { 
  get accountCreatedHeader() { return $('//h2[@data-qa="account-created"]') };
  get accountDeletedHeader() { return $('//h2[@data-qa="account-deleted"]') }; 
  get orderPlacedHeader() { return $('//h2[@data-qa="order-placed"]') }; 
  get continueBtn() { return $('//a[@data-qa="continue-button"]') };
  get dowloadInvoiceBtn() { return $('//a[@href="/download_invoice/0"]') };
}
export default new NotificationPage