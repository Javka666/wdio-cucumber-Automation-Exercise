Feature: Search Products and see if the products are still in cart after login.
  As a user,
  I want the chosen products to be displayed in my profile cart even if I didn't login when I was choosing them.

  @smoke @fast
  Scenario Outline: Search Products and Verify Cart After Login

    Given Navigate to Main Page.

    And Should see "Header" on "Main Page".
    When Click "Products" button on "Header".
    And Close the advertisement if it appears.
    Then Check that I'm on the "Products" page.
    When Fill "<product>" in "search input" on "Products Page".
    When Click "search" button on "Products Page".
    When Click "Add to cart" button to "<product>".

    And Click "Continue Shopping" button on "Cart Modal Window".

    When Click "Login" button on "Header".
    And Close the advertisement if it appears.

    When Fill "<email>" in "login email input" on "Login page".
    * Fill "<password>" in "login password input" on "Login page".

    When Click "login" button on "Login page".

    When Click "Cart" button on "Header".

    Then Check if the "Cart Page" contains "<product>".

    * the details for "<product>" should be:
      | Price          | Quantity          | Total Price    |
      | <productPrice> | <productQuantity> | <productTotal> |


    * Click "Delete Item" button to "<product>".
    Then Should see "Empty Cart Container" on "Cart Page".


    Examples:
      | email           | password | product         | productPrice | productQuantity | productTotal |
      | alexM@gmail.com | 123      | Fancy Green Top | 700          | 1               | 700          |