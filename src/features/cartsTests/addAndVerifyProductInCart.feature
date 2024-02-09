Feature: Shopping Cart Management

  As a user,
  I want to easily add and remove products from my shopping cart.
    
    @smoke @fast
  Scenario Outline: Add and Remove Products from the Cart
    Given Navigate to Main Page.
    And Should see "Header" on "Main Page".
    When Click "Products" button on "Header".
    And Close the advertisement if it appears.
    Then Check that I'm on the "Products" page.
    When Click "Add to cart" button to "<firstProduct>".
    And Click "Continue Shopping" button on "Cart Modal Window".
    * Click "Add to cart" button to "<secondProduct>".
    * Click "View Cart" button on "Cart Modal Window".
    Then Check that I'm on the "Cart" page.
    And Close the advertisement if it appears.
    Then Check if the "Cart Page" contains "<firstProduct>".
    And Check if the "Cart Page" contains "<secondProduct>".

    * the details for "<firstProduct>" should be:
      | Price               | Quantity               | Total Price         |
      | <firstProductPrice> | <firstProductQuantity> | <firstProductTotal> |

    * the details for "<secondProduct>" should be:
      | Price                | Quantity                | Total Price          |
      | <secondProductPrice> | <secondProductQuantity> | <secondProductTotal> |

    * Click "Delete Item" button to "<firstProduct>".
    * Click "Delete Item" button to "<secondProduct>".
    Then Should see "Empty Cart Container" on "Cart Page".

  Examples:
    | firstProduct       | secondProduct | firstProductPrice | firstProductQuantity | firstProductTotal | secondProductPrice | secondProductQuantity | secondProductTotal |
    | Blue Top           | Men Tshirt    | 500               | 1                    | 500               | 400                | 1                     | 400                |
    | Soft Stretch Jeans | Winter Top    | 799               | 1                    | 799               | 600                | 1                     | 600                |
    