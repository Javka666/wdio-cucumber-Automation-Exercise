Feature: View Product and Leave Review
  As a user,
  I want to be able to leave review for a product successfully.


    @smoke @fast
  Scenario Outline: View Product and Leave Review
    Given Navigate to Main Page.
    And Should see "Header" on "Main Page".
    When Click "Products" button on "Header".
    And Close the advertisement if it appears.
    Then Check that I'm on the "Products" page.
    When Click "View Product" button to "<product>".
    And Close the advertisement if it appears.
    Then Check if the "Product details page" contains "<product>".
    And Should see "review header" on "Product details page".
    When Fill "<name>" in "review name input" on "Product details page".
    * Fill "<email>" in "review email input" on "Product details page".
    * Fill "<review>" in "review input" on "Product details page".
    When Click "review submit" button on "Product details page".
    And Should see "success message" on "Product details page".
    Then Check that "success message" on "Product details page" contains "Thank you for your review.".

    Examples:
      | product                            | name  | email        | review  |
      | Blue Top                           | Alex  | al@alex.com  | cool    |
      | Cotton Silk Hand Block Print Saree | Helga | hel@hell.com | amazing |

