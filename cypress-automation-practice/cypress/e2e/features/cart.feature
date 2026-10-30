Feature: SauceDemo shopping cart
  As a logged-in shopper
  I want to add a product to my cart
  So that I can review it before checkout

  Background:
    Given I am on the SauceDemo login page
    And I log in with username "standard_user" and password "secret_sauce"

  Scenario: Add a backpack to the cart
    When I add the "Sauce Labs Backpack" to the cart
    Then the cart badge should show "1"
    When I open the shopping cart
    Then I should see "Sauce Labs Backpack" in the cart
