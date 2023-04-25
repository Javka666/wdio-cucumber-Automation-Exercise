Feature: Verify Scroll Up using "Arrow" button and Scroll Down functionality
  As a user,
  I want to be able to scroll through the page down to bottom and vice versa using arrow button.

Scenario: Verify Scroll Up using "Arrow" button and Scroll Down functionality
  Given I navigate to Main Page.
  Then I should see Main Page.
  When I scroll down to bottom.
  Then verify text "SUBSCRIPTION". 
  When Click on arrow at bottom right side to move upward.
  Then Verify that page is scrolled up and "Full-Fledged practice website for Automation Engineers" text is visible on screen.
