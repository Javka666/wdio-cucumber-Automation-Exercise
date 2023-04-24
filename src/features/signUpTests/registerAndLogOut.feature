Feature: Signup and logout account on Automation Exercise website

  Scenario: Signup and login and logout then delete account
    Given I navigate to Main Page.
    Then I should see main page.
    When I click on the Login button.
    Then "New User Signup!" is visible.
    When I enter name and email address.
    Then click the "Signup" button.
    Then "ENTER ACCOUNT INFORMATION" is visible.
    When I fill in the account details.
    And click the "Create Account" button.
    When I go to Main Page.
    Then "Logged in as username" is visible.
    When I click the "Logout" button.

