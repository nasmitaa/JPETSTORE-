import { selector } from "../support/selector";
describe('JPetStore Login', () => {
beforeEach(() => {
cy.visit("/");
});

it('Verify user logs in with valid credentials', () => {
cy.login(
Cypress.env("USERNAME"),
Cypress.env("PASSWORD")
);
cy.log("User logs in with valid credentials");
});

it('verify user logs in with invalid credentials', () => {
cy.xpath(selector.enter_store).click();
cy.xpath(selector.signin).click();
cy.get(selector.username_field).type('2060');
cy.get(selector.password_field).clear().type('hello');
cy.get(selector.login_button).click();
cy.get('body').should('contain.text', 'Please enter your username and password.');
cy.log('User cannot log in with invalid credentials');
});

it('verify user cannot log in with empty credentials', () => {
cy.xpath(selector.enter_store).click();
cy.xpath(selector.signin).click();
cy.get(selector.username_field).type(' ');
cy.get(selector.password_field).clear().type(' ');
cy.get(selector.login_button).click();
cy.get('body').should('contain.text', 'Please enter your username and password.');
cy.log('User cannot log in with empty credentials');
});

it('verify user cannot log in with empty username' , () => {
cy.xpath(selector.enter_store).click();
cy.xpath(selector.signin).click();
cy.get(selector.username_field).type(' ');
cy.get(selector.password_field).clear().type('hello123');
cy.get(selector.login_button).click();
cy.get('body').should('contain.text', 'Please enter your username and password.');
cy.log('User cannot log in with empty credentials');
}); 

it('verify user cannot log in with empty password' , () => {
cy.xpath(selector.enter_store).click();
cy.xpath(selector.signin).click();
cy.get(selector.username_field).type('2062');
cy.get(selector.password_field).clear().type(' ');
cy.get(selector.login_button).click();
cy.get('body').should('contain.text', 'Please enter your username and password.');
cy.log('User cannot log in with empty credentials');
}); 


});





     



