Feature: Proceed to checkout and place order
  As a user, I want to be able to choose products from the catalog,
  create an account, successfully place an order then delete my account.

  @smoke
  Scenario Outline: Add and Remove Products from the Cart
    Given Navigate to Main Page.
    And Should see "Header" on "Main Page".
    When Click "Products" button on "Header".
    And Close the advertisement if it appears.
    Then Check that I'm on the "Products" page.
    When Click "Add to cart" button to "<firstProduct>".
    And Click "Continue Shopping" button on "Cart Modal Window".
    * Click "Add to cart" button to "<secondProduct>".
    * Click "View Cart" button on "Cart Modal Window".
    Then Check that I'm on the "Cart" page.
    And Close the advertisement if it appears.
    Then Check if the "Cart Page" contains "<firstProduct>".
    And Check if the "Cart Page" contains "<secondProduct>".

    * the details for "<firstProduct>" should be:
      | Price               | Quantity               | Total Price         |
      | <firstProductPrice> | <firstProductQuantity> | <firstProductTotal> |

    * the details for "<secondProduct>" should be:
      | Price                | Quantity                | Total Price          |
      | <secondProductPrice> | <secondProductQuantity> | <secondProductTotal> |

    When Click "Proceed To Checkout" button on "Cart Page".
    And Should see "Header" on "Checkout Modal Window".
    And Click "register or login" button on "Checkout Modal Window".
    And Close the advertisement if it appears.
    When Fill "Gwen Stacy" in "signup name input" on "Login page".
    * Fill "GwenStacy@web.com" in "signup email input" on "Login page".
    When Click "Signup" button on "Login page".
    And Should see "header" on "Account Creation Page".
    When Click "female" button on "Account Creation Page".
    When Fill "spiderVers" in "password input" on "Account Creation Page".
    * Select "1" in "day Of birth" on "Account Creation Page".
    * Select "December" in "month Of birth" on "Account Creation Page".
    * Select "1965" in "year Of birth" on "Account Creation Page".
    When Select the 'newsletter' checkbox on the 'Account Creation Page'.
    When Select the 'special offers' checkbox on the 'Account Creation Page'.
    * Fill "Gwendolyne" in "first name input" on "Account Creation Page".
    * Fill "Stacy" in "last name input" on "Account Creation Page".
    * Fill "Marvel" in "company input" on "Account Creation Page".
    * Fill "5 East Circle" in "first address input" on "Account Creation Page".
    * Fill "Rego Park, NY 11374" in "second address input" on "Account Creation Page".
    * Select "United States" in "country input" on "Account Creation Page".
    * Fill "New York State" in "state input" on "Account Creation Page".
    * Fill "Manhattan" in "city input" on "Account Creation Page".
    * Fill "311965" in "zipcode input" on "Account Creation Page".
    * Fill "347-432-2905" in "mobile number input" on "Account Creation Page".
    When Click "create account" button on "Account Creation Page".
    Then Should see "Account Created header" on "Notification Page".
    When Click "Continue" button on "Notification Page".
    And Close the advertisement if it appears.
    And Should see "logged in user message" on "Header".
    Then Check that "logged in user message" on "Header" contains "Gwen Stacy".
    When Click "Cart" button on "Header".
    And Close the advertisement if it appears.
    When Click "Proceed To Checkout" button on "Cart Page".
    And Should see "address details header" on "Checkout Page".
    And Should see "delivery address box" on "Checkout Page".
    Then Check that the "full name" in the "Delivery" box contains "Mrs. Gwendolyne Stacy".
    Then Check that the "company" in the "Delivery" box contains "Marvel".
    Then Check that the "first address" in the "Delivery" box contains "5 East Circle".
    Then Check that the "second address" in the "Delivery" box contains "Rego Park, NY 11374".
    Then Check that the "city state postcode" in the "Delivery" box contains "Manhattan New York State 311965".
    Then Check that the "country" in the "Delivery" box contains "United States".
    Then Check that the "phone number" in the "Delivery" box contains "347-432-2905".
    And Should see "billing address box" on "Checkout Page".
    Then Check that the "full name" in the "Billing" box contains "Mrs. Gwendolyne Stacy".
    Then Check that the "company" in the "Billing" box contains "Marvel".
    Then Check that the "first address" in the "Billing" box contains "5 East Circle".
    Then Check that the "second address" in the "Billing" box contains "Rego Park, NY 11374".
    Then Check that the "city state postcode" in the "Billing" box contains "Manhattan New York State 311965".
    Then Check that the "country" in the "Billing" box contains "United States".
    Then Check that the "phone number" in the "Billing" box contains "347-432-2905".
    And Should see "review order header" on "Checkout Page".

    * the details for "<firstProduct>" should be:
      | Price               | Quantity               | Total Price         |
      | <firstProductPrice> | <firstProductQuantity> | <firstProductTotal> |

    * the details for "<secondProduct>" should be:
      | Price                | Quantity                | Total Price          |
      | <secondProductPrice> | <secondProductQuantity> | <secondProductTotal> |

    And Should see "order message input" on "Checkout Page".
    * Fill "Thanks!" in "order message input" on "Checkout Page".
    When Click "place order" button on "Checkout Page".
    Then Should see "header" on "Payment Page".
    * Fill "Gven Stacy" in "cardholdder input" on "Payment Page".
    * Fill "1111 1111 1111 1111" in "card number input" on "Payment Page".
    * Fill "111" in "CVC input" on "Payment Page".
    * Fill "11" in "expiration month input" on "Payment Page".
    * Fill "2039" in "expiration year input" on "Payment Page".
    When Click "pay and confirm" button on "Payment Page".
    Then Should see "order placed header" on "Notification Page".
    When Click "Continue" button on "Notification Page".
    And Close the advertisement if it appears.
    And Should see "logged in user message" on "Header".
    Then Check that "logged in user message" on "Header" contains "Gwen Stacy".
    When Click "Delete Account" button on "Header".
    And Should see "Account Deleted header" on "Notification Page".
    When Click "Continue" button on "Notification Page".
    And Close the advertisement if it appears.
    And Should see "Header" on "Main Page".

    Examples:
      | firstProduct       | secondProduct | firstProductPrice | firstProductQuantity | firstProductTotal | secondProductPrice | secondProductQuantity | secondProductTotal |
      | Blue Top           | Men Tshirt    | 500               | 1                    | 500               | 400                | 1                     | 400                |
      | Soft Stretch Jeans | Winter Top    | 799               | 1                    | 799               | 600                | 1                     | 600                |
