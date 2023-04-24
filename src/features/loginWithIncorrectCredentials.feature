Feature: Login user with incorrect email and password

  Scenario:login user with incorrect creds
    Given I navigate to Main Page.
    Then I should see main page.
    When I click on the Login button.
    Then "New User Signup!" is visible.
    When I try to login with incorrect email and password.
    Then I should see "Your email or password is incorrect!".





