Feature: Login and delete User with correct email and password

  Scenario:login User with correct email and password
    Given I navigate to Main Page.
    Then I should see main page.
    When I click on the Login button.
    When I login with correct email and password.
    Then "Logged in as username" is visible.


















