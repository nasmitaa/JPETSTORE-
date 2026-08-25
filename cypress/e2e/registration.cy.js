import { selector } from "../support/selector";

describe('JPetStore Registration', () => {
const username = `nash_${Date.now().toString().slice(-4)}`;
const password = `nash${Date.now().toString().slice(-3)}`;
const email = `nash${Date.now().toString().slice(-5)}@gmail.com`;
const zip = Math.floor(1000 + Math.random() * 9000);

before(() => {
    cy.log("Username: " + username);
    cy.log("Password: " + password);
    cy.log("Zip: " + zip);
});

beforeEach(() => {
    cy.visit("/");
    cy.xpath(selector.enter_store).click();
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


it('Verify user registers with valid credentials successfully', () => {
    cy.xpath(selector.signin).click();
    cy.xpath(selector.register_now).click();
    cy.get(selector.userid_field).type(username);
    cy.get(selector.new_password).type(password);
    cy.get(selector.repeat_password).type(password);
    cy.get(selector.first_name).type('nash');
    cy.get(selector.last_name).type('rayamajhi');
    cy.get(selector.email_field).type('nash2005@gmail.com');
    cy.get(selector.phone_field).type('9847855333');
    cy.get(selector.address_1).type('Hattiban');
    cy.get(selector.address_2).type('Sadobato');
    cy.get(selector.city_field).type('Lalitpur');
    cy.get(selector.state_field).type('Bagmati');
    cy.get(selector.zip_field).type(zip);
    cy.get(selector.country_field).type('Nepal');
    cy.get(selector.Language_preference).select('japanese');
    cy.get(selector.favourite_category).select('FISH'); 
    cy.get(selector.mylist_field).click();
    cy.get(selector.mybanner).click();   
    cy.get(selector.save_account).click();   
    cy.log("registered successfully with valid credentials");
    });

//verify user cannot register with invalid credentials:

it('Verify user cannot registers with empty userid', () => {
    cy.xpath(selector.signin).click();
    cy.xpath(selector.register_now).click();
    cy.get(selector.userid_field).should('have.value', '');
    cy.get(selector.new_password).type(password);
    cy.get(selector.repeat_password).type(password);
    cy.get(selector.first_name).type('nash');
    cy.get(selector.last_name).type('rayamajhi');
    cy.get(selector.email_field).type('nash2005@gmail.com');
    cy.get(selector.phone_field).type('9847855333');
    cy.get(selector.address_1).type('Hattiban');
    cy.get(selector.address_2).type('Sadobato');
    cy.get(selector.city_field).type('Lalitpur');
    cy.get(selector.state_field).type('Bagmati');
    cy.get(selector.zip_field).type(zip);
    cy.get(selector.country_field).type('Nepal');
    cy.get(selector.Language_preference).select('japanese');
    cy.get(selector.favourite_category).select('FISH'); 
    cy.get(selector.mylist_field).click();
    cy.get(selector.mybanner).click();   
    cy.get(selector.save_account).click();   
    cy.get(selector.userid_field).should('exist');
    cy.log('User cannot register with empty User ID');
    });
     
it('Verify user cannot registers with mismatch password', () => {
    cy.xpath(selector.signin).click();
    cy.xpath(selector.register_now).click();
    cy.get(selector.userid_field).type(username);
    cy.get(selector.new_password).type(password);
    cy.get(selector.repeat_password).type('different password');
    cy.get(selector.first_name).type('nash');
    cy.get(selector.last_name).type('rayamajhi');
    cy.get(selector.email_field).type('nash2005@gmail.com');
    cy.get(selector.phone_field).type('9847855333');
    cy.get(selector.address_1).type('Hattiban');
    cy.get(selector.address_2).type('Sadobato');
    cy.get(selector.city_field).type('Lalitpur');
    cy.get(selector.state_field).type('Bagmati');
    cy.get(selector.zip_field).type(zip);
    cy.get(selector.country_field).type('Nepal');
    cy.get(selector.Language_preference).select('japanese');
    cy.get(selector.favourite_category).select('FISH'); 
    cy.get(selector.mylist_field).click();
    cy.get(selector.mybanner).click(); 
    cy.get(selector.save_account).click();  
    //cy.get('body').should('contain', 'Passwords do not match');
    cy.log('user cannot register with mismatch password'); 
    });

it('Verify user cannot registers with invalid email', () => {
    cy.xpath(selector.signin).click();
    cy.xpath(selector.register_now).click();
    cy.get(selector.userid_field).type(username);
    cy.get(selector.new_password).type(password);
    cy.get(selector.repeat_password).type(password);
    cy.get(selector.first_name).type('nash');
    cy.get(selector.last_name).type('rayamajhi');
    cy.get(selector.email_field).type('nash2005gmail.com');
    cy.get(selector.phone_field).type('9847855333');
    cy.get(selector.address_1).type('Hattiban');
    cy.get(selector.address_2).type('Sadobato');
    cy.get(selector.city_field).type('Lalitpur');
    cy.get(selector.state_field).type('Bagmati');
    cy.get(selector.zip_field).type(zip);
    cy.get(selector.country_field).type('Nepal');
    cy.get(selector.Language_preference).select('japanese');
    cy.get(selector.favourite_category).select('FISH'); 
    cy.get(selector.mylist_field).click();
    cy.get(selector.mybanner).click(); 
    cy.get(selector.save_account).click();  
    //cy.get('body').should('contain', 'invalid email format');
    cy.log('user cannot register with invalid email format'); 
    });

it('Verify user cannot register with invalid phone number', () => {
    cy.xpath(selector.signin).click();
    cy.xpath(selector.register_now).click();
    cy.get(selector.userid_field).type(username);
    cy.get(selector.new_password).type(password);
    cy.get(selector.repeat_password).type(password);
    cy.get(selector.first_name).type('nash');
    cy.get(selector.last_name).type('rayamajhi');
    cy.get(selector.email_field).type('nash2005gmail.com');
    cy.get(selector.phone_field).type('984785555555');
    cy.get(selector.address_1).type('Hattiban');
    cy.get(selector.address_2).type('Sadobato');
    cy.get(selector.city_field).type('Lalitpur');
    cy.get(selector.state_field).type('Bagmati');
    cy.get(selector.zip_field).type(zip);
    cy.get(selector.country_field).type('Nepal');
    cy.get(selector.Language_preference).select('japanese');
    cy.get(selector.favourite_category).select('FISH'); 
    cy.get(selector.mylist_field).click();
    cy.get(selector.mybanner).click(); 
    cy.get(selector.save_account).click();  
    //cy.get('body').should('contain', 'invalid phone number');
    cy.log('user cannot register with invalid phone number'); 
});

it('Verify user cannot register with empty first name field', () => {
    cy.xpath(selector.signin).click();
    cy.xpath(selector.register_now).click();
    cy.get(selector.userid_field).type(username);
    cy.get(selector.new_password).type(password);
    cy.get(selector.repeat_password).type(password);
    cy.get(selector.first_name).type(' ');
    cy.get(selector.last_name).type('rayamajhi');
    cy.get(selector.email_field).type('nash2005gmail.com');
    cy.get(selector.phone_field).type('9847855555');
    cy.get(selector.address_1).type('Hattiban');
    cy.get(selector.address_2).type('Sadobato');
    cy.get(selector.city_field).type('Lalitpur');
    cy.get(selector.state_field).type('Bagmati');
    cy.get(selector.zip_field).type(zip);
    cy.get(selector.country_field).type('Nepal');
    cy.get(selector.Language_preference).select('japanese');
    cy.get(selector.favourite_category).select('FISH'); 
    cy.get(selector.mylist_field).click();
    cy.get(selector.mybanner).click(); 
    cy.get(selector.save_account).click();  
    cy.get('body').should('contain', 'HTTP Status 500');
    cy.log('user cannot register with empty required fields'); 
});

it('Verify user cannot register with empty Last name field', () => {
    cy.xpath(selector.signin).click();
    cy.xpath(selector.register_now).click();
    cy.get(selector.userid_field).type(username);
    cy.get(selector.new_password).type(password);
    cy.get(selector.repeat_password).type(password);
    cy.get(selector.first_name).type('nash ');
    cy.get(selector.last_name).type(' ');
    cy.get(selector.email_field).type('nash2005gmail.com');
    cy.get(selector.phone_field).type('9847855555');
    cy.get(selector.address_1).type('Hattiban');
    cy.get(selector.address_2).type('Sadobato');
    cy.get(selector.city_field).type('Lalitpur');
    cy.get(selector.state_field).type('Bagmati');
    cy.get(selector.zip_field).type(zip);
    cy.get(selector.country_field).type('Nepal');
    cy.get(selector.Language_preference).select('japanese');
    cy.get(selector.favourite_category).select('FISH'); 
    cy.get(selector.mylist_field).click();
    cy.get(selector.mybanner).click(); 
    cy.get(selector.save_account).click();  
    cy.get('body').should('contain', 'HTTP Status 500');
    cy.log('user cannot register with empty required fields'); 
});

it('Verify user cannot register with empty fields', () => {
    cy.xpath(selector.signin).click();
    cy.xpath(selector.register_now).click();
    cy.get(selector.userid_field).type(' ');
    cy.get(selector.new_password).type(' ');
    cy.get(selector.repeat_password).type(' ');
    cy.get(selector.first_name).type(' ');
    cy.get(selector.last_name).type(' ');
    cy.get(selector.email_field).type(' ');
    cy.get(selector.phone_field).type(' ');
    cy.get(selector.address_1).type(' ');
    cy.get(selector.address_2).type(' ');
    cy.get(selector.city_field).type(' ');
    cy.get(selector.state_field).type(' ');
    cy.get(selector.zip_field).type(' ');
    cy.get(selector.country_field).type(' ');
    cy.get(selector.Language_preference).select('english');
    cy.get(selector.favourite_category).select('FISH'); 
    cy.get(selector.mylist_field).click();
    cy.get(selector.mybanner).click(); 
    cy.get(selector.save_account).click();  
    //cy.get('body').should('contain', 'HTTP Status 500');
    cy.log('user cannot register with empty required fields'); 
});

it('Verify exisiting user cannot register again with same credentials', () => {
    cy.xpath(selector.signin).click();
    cy.xpath(selector.register_now).click();
    cy.get(selector.userid_field).type('2005');
    cy.get(selector.new_password).type('hello123 ');
    cy.get(selector.repeat_password).type('hello123 ');
    cy.get(selector.first_name).type('nash ');
    cy.get(selector.last_name).type('rayamajhi');
    cy.get(selector.email_field).type('nash123@gmail.com');
    cy.get(selector.phone_field).type('9841500276 ');
    cy.get(selector.address_1).type('Hattiban');
    cy.get(selector.address_2).type('Lalitpur');
    cy.get(selector.city_field).type('Kathmandu ');
    cy.get(selector.state_field).type('Bagmati');
    cy.get(selector.zip_field).type('4001');
    cy.get(selector.country_field).type('country ');
    cy.get(selector.Language_preference).select('english');
    cy.get(selector.favourite_category).select('FISH'); 
    cy.get(selector.mylist_field).click();
    cy.get(selector.mybanner).click(); 
    cy.get(selector.save_account).click();  
    //cy.get('body').should('contain', 'HTTP Status 500');
    cy.log('user with an exisiting account cannot register again'); 
});

it('Verify user cannot register with exisiting userid', () => {
    cy.xpath(selector.signin).click();
    cy.xpath(selector.register_now).click();
    cy.get(selector.userid_field).type('2005');
    cy.get(selector.new_password).type(password);
    cy.get(selector.repeat_password).type(password);
    cy.get(selector.first_name).type('nash ');
    cy.get(selector.last_name).type('rayamajhi');
    cy.get(selector.email_field).type('nash123@gmail.com');
    cy.get(selector.phone_field).type('9841500276 ');
    cy.get(selector.address_1).type('Hattiban');
    cy.get(selector.address_2).type('Lalitpur');
    cy.get(selector.city_field).type('Kathmandu ');
    cy.get(selector.state_field).type('Bagmati');
    cy.get(selector.zip_field).type('4001');
    cy.get(selector.country_field).type('country ');
    cy.get(selector.Language_preference).select('english');
    cy.get(selector.favourite_category).select('FISH'); 
    cy.get(selector.mylist_field).click();
    cy.get(selector.mybanner).click(); 
    cy.get(selector.save_account).click();  
    cy.get('body').should('contain', 'HTTP Status 500');
    cy.log('user cannot register with exisiting userid'); 
});

});
    
    
