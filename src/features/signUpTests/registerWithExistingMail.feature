Feature: Register User with existing email

  Scenario: Signup and delete account
    Given I navigate to Main Page.
    Then I should see main page.
    When I click on the Login button.
    Then "New User Signup!" is visible.
    When I enter existing name and email address and click the "Signup" button.
    Then I should see "Email Address already exist!".
