Feature: Verify Scroll Up using "Arrow" button and Scroll Down functionality

Scenario: Verify Scroll Up using "Arrow" button and Scroll Down functionality
  Given I navigate to Main Page.
  Then I should see main page.
  When I scroll down to bottom.
  Then verify text "SUBSCRIPTION". 
  When Click on arrow at bottom right side to move upward.
  Then Verify that page is scrolled up and "Full-Fledged practice website for Automation Engineers" text is visible on screen.
