Feature: Login and delete User with correct email and password
    As a user,
    I want to login into my account in order to delete it.

  Scenario:login and delete user
    Given I navigate to Main Page.
    Then I should see Main Page.
    When I click on the Login button.
    When I login with correct credentials.
    Then "Logged in as username" is visible.
    When I click on "Delete Account" button.
    Then I should see "ACCOUNT DELETED!" is visible.