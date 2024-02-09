Feature: Login and delete User with correct email and password
  As a user,
  I try to login with correct information and succeed.

    @smoke @fast
  Scenario Outline:login and delete user
    Given Navigate to Main Page.
    And Should see "Header" on "Main Page".
    When Click "Login" button on "Header".
    And Close the advertisement if it appears.
    When Fill "<email>" in "login email input" on "Login page".
    * Fill "<password>" in "login password input" on "Login page".
    When Click "login" button on "Login page".
    And Should see "logged in user message" on "Header".
    Then Check that "logged in user message" on "Header" contains "<userName>".

    Examples:
      | email           | userName     | password |
      | alexM@gmail.com | Alex Morales | 123      |
