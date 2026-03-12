// Transformar o gherkin em método/ação

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import home_page from "../pages/home_page";
import login_page from "../pages/login_page";

const email = 'cezar@cezar.com';
const password = '123456';

Given("I am on login screen", () => {
    home_page.accessLogin();
});

Given("I fill e-mail", () => {
    login_page.fillEmail(email);
});

Given("I fill my credentials", () => {
    login_page.fillEmail(email);
    login_page.fillPassword(password);
});

When("I click on Login", () => {
    login_page.btnLogin();
});

Then("I see message {string}", (message) => {
    login_page.checkErrorMessage(message);
});

Then("I see success message", () => {
    login_page.checkSuccessMessage(email);
});