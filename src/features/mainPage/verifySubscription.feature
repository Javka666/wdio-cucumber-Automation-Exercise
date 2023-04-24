Feature: Verify subscription in home page and cart page  
  
  Scenario: Verify subscription in home page and cart page
  Given I navigate to Main Page.
  Then I should see main page.
  When I scroll down to footer.
  Then verify text "SUBSCRIPTION". 
  When I enter email address in input and click arrow button.
  Then verify success message "You have been successfully subscribed!" is visible.
  When I click the "Cart" button.
  Then verify text "SUBSCRIPTION" on "Cart" page.
  When I enter email address in input and click arrow button on "Cart" page.
  Then verify success message on "Cart" page "You have been successfully subscribed!" is visible.