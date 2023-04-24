Feature: Login and delete User with correct email and password

  Scenario:login and delete user
    Given I navigate to Main Page.
    Then I should see main page.
    When I click on the Login button.
    When I login with correct email and password.
    Then "Logged in as username" is visible.
    When I click on "Delete Account" button.
    Then I should see "ACCOUNT DELETED!" is visible.


















