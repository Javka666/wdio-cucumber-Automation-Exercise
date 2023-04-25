Feature: Verify Scroll Up and Scroll Down functionality
  As a user,
  I want to be able to scroll through the page down to bottom and vice versa.

Scenario: Verify Scroll Up and Scroll Down functionality
  Given I navigate to Main Page.
  Then I should see Main Page.
  When I scroll down to bottom.
  Then verify text "SUBSCRIPTION". 
  When I scroll up to header.
  Then Verify that page is scrolled up and "Full-Fledged practice website for Automation Engineers" text is visible on screen.