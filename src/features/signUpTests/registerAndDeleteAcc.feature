Feature: Sign up and delete account on Automation Exercise website
  As a user,
  I want to create an account and then delete it.

  Scenario: Sign up and delete account
    Given I navigate to Main Page.
    Then I should see Main Page.
    When I click on the Login button.
    Then "New User Signup!" is visible.
    When I enter name and email address.
    And click the "Signup" button.
    Then "ENTER ACCOUNT INFORMATION" is visible.
    When I fill in the account details.
    And click the "Create Account" button.
    When I go to Main Page.
    Then "Logged in as username" is visible.
    When I click on "Delete Account" button.
    Then I should see "ACCOUNT DELETED!" is visible.

