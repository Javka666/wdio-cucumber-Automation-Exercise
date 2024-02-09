Feature: View Category Products
  As a user,
  I want to see if the products filter works correctly.

    @smoke @fast
  Scenario Outline: View Category Products
    Given Navigate to Main Page.
    And Should see "Header" on "Main Page".
    And Scroll to "category header" on "Main Page".
    Then Check that "category header" on "Main Page" contains "CATEGORY".
    When Click on "<firstCategory>" "category".
    When Scroll to "<firstCategory>" category and choose the "<firstCategoryProduct>" subcategory.
    And Close the advertisement if it appears.
    Then Check that "header" on "Main Page" contains "<firstCategory> - <firstCategoryProduct> PRODUCTS".
    When Click on "<secondCategory>" "category".
    And Scroll to "<secondCategory>" category and choose the "<secondCategoryProduct>" subcategory.
    And Close the advertisement if it appears.
    Then Check that "header" on "Main Page" contains "<secondCategory> - <secondCategoryProduct> PRODUCTS".
    Examples:
      | firstCategory | firstCategoryProduct | secondCategory | secondCategoryProduct |
      | Women         | Tops                 | MEN            | JEANS                 |
      | KIDS          | DRESS                | WOMEN          | DRESS                 |
      | MEN           | TSHIRTS              | KIDS           | TOPS & SHIRTS         |
