Feature: Search Products and see if the products are still in cart after login.
  As a user,
  I want the chosen products to be displayed in my profile cart even if I didn't login when I was choosing them.

 Scenario: Search Products and Verify Cart After Login
   Given I navigate to Main Page.
   Then I should see Main Page.
   When I click "Products" button.
   Then I am on the All Products page.
   When Enter product name in search input and click search button.
   Then Verify "SEARCHED PRODUCT" is visible.
   Then Verify the product related to search is visible.
   When Add this product to cart.
   When Click "Cart" button and verify that product is visible in cart.
   And Click "SignupOrLogin" button and submit login details.
   When I click the "Cart" button.
   Then Verify that this product is visible in cart after login as well.