Feature: Register User with existing email
  As a user,
  I try to sign up with an email address that is already been used.

    @smoke @fast
  Scenario Outline: Register User with existing email.
    Given Navigate to Main Page.
    And Should see "Header" on "Main Page".
    When Click "Login" button on "Header".
    And Close the advertisement if it appears.
    When Fill "<userName>" in "signup name input" on "Login page".
    * Fill "<email>" in "signup email input" on "Login page".
    When Click "Signup" button on "Login page".
    And Should see "existing user message" on "Login Page".
    Then Check that "existing user message" on "Login Page" contains "Email Address already exist!".

    Examples:
      | email           | userName     |
      | alexM@gmail.com | Alex Morales |
