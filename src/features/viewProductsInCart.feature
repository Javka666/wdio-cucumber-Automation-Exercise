Feature: View product details
  As a user,
  I want to be able to view the details of a product
  So that I can learn more about the product

  Scenario: View product details
    Given I navigate to Main Page.
    Then I should see Main Page.
    When I click "Products" button.
    Then I am on the All Products page.
    And I should see the list of products.
    When I click the "View Product" button of the first product.
    Then I should be on the product details page.
    And I should see the product details.
    Then Increase quantity to 4.
    When I click "Add to Cart" button.
    Then click the "View Cart" button.
    Then Verify that product is displayed in cart page with exact quantity. 


