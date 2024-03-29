Feature: Verify Scroll Up functionality and Scroll Down functionality
  As a user,
  I want to be able to scroll through the page down to bottom and vice versa.

  Scenario: Verify Scroll Up and Scroll Down functionality
    Given Navigate to Main Page.
    And Should see "Header" on "Main Page".
    And Scroll to "subscription header" to "Footer".
    Then Check that "subscription header" on "Footer" contains "SUBSCRIPTION".
    And Scroll to "logo" on "Header".
    And Should see "logo" on "Header".