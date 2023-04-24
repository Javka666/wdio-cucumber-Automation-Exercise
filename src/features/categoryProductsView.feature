Feature: As a user I want to see different brands of products

  Scenario: View Category Products
    Given I navigate to Main Page.
    Then I should see main page.
    Then I should see Category bar.
    When I click "Women" button.
    And I click "Tops" button. 
    Then I Verify that category page is displayed and confirm text "WOMEN - TOPS PRODUCTS".
    When I click "Men" button.
    And I click "T-shirt" button.
    Then I Verify that I am navigated to that category page.