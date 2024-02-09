Feature: Add to cart from Recommended items
  As a user,
  I want to be able to add a recommended product into my cart.

    @smoke @fast
  Scenario Outline: Add to cart from Recommended items
    Given Navigate to Main Page.
    Then Should see "Header" on "Main Page".
    And Scroll to "recommended items header" on "Main Page".
    Then Check that "recommended items header" on "Main Page" contains "RECOMMENDED ITEMS".
    When Click "Add To Cart" button to "<product>" on Recommended items carousel.
    * Click "View Cart" button on "Cart Modal Window".
    Then Check if the "Cart Page" contains "<product>".
    And Click "Home" button on "Header".
    Then Should see "Header" on "Main Page".

    Examples:
      | product       |
      | Blue Top      |
      | Stylish Dress |
      | Men Tshirt    |
      | Winter Top    |




