Feature: SauceDemo login
  As a shopper
  I want to sign in to SauceDemo
  So that I can view products

  Background:
    Given I am on the SauceDemo login page

  Scenario: Successful login with valid credentials
    When I log in with username "standard_user" and password "secret_sauce"
    Then I should see the products page

  Scenario: Invalid login shows an error
    When I log in with username "invalid_user" and password "wrong_password"
    Then I should see a login error
