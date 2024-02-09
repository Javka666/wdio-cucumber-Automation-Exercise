export default new class Footer {
  get subscriptionHeader () { return $(`//div[@class="single-widget"]//h2`) };
  get subscriptionEmailInput () { return $(`//input[@id="susbscribe_email"]`) };
  get subscribeBtn () { return $(`//button[@id="subscribe"]`) };
  get successSubscribeMessage() { return $('#success-subscribe') };
  get scrollUpBtn () { return $(`//a[@id="scrollUp"]`) };
}