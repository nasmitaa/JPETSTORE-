import { selector } from "../support/selector";

describe('JPetStore Checkout Feature', () => {

beforeEach(() => {
 cy.visit("/");
 cy.login(
    Cypress.env("USERNAME"),
    Cypress.env("PASSWORD")
);
cy.xpath(selector.category_fish).click(); // Select Fish category
cy.xpath(selector.product_id).click(); // Select product
cy.xpath(selector.add_to_cart).click(); // Add product to cart
cy.get(selector.update_cart).click(); // Update cart
cy.log("Product added successfully to cart");
cy.get(selector.cart_icon).click();
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

it('Verify user can successfully checkout with valid credentials', () => {
cy.xpath(selector.proceed_to_checkout).click();
cy.get(selector.continue_button).click();
cy.xpath(selector.confirm_button).click();
cy.get('body').should('contain', 'Thank you, your order has been submitted.');
cy.log("User successfully checksout with valid credentials");
});

it('verify user cannot checkout with empty details', () => {
cy.xpath(selector.proceed_to_checkout).click();
cy.get(selector.card_type).select("Visa");
cy.get(selector.card_number).clear().type(" ");
cy.get(selector.expiry_date).clear().type(" ");
cy.get(selector.Firstname_bill).clear().type(" ");
cy.get(selector.Lastname_bill).clear().type(" ");
cy.get(selector.Address1_bill).clear().type(" ");
cy.get(selector.Address2_bill).clear().type(" ");
cy.get(selector.city_bill).clear().type(" ");
cy.get(selector.state_bill).clear().type(" ");
cy.get(selector.zip_bill).clear().type(" ");
cy.get(selector.country_bill).clear().type(" ");
cy.get(selector.continue_button).click();
cy.xpath(selector.confirm_button).click();
cy.get('body').should('contain', 'HTTP Status 500');
cy.log('User cannot checkout with empty fields');    
});

it('Verify user cannot checkout with empty cart', () => {
  // Remove product if it exists
cy.contains('Remove').then(($remove) => {
    if ($remove.length > 0) {
      cy.wrap($remove).click();
    }
});
cy.contains('Your cart is empty.').should('be.visible');
cy.log('User cannot checkout with empty cart');
});


it('Verify user cannot checkout without login', () => {
cy.xpath(selector.signout_button).click();
cy.get(selector.cart_icon).click();
cy.contains('Your cart is empty').should('be.visible');
cy.log('User cannot checkout without login');
});

});


