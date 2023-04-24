Feature: Proceed to checkout and place order

  Scenario: Proceed to checkout and place order
    Given I navigate to Main Page.
    Then I should see main page.
    When I click "Products" button.
    Then I am on the All Products page.
    When I hover over the first product and click "Add to cart".
    And I click the "Continue Shopping" button.
    When I hover over the second product and click "Add to cart".
    And click the "View Cart" button.
    Then I am on the Cart page.
    And check the cart contains both products.
    And verify the prices, quantities, and total price are correct.
    When I click on "Proceed To Checkout" button.
    Then I should see Checkout pop-up alert.
    When I click "RegisterOrLogin" button.
    Then I should see sign-up page.
    And I enter name and email address.
    And click "Signup" button.
    Then I should see "ENTER ACCOUNT INFORMATION".
    When I fill all account details.
    And click "Create Account" button.
    When I back to Main Page.
    Then I should see "Logged in as username".
    Then I click the "Cart" button.
    When I click "Proceed To Checkout" button.
    Then verify Address Details and Review Your Order.
    Then enter description in comment text area and click "Place Order".
    And enter payment details: Name on Card, Card Number, CVC, Expiration date.
    When click "Pay and Confirm Order" button.
    Then verify success message "Your order has been placed successfully!".
     When Click "Delete Account" button.
     Then verify "ACCOUNT DELETED!".