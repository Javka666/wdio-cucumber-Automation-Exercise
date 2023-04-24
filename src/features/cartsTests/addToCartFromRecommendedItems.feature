Feature: Add to cart from Recommended items

Scenario: Add to cart from Recommended items
    Given I navigate to Main Page.
    Then I should see main page.
    When Scroll to bottom of page and verify "RECOMMENDED ITEMS" are visible.
    When click on "Add To Cart" on Recommended product.
    And click the "View Cart" button.
    Then Verify that product is displayed in cart page.