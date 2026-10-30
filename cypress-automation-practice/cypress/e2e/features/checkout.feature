Feature: SauceDemo checkout
  As a logged-in shopper
  I want to complete checkout
  So that I can place an order

  Scenario: Complete checkout for one product
    Given I am on the SauceDemo login page
    And I log in with username "standard_user" and password "secret_sauce"
    When I add the "Sauce Labs Backpack" to the cart
    And I open the shopping cart
    And I start checkout
    And I enter checkout information "Test" "User" "12345"
    And I finish the order
    Then I should see the order confirmation
