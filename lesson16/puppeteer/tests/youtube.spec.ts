import { expect } from 'chai';
import puppeteer, { Browser, BrowserContext, Page, Target } from 'puppeteer';

/*function delay(time:number):Promise<void> {
    return new Promise(function(resolve) {
        setTimeout(resolve, time);
    });
}*/
describe('Puppeteer YouTube tests', () => {
    let browser: Browser;
    let context: BrowserContext;
    let page: Page;

    before(async () => {
        browser = await puppeteer.launch({ headless: false, defaultViewport: { width: 1200, height: 800 } });
    });

    beforeEach(async () => {
        context = await browser.createBrowserContext();
        page = await context.newPage();
        await page.goto('https://www.youtube.com/?hl=en', { waitUntil: 'domcontentloaded' });
    });

    afterEach(async () => {
        if (page) await page.close();
        if (context) await context.close();
    });

    after(async () => {
        if (browser) await browser.close();
    });

    it('should navigate from YouTube to YouTube Music', async () => {
        await page.waitForSelector('ytd-button-renderer:nth-child(2) button .yt-spec-touch-feedback-shape__fill', { timeout: 15000 });
        //await delay(4000);
        await page.click('ytd-button-renderer:nth-child(2) button .yt-spec-touch-feedback-shape__fill');
        await page.waitForNavigation({ waitUntil: 'domcontentloaded' });
        await page.waitForSelector('#guide-button.ytd-masthead', { timeout: 20000 });
        //await delay(2000);
        await page.click('#guide-button.ytd-masthead');
        //await delay(1000);


        await page.locator('::-p-xpath((//*[@id="endpoint"]/tp-yt-paper-item)[1])').click();
        //await delay(4000);

        const [newTarget] = await Promise.all([
            browser.waitForTarget((target: Target) => target.opener() === page.target()), // Wait for the new tab
            page.locator('xpath=//yt-formatted-string[contains(text(), "YouTube Music")]').click() // Click the link
        ]);

        const youtubeMusicPage = await newTarget.page();
        if (youtubeMusicPage) {  // Check if youtubeMusicPage is not null
            await youtubeMusicPage.waitForNavigation({ waitUntil: 'domcontentloaded' });

            // Step 4: Verify that the new tab opened YouTube Music
            const currentUrl = await youtubeMusicPage.url();
            console.log('New tab URL:', currentUrl);
            expect(currentUrl).to.include('music.youtube.com');
        } else {
            throw new Error('New tab did not open');
        }
    });

    it('should search for Css selectors and clear input', async () => {
        await page.waitForSelector('ytd-button-renderer:nth-child(2) button .yt-spec-touch-feedback-shape__fill', { timeout: 20000 });
        await page.click('ytd-button-renderer:nth-child(2) button .yt-spec-touch-feedback-shape__fill');

        await page.waitForNavigation({ waitUntil: 'domcontentloaded' });
        const inputSelector = '[name="search_query"]';
        await page.waitForSelector(inputSelector, { timeout: 40000 });
        await page.type(inputSelector, 'Css selectors');

        await page.waitForSelector('.ytSearchboxComponentSearchButton', { timeout: 40000 });
        await page.click('.ytSearchboxComponentSearchButton');

        await page.waitForSelector('#dismissible', { timeout: 60000 });
        const dismissibleElements = await page.$$('#dismissible');
        expect(dismissibleElements.length).to.be.greaterThan(0);
        console.log('#dismissible elements are present on the page');

        await page.waitForSelector('.ytSearchboxComponentClearButton', { timeout: 400000 });
        await page.click('.ytSearchboxComponentClearButton');


    });


});
