import { selector } from "../support/selector";

describe('JPetStore Add to Cart', () => {

  beforeEach(() => {
    cy.visit("/");
    cy.login(
        Cypress.env("USERNAME"),
        Cypress.env("PASSWORD")
    );
});

    afterEach(function(){
        if(this.currentTest.state ==="failed"){
            cy.log("FAILED:" + this.currentTest.title)
        }else{
            cy.log("PASSED:" + this.currentTest.title)
        }
    })

    after(() => {
        cy.log("All test finished")

}) 
 
    it('Verify user adds product successfully to cart', () => {
        cy.xpath(selector.category_fish).click()//selects a catgory(here fish)
        cy.xpath(selector.product_id).click()//selects a product it
        cy.xpath(selector.add_to_cart).click()//clicks add to cart
        cy.get(selector.update_cart).click()//clicks update cart
        cy.log("Product added successfully to cart")     
        });

    it('Verify user adds same product multiple times to the cart', () => {
        cy.xpath(selector.category_fish).click()//selects a catgory(here fish)
        cy.xpath(selector.product_id).click()//selects a product it    
        cy.xpath(selector.add_to_cart).first().click()//clicks add to cart 
        cy.get(selector.update_cart).click()//clicks update cart 
        cy.xpath(selector.signin).click()//redirects to main page 
        cy.xpath(selector.category_fish).click()//selects a catgory(here fish)again
        cy.xpath(selector.product_id).click()//selects a product id  
        cy.xpath(selector.add_to_cart).click()//clicks add to cart 
        cy.get(selector.update_cart).click()//clicks update cart     
        cy.log("Product added successfully to cart")   
        });

    it('Verify user adds product of different category to cart successfully',() =>{
        cy.xpath(selector.category_fish).click()//selects a catgory(here fish)
        cy.xpath(selector.product_id).click()//selects a product id   
        cy.xpath(selector.add_to_cart).click()//clicks add to cart 
        cy.get(selector.update_cart).click()//clicks update cart 
        cy.xpath(selector.signin).click()//redirects to main page
        cy.xpath(selector.category_dog).click()//selects a different category
        cy.xpath(selector.product_id).click()//selects a product id  
        cy.xpath(selector.add_to_cart).click()//clicks add to cart 
        cy.get(selector.update_cart).click()//clicks update cart
        cy.log("Product from different category added successfully from cart") 
        });

    it('Verify the user can remove product from cart successfully',() =>{
        cy.xpath(selector.category_fish).click()//selects a catgory(here fish)
        cy.xpath(selector.product_id).click()//selects a product id  
        cy.xpath(selector.add_to_cart).click()//clicks add to cart 
        cy.get(selector.update_cart).click()//clicks update cart 
        cy.xpath(selector.remove_from_cart).click()
        cy.log("Product removed successfully from cart")
        });
    
    it('Verify the user cannot add a out of stock product to the cart',() =>{
        cy.xpath(selector.category_fish).click()//selects a catgory(here fish)
        cy.xpath(selector.product_id).click()//selects a product id
        cy.xpath(selector.add_to_cart).click()//clicks add to cart    
        cy.contains('false').should('be.visible');      
        cy.get(selector.update_cart).click()//clicks update cart 
        cy.log('Expected: Out-of-stock product should NOT be added to the cart.');
        cy.log('Actual: Product was added to the cart.');
        cy.log('TEST FAILED: JPetStore allows an out-of-stock product to be added to the cart.');        
        });
        
    it('Verify the user does not accept negative quantity of a product',() =>{
        cy.xpath(selector.category_fish).click()//selects a catgory(here fish)
        cy.xpath(selector.product_id).click()//selects a product id
        cy.xpath(selector.add_to_cart).click()//clicks add to cart 
        cy.get(selector.quantity_field).clear().type(-3)       
        cy.get(selector.update_cart).click()//clicks update cart 
        cy.log('Expected: cart does not accept negative quantity of product');
        cy.log('Actual: Product was removed from the cart.');
        cy.log('JPetStore store failed to provide expected result ');        
        });       
});