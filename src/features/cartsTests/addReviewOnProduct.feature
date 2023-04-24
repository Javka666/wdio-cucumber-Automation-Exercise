Feature: Search Products and Verify Cart Before Login

Scenario: Search Products and Verify Cart Before Login
    Given I navigate to Main Page.
    Then I should see main page.
    When I click "Products" button.
    Then I am on the All Products page.
    When I click the "View Product" button of the first product.
    Then I should be on the product detail page.
    And I verify "Write Your Review" is visible. 
    When I enter name, email and review.
    And Click "Submit" button.
    Then I should see success message "Thank you for your review.".
