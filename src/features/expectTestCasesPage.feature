Feature: I should see Test Cases page
  As a user,
  I want to see if the Test Cases page works properly.

    @smoke @fast
  Scenario: I should see Test Cases Page
    Given Navigate to Main Page.
    And Should see "Header" on "Main Page".
    When Click "Test Cases" button on "Header".
    And Close the advertisement if it appears.
    And Should see "header" on "Test Cases Page".
    Then Check that "header" on "Test Cases Page" contains "TEST CASES".