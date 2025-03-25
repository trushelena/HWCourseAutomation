import { $, browser } from '@wdio/globals';
import { ChainablePromiseElement } from 'webdriverio';

class YouTubePage {
    private url = 'https://www.youtube.com/?hl=en';

    public get acceptPolicyButton(): ChainablePromiseElement {
        return $('ytd-button-renderer:nth-child(2) button .yt-spec-touch-feedback-shape__fill');
    }

    public get searchBox(): ChainablePromiseElement {
        return $('[name="search_query"]');
    }

    public get searchButton(): ChainablePromiseElement {
        return $('.ytSearchboxComponentSearchButton');
    }

    public get clearButton(): ChainablePromiseElement {
        return $('.ytSearchboxComponentClearButton');
    }

    public get guideButton(): ChainablePromiseElement {
        return $('#guide-button.ytd-masthead');
    }

    public get youtubeMusicLink(): ChainablePromiseElement {
        return $('//yt-formatted-string[contains(text(), "YouTube Music")]');
    }

    public async open(): Promise<void> {
        await browser.url(this.url);
    }

    public async acceptPolicy(): Promise<void> {
        await this.acceptPolicyButton.waitForDisplayed();
        await this.acceptPolicyButton.click();
    }

    public async search(query: string): Promise<void> {
        await this.searchBox.setValue(query);
        await this.searchButton.click();
    }

    public async clearSearch(): Promise<void> {
        await this.clearButton.click();
    }

    public async navigateToYouTubeMusic(): Promise<void> {

        await this.guideButton.waitForClickable({ timeout: 5000 });
        await this.guideButton.click();

        const youtubeMusicLink = await this.youtubeMusicLink;
        await youtubeMusicLink.waitForClickable({ timeout: 5000 });
        await youtubeMusicLink.click();


        const handlesBefore = await browser.getWindowHandles();

        await browser.waitUntil(async () => {
            const handlesAfter = await browser.getWindowHandles();
            console.log(`Handles after: ${handlesAfter}`);
            return handlesAfter.length > handlesBefore.length;
        }, {
            timeout: 50000,
            timeoutMsg: 'New tab did not open after clicking the link'
        });

        const handlesAfter = await browser.getWindowHandles();

        const newTabHandle = handlesAfter.find(handle => handle !== handlesBefore[0]);
        if (newTabHandle) {
            await browser.switchToWindow(newTabHandle);
        } else {
            throw new Error('New tab handle not found');
        }

        await browser.waitUntil(async () => (await browser.getUrl()).includes('music.youtube.com'), {
            timeout: 10000,
            timeoutMsg: 'Did not navigate to YouTube Music in the new tab'
        });
    }
}

export default new YouTubePage();
