Feature: Verify address details in checkout page
  As a user,
  I want create an account,
  add products to my cart,
  check the order details and place an order.

  Scenario Outline: Sign up and login and log out then delete account
    Given Navigate to Main Page.
    And Should see "Header" on "Main Page".
    When Click "Login" button on "Header".
    And Close the advertisement if it appears.
    When Fill "<userName>" in "signup name input" on "Login page".
    * Fill "<email>" in "signup email input" on "Login page".
    When Click "Signup" button on "Login page".
    And Should see "header" on "Account Creation Page".
    When Click "<gender>" button on "Account Creation Page".
    When Fill "<password>" in "password input" on "Account Creation Page".
    * Select "<day>" in "day Of birth" on "Account Creation Page".
    * Select "<month>" in "month Of birth" on "Account Creation Page".
    * Select "<year>" in "year Of birth" on "Account Creation Page".
    When Select the 'newsletter' checkbox on the 'Account Creation Page'.
    When Select the 'special offers' checkbox on the 'Account Creation Page'.
    * Fill "<firstName>" in "first name input" on "Account Creation Page".
    * Fill "<lastName>" in "last name input" on "Account Creation Page".
    * Fill "<company>" in "company input" on "Account Creation Page".
    * Fill "<firstAddress>" in "first address input" on "Account Creation Page".
    * Fill "<secondAddress>" in "second address input" on "Account Creation Page".
    * Select "<country>" in "country input" on "Account Creation Page".
    * Fill "<state>" in "state input" on "Account Creation Page".
    * Fill "<city>" in "city input" on "Account Creation Page".
    * Fill "<zipcode>" in "zipcode input" on "Account Creation Page".
    * Fill "<mobileNumber>" in "mobile number input" on "Account Creation Page".
    When Click "create account" button on "Account Creation Page".
    Then Should see "Account Created header" on "Notification Page".
    When Click "Continue" button on "Notification Page".
    And Close the advertisement if it appears.
    And Should see "logged in user message" on "Header".
    Then Check that "logged in user message" on "Header" contains "<userName>".


    When Click "Products" button on "Header".
    And Close the advertisement if it appears.
    Then Check that I'm on the "Products" page.
    When Click "Add to cart" button to "Sleeveless Dress".
    And Click "Continue Shopping" button on "Cart Modal Window".
    * Click "Add to cart" button to "Rust Red Linen Saree".
    * Click "View Cart" button on "Cart Modal Window".
    Then Check that I'm on the "Cart" page.
    And Close the advertisement if it appears.
    Then Check if the "Cart Page" contains "Sleeveless Dress".
    And Check if the "Cart Page" contains "Rust Red Linen Saree".

    * the details for "Sleeveless Dress" should be:
      | Price | Quantity | Total Price |
      | 1000  | 1        | 1000        |

    * the details for "Rust Red Linen Saree" should be:
      | Price | Quantity | Total Price |
      | 3500  | 1        | 3500        |

    When Click "Proceed To Checkout" button on "Cart Page".

    And Should see "address details header" on "Checkout Page".
    And Should see "delivery address box" on "Checkout Page".

    Then Check that the "full name" in the "Delivery" box contains "Mr. Harry Potter".
    Then Check that the "company" in the "Delivery" box contains "HalfBlood".
    Then Check that the "first address" in the "Delivery" box contains "95 Church Rd".
    Then Check that the "second address" in the "Delivery" box contains "TEST".
    Then Check that the "city state postcode" in the "Delivery" box contains "Crystal Palace Rehovot SE19 2TA".
    Then Check that the "country" in the "Delivery" box contains "Australia".
    Then Check that the "phone number" in the "Delivery" box contains "020 8768 1885".

    And Should see "billing address box" on "Checkout Page".

    Then Check that the "full name" in the "Billing" box contains "Mr. Harry Potter".
    Then Check that the "company" in the "Billing" box contains "HalfBlood".
    Then Check that the "first address" in the "Billing" box contains "95 Church Rd".
    Then Check that the "second address" in the "Billing" box contains "TEST".
    Then Check that the "city state postcode" in the "Billing" box contains "Crystal Palace Rehovot SE19 2TA".
    Then Check that the "country" in the "Billing" box contains "Australia".
    Then Check that the "phone number" in the "Billing" box contains "020 8768 1885".
    And Should see "review order header" on "Checkout Page".

    * the details for "Sleeveless Dress" should be:
      | Price | Quantity | Total Price |
      | 1000  | 1        | 1000        |

    * the details for "Rust Red Linen Saree" should be:
      | Price | Quantity | Total Price |
      | 3500  | 1        | 3500        |


    When Click "Delete Account" button on "Header".
    And Should see "Account Deleted header" on "Notification Page".
    When Click "Continue" button on "Notification Page".
    And Close the advertisement if it appears.
    And Should see "Header" on "Main Page".

    Examples:
      | userName       | email       | gender | password | day | month | year | firstName | lastName | company   | firstAddress | secondAddress | country   | state   | city           | zipcode  | mobileNumber  |
      | Harry.J.Potter | hp@dell.com | male   | lordVol  | 31  | July  | 1980 | Harry     | Potter   | HalfBlood | 95 Church Rd | TEST          | Australia | Rehovot | Crystal Palace | SE19 2TA | 020 8768 1885 |

