Feature: Add to cart from Recommended items
    As a user,
    I want to be able to add a recommended product into my cart.

Scenario: Add to cart from Recommended items
    Given I navigate to Main Page.
    Then I should see Main Page.
    When Scroll to bottom of page and verify "RECOMMENDED ITEMS" are visible.
    When click on "Add To Cart" on Recommended product.
    And click the "View Cart" button.
    Then Verify that product is displayed in cart page.