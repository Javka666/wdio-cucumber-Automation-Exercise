@smoke
Feature: Login and delete User with correct email and password
  As a user,
  I want to login into my account in order to delete it.

  Background: Create An Account before this test.
    Given Navigate to Main Page.
    And Should see "Header" on "Main Page".
    When Click "Login" button on "Header".
    And Close the advertisement if it appears.
    When Fill "Lee Berg" in "signup name input" on "Login page".
    * Fill "Lee@berg.com" in "signup email input" on "Login page".
    When Click "Signup" button on "Login page".
    And Should see "header" on "Account Creation Page".
    When Click "male" button on "Account Creation Page".
    When Fill "123" in "password input" on "Account Creation Page".
    * Select "1" in "day Of birth" on "Account Creation Page".
    * Select "May" in "month Of birth" on "Account Creation Page".
    * Select "1985" in "year Of birth" on "Account Creation Page".
    When Select the 'newsletter' checkbox on the 'Account Creation Page'.
    When Select the 'special offers' checkbox on the 'Account Creation Page'.
    * Fill "Lee" in "first name input" on "Account Creation Page".
    * Fill "Berg" in "last name input" on "Account Creation Page".
    * Fill "GYM" in "company input" on "Account Creation Page".
    * Fill "test" in "first address input" on "Account Creation Page".
    * Fill "test" in "second address input" on "Account Creation Page".
    * Select "Singapore" in "country input" on "Account Creation Page".
    * Fill "Singapore" in "state input" on "Account Creation Page".
    * Fill "Singapore" in "city input" on "Account Creation Page".
    * Fill "409535" in "zipcode input" on "Account Creation Page".
    * Fill "64635158" in "mobile number input" on "Account Creation Page".
    When Click "create account" button on "Account Creation Page".
    Then Should see "Account Created header" on "Notification Page".
    When Click "Continue" button on "Notification Page".
    And Close the advertisement if it appears.
    And Should see "logged in user message" on "Header".
    Then Check that "logged in user message" on "Header" contains "Lee Berg".
    When Click "Logout" button on "Header".

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
    When Click "Delete Account" button on "Header".
    And Should see "Account Deleted header" on "Notification Page".
    When Click "Continue" button on "Notification Page".
    And Close the advertisement if it appears.
    And Should see "Header" on "Main Page".

    Examples:
      | email        | userName | password |
      | Lee@berg.com | Lee Berg | 123      |
