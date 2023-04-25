Feature: Verify address details in checkout page
    As a user,
    I want create an account,
    add products to my cart,
    check the order details and place an order.

Scenario: Verify address details in checkout page
    Given I navigate to Main Page.
    Then I should see Main Page.
    When I click on the Login button.
    Then "New User Signup!" is visible.
    When I enter name and email address.
    Then click the "Signup" button.
    Then "ENTER ACCOUNT INFORMATION" is visible.
    When I fill in the account details.
    And click the "Create Account" button.
    When I go to Main Page.
    Then "Logged in as username" is visible.
    When I hover over the first product and click "Add to cart".
    And I click the "Continue Shopping" button.
    When I hover over the second product and click "Add to cart".
    And click the "View Cart" button.
    Then I am on the Cart page.
    And I check if the cart contains both products.
    And I verify the prices, quantities, and total price is correct.
    When I click on "Proceed To Checkout" button.
    Then I verify that the delivery address is same address filled at the time of account registration.
    And I verify that the billing address is same address filled at the time of account registration.
    # When Click "Delete Account" button.
    # Then verify "ACCOUNT DELETED!".