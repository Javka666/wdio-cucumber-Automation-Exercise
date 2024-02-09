Feature: Login user with incorrect email and password
  As a user,
  I try to login with incorrect information and fail.

  @smoke @fast
  Scenario Outline:login and delete user
    Given Navigate to Main Page.
    And Should see "Header" on "Main Page".
    When Click "Login" button on "Header".
    And Close the advertisement if it appears.
    When Fill "<email>" in "login email input" on "Login page".
    * Fill "<password>" in "login password input" on "Login page".
    When Click "login" button on "Login page".
    And Should see "incorrect credentials message" on "Login Page".
    Then Check that "incorrect credentials message" on "Login Page" contains "Your email or password is incorrect!".

    Examples:
      | email           | password |
      | WRONG@gmail.com | WRONG    |