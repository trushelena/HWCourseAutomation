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
        const handlesBefore = await browser.getWindowHandles();

        await this.guideButton.waitForClickable();
        await this.guideButton.click();

        await this.youtubeMusicLink.waitForClickable();
        await this.youtubeMusicLink.click();

        await browser.waitUntil(async () => {
            const handlesAfter = await browser.getWindowHandles();
            return handlesAfter.length > handlesBefore.length;
        }, {
            timeout: 10000,
            timeoutMsg: 'New tab did not open'
        });
        const handlesAfter = await browser.getWindowHandles();
        const newTabHandle = handlesAfter[handlesAfter.length - 1];

        if (!newTabHandle) {
            throw new Error('New tab handle not found');
        }

        await browser.switchToWindow(newTabHandle);
    }
}

export default new YouTubePage();
