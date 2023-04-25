Feature: Login user with incorrect email and password
    As a user,
    I try to login with incorrect information and fail.


  Scenario:login user with incorrect credentials
    Given I navigate to Main Page.
    Then I should see Main Page.
    When I click on the Login button.
    Then "New User Signup!" is visible.
    When I try to login with incorrect email and password.
    Then I should see "Your email or password is incorrect!".





