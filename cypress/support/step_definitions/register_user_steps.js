// Transformar o gherkin em método/ação

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import home_page from "../pages/home_page";
import register_user_page from "../pages/register_user_page";

const name = 'Cezar';
const email = 'cezar@cezar.com';
const invalidPassword = 123;
const password = 123456;

Given("I am on register screen", () => {
    home_page.accessRegister();
});

Given("I fill name", () => {
    register_user_page.fillName(name);
});

Given("I fill email {string}", () => {
    register_user_page.fillEmail(email);
});

Given("I fill invalid password", () => {
    register_user_page.fillPassword(invalidPassword);
});

Given("I fill password", () => {
    register_user_page.fillPassword(password);
});

Given("I fill my datas of register", () => {
    register_user_page.fillName(name);
    register_user_page.fillEmail(email);
    register_user_page.fillPassword(password);
});

When("I click on Register", () => {
    register_user_page.btnRegister();
});

Then("I see message {string} on register", (message) => {
    register_user_page.checkErrorMessage(message);
});

Then("I see message success message on register", () => {
    register_user_page.checkSuccessMessage(name);
});