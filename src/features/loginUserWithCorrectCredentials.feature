Feature: Login and delete User with correct email and password
  As a user,
  I try to login with correct information and succeed.

  Scenario:login User with correct email and password
    Given I navigate to Main Page.
    Then I should see Main Page.
    When I click on the Login button.
    When I login with correct email and password.
    Then "Logged in as username" is visible.


















