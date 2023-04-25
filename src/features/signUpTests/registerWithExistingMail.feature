Feature: Register User with existing email
    As a user,
    I try to sign up with an email address that is already been used.

  Scenario: Sign up and delete account
    Given I navigate to Main Page.
    Then I should see Main Page.
    When I click on the Login button.
    Then "New User Signup!" is visible.
    When I enter existing name and email address and click the "Signup" button.
    Then I should see "Email Address already exist!".
