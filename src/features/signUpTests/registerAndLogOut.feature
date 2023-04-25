Feature: Sign up and log out account on Automation Exercise website
    As a user,
    I want to create an account and log out.

  Scenario: Sign up and login and log out then delete account
    Given I navigate to Main Page.
    Then I should see Main Page.
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

