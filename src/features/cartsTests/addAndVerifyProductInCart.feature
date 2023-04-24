Feature: Add products to cart and verify cart contents

  Scenario: Add products to cart and verify cart contents
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
    When click "X" button to delete both products.
    Then I should see "Cart is empty!".















  