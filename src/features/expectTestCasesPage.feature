Feature: I should see Test Cases page
    As a user,
    I want to see if the Test Cases page works properly.

Scenario: I should see Test Cases Page
  Given I navigate to Main Page.
  Then I should see Main Page.
  When I click on the Test Cases button.
  Then I should see "TEST CASES" header.