Feature: View product details
  As a user,
  I want to be able to view the details of a product
  So that I can learn more about the product

  Scenario Outline: View product details and increase quantity on product page
    Given Navigate to Main Page.
    And Should see "Header" on "Main Page".
    When Click "Products" button on "Header".
    And Close the advertisement if it appears.
    Then Check that I'm on the "Products" page.
    When Click "View Product" button to "<product>".
    And Close the advertisement if it appears.
    Then Check if the "Product details page" contains "<product>".
    When Fill "<quantity>" in "quantity input" on "Product details page".
    When Click "Add to Cart" button on "Product details page".
    * Click "View Cart" button on "Cart Modal Window".
    Then Check if the "Cart Page" contains "<product>".
    * the details for "<product>" should be:
      | Price       | Quantity       | Total Price      |
      | <cartPrice> | <cartQuantity> | <cartTotalPrice> |

    Examples:
      | product            | quantity | cartPrice | cartQuantity | cartTotalPrice |
      | Blue Top           | 5        | 500       | 5            | 2500           |
      | Soft Stretch Jeans | 10       | 799       | 10           | 7990           |
