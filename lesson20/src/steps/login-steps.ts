import { Given, When, Then } from '@cucumber/cucumber';
 import { DataTable } from '@cucumber/cucumber';
 import { expect } from '@playwright/test';
import { RobotDreamsWorld } from '../worlds/robot-dreams.world';
 
 Given('I open the Qase.io login page', async function (this: RobotDreamsWorld) {
     await this.loginPage.goto();
 });
 
 When('I log in with:', async function (this: RobotDreamsWorld, table: DataTable) {
     const data = table.rowsHash();
     await this.loginPage.login(
         data.name,
         data.email
     );
 });
 

 Then('I should see the user avatar', async function (this: RobotDreamsWorld, name: string) {
     await expect(this.loginPage.userAvatar).toBeVisible();
 });
 