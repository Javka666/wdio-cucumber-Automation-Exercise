Feature: View Product and Leave Review
    As a user,
    I want to be able to leave review for a product successfully.

Scenario: View Product and Leave Review
    Given I navigate to Main Page.
    Then I should see Main Page.
    When I click "Products" button.
    Then I am on the All Products page.
    When I click the "View Product" button of the first product.
    Then I should be on the product details page.
    And I verify "Write Your Review" is visible. 
    When I enter name, email and review.
    And click "Submit" button.
    Then I should see success message "Thank you for your review.".
