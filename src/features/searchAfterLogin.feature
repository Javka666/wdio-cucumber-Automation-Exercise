Feature: Search Products and Verify Cart After Login

 Scenario: Search Products and Verify Cart After Login
   Given I navigate to Main Page.
   Then I should see main page.
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