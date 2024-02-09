Feature: Verify Scroll Up using "Arrow" button
  As a user,
  I want to be able to scroll through the page down to bottom and vice versa using arrow button.

  @smoke @fast
  Scenario: Verify Scroll Up functionality
    Given Navigate to Main Page.
    And Should see "Header" on "Main Page".
    And Scroll to "subscription header" to "Footer".
    Then Check that "subscription header" on "Footer" contains "SUBSCRIPTION".
    When Click "scroll up" button on "Footer".
    And Should see "logo" on "Header".