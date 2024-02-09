    @smoke @fast
Feature: Verify subscription on home page and cart page
  As a user,
  I want to see if subscription function works correctly.
  
  Scenario: Verify subscription on main page 
    Given Navigate to Main Page.
    Then Should see "Header" on "Main Page".
    When Scroll to "subscription header" to "Footer".
    Then Check that "subscription header" on "Footer" contains "SUBSCRIPTION".
    When Fill "alex@email.com" in "subscription email input" on "Footer".
    And Click "subscribe" button on "Footer".
    Then Should see "success subscribe message" on "Footer".
    And Check that "success subscribe message" on "Footer" contains "You have been successfully subscribed!".


  Scenario: Verify subscription on Cart page 
    Given Navigate to Main Page.
    And Should see "Header" on "Main Page".
    When Click "Cart" button on "Header".
    And Close the advertisement if it appears.
    Then Check that I'm on the "Cart" page.
    When Scroll to "subscription header" to "Footer".
    Then Check that "subscription header" on "Footer" contains "SUBSCRIPTION".
    When Fill "alex@email.com" in "subscription email input" on "Footer".
    And Click "subscribe" button on "Footer".
    Then Should see "success subscribe message" on "Footer".
    And Check that "success subscribe message" on "Footer" contains "You have been successfully subscribed!".
