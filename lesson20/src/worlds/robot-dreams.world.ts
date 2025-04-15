import { IWorldOptions, setWorldConstructor, World, Before } from '@cucumber/cucumber';
import { BrowserContext, Page, chromium } from 'playwright';
import { LoginPage } from '../pages/login-page';

 export class RobotDreamsWorld extends World {
     public context!: BrowserContext;
     public page!: Page;
     private _loginPage!: LoginPage;
 
     public constructor(options: IWorldOptions) {
         super(options);
     }
 
     public get loginPage(): LoginPage {
         if (!this.page) throw new Error('Playwright page not initialized!');
         if (!this._loginPage) {
             this._loginPage = new LoginPage(this.page);
         }
         return this._loginPage;
     }
 }
 
 Before(async function (this: RobotDreamsWorld) {
     const browser = await chromium.launch({ headless: false });
     this.context = await browser.newContext();
     this.page = await this.context.newPage();
 });
 
 setWorldConstructor(RobotDreamsWorld);