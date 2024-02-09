Feature: View & Cart Brand Products
  As a user,
  I want to see if brands filter works correctly.

    @smoke @fast
  Scenario Outline: View & Cart Brand Products
    Given Navigate to Main Page.
    And Should see "Header" on "Main Page".
    When Click "Products" button on "Header".

    And Close the advertisement if it appears.

    Then Check that I'm on the "Products" page.
    And Scroll to "brands header" on "Main Page".
    Then Check that "brands header" on "Main Page" contains "BRANDS".
    When Click on "<firstBrandName>" "brand".

    And Close the advertisement if it appears.

    Then Check that "header" on "Main Page" contains "<firstBrandName>".
    When Click on "<secondBrandName>" "brand".

    And Close the advertisement if it appears.

    Then Check that "header" on "Main Page" contains "<secondBrandName>".
    Examples:
      | firstBrandName     | secondBrandName |
      | BIBA               | KOOKIE KIDS     |
      | MAST & HARBOUR     | BIBA            |
      | BABYHUG            | H&M             |
      | ALLEN SOLLY JUNIOR | BABYHUG         |
