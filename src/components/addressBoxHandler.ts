
export default class AddressBoxHandler {
   box: string;

  constructor(box: string) {
    this.box = box === 'delivery' ? 'address item box' : 'address alternate_item box';
  }

  get fullNameLine() {return $(`//ul[@class="${this.box}"]//li[@class="address_firstname address_lastname"]`)};
  get companyLine() {return $(`(//ul[@class="${this.box}"]//li[@class="address_address1 address_address2"])[1]`)};
  get firstAddressLine() {return $(`(//ul[@class="${this.box}"]//li[@class="address_address1 address_address2"])[2]`)};
  get secondAddressLine() {return $(`(//ul[@class="${this.box}"]//li[@class="address_address1 address_address2"])[3]`)};
  get cityStatePostcodeLine() {return $(`(//ul[@class="${this.box}"]//li[@class="address_city address_state_name address_postcode"])[1]`)};
  get countryLine() {return $(`(//ul[@class="${this.box}"]//li[@class="address_country_name"])[1]`)};
  get phoneNumberLine() {return $(`(//ul[@class="${this.box}"]//li[@class="address_phone"])[1]`)};

}