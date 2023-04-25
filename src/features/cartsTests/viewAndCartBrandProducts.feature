 Feature: View & Cart Brand Products
   As a user,
   I want to see if brands filter works correctly.

  Scenario: View & Cart Brand Products
    Given I navigate to Main Page.
    Then I should see Main Page.
    When I click "Products" button.
    Then I am on the All Products page.
    Then I verify that Brands are visible on the left side bar.
    When I Click on "BIBA" brand name.
    Then Verify that user is navigated to brand page and brand products are displayed.
    When I click on "POLO" brand link.
    Then Verify that I am navigated to that brand page and can see products.