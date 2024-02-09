Feature: Sign up and delete account on Automation Exercise website
  As a user,
  I want to create an account and then delete it.

  @smoke
  Scenario Outline: Sign up and login and log out then delete account
    Given Navigate to Main Page.
    And Should see "Header" on "Main Page".
    When Click "Login" button on "Header".
    And Close the advertisement if it appears.
    When Fill "<userName>" in "signup name input" on "Login page".
    * Fill "<email>" in "signup email input" on "Login page".
    When Click "Signup" button on "Login page".
    And Should see "header" on "Account Creation Page".
    When Click "<gender>" button on "Account Creation Page".
    When Fill "<password>" in "password input" on "Account Creation Page".
    * Select "<day>" in "day Of birth" on "Account Creation Page".
    * Select "<month>" in "month Of birth" on "Account Creation Page".
    * Select "<year>" in "year Of birth" on "Account Creation Page".
    When Select the 'newsletter' checkbox on the 'Account Creation Page'.
    When Select the 'special offers' checkbox on the 'Account Creation Page'.
    * Fill "<firstName>" in "first name input" on "Account Creation Page".
    * Fill "<lastName>" in "last name input" on "Account Creation Page".
    * Fill "<company>" in "company input" on "Account Creation Page".
    * Fill "<firstAddress>" in "first address input" on "Account Creation Page".
    * Fill "<secondAddress>" in "second address input" on "Account Creation Page".
    * Select "<country>" in "country input" on "Account Creation Page".
    * Fill "<state>" in "state input" on "Account Creation Page".
    * Fill "<city>" in "city input" on "Account Creation Page".
    * Fill "<zipcode>" in "zipcode input" on "Account Creation Page".
    * Fill "<mobileNumber>" in "mobile number input" on "Account Creation Page".
    When Click "create account" button on "Account Creation Page".
    Then Should see "Account Created header" on "Notification Page".
    When Click "Continue" button on "Notification Page".
    And Close the advertisement if it appears.
    And Should see "logged in user message" on "Header".
    Then Check that "logged in user message" on "Header" contains "<userName>".
    When Click "Delete Account" button on "Header".
    And Should see "Account Deleted header" on "Notification Page".
    When Click "Continue" button on "Notification Page".
    And Close the advertisement if it appears.
    And Should see "Header" on "Main Page".

    Examples:
      | userName  | email      | gender | password | day | month    | year | firstName | lastName | company | firstAddress | secondAddress | country | state   | city    | zipcode | mobileNumber  |
      | Sam Frodo | 0@ring.com | male   | 12345    | 11  | November | 1954 | Samuel    | Frodo    | LOTR    | Test.str     | str.Test      | Israel  | Rehovot | Rehovot | 123456  | 972-8-9515195 |

