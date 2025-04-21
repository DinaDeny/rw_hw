Feature: Product search

    Scenario: Search results display relevant products
        Given User open the Rozetka homepage
        When  User search for "ноутбук"
        Then The list of results contains the word "ноутбук" in the product titles
        When User add the first product from search results to the cart
        Then The product is displayed in the cart and has title "ноутбук"