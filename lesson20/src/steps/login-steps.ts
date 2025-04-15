import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { RobotDreamsWorld } from '../worlds/robot-dreams.world';
import { DataTable } from '@cucumber/cucumber';

Given('I open the Qase.io login page', async function (this: RobotDreamsWorld) {
    await this.loginPage.goto();
});

When('I log in with:', async function (this: RobotDreamsWorld, table: DataTable) {
    const data = table.rowsHash();
    await this.loginPage.login(
        data.username,
        data.password 
    );
});

Then('I should see the user avatar', async function (this: RobotDreamsWorld) {
    await expect(this.loginPage.userAvatar).toBeVisible();
});

Then('I should see an error message {string}', async function (this: RobotDreamsWorld, errorMessage: string) {
    await this.loginPage.expectErrorMessage(errorMessage);
});

When('I click on the forgot password link', async function (this: RobotDreamsWorld) {
    await this.loginPage.clickForgotPassword();
});

Then('I should be redirected to the password reset page', async function (this: RobotDreamsWorld) {
    await expect(this.loginPage.forgotPageLabel).toBeVisible();
});

When('I reset the password with the email {string}', async function (this: RobotDreamsWorld, email: string) {
    await this.loginPage.resetPassword(email);
});

Then('I should see a success message {string}', async function (this: RobotDreamsWorld, successMessage: string) {
    await this.loginPage.expectSuccessMessage(successMessage);
});
