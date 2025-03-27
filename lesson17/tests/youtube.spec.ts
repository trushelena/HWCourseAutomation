import { browser, expect } from '@wdio/globals';
import YouTubePage from 'src/pages/youtube.page';

describe('YouTube Tests', () => {
    beforeEach(async () => {
        await YouTubePage.open();
    });

    it('should navigate from YouTube to YouTube Music', async () => {
        await YouTubePage.acceptPolicy();
        await YouTubePage.navigateToYouTubeMusic();

        const currentUrl = await browser.getUrl();
        expect(currentUrl).toContain('music.youtube.com');
    });


    it('should search for "CSS selectors" and clear input', async () => {
        await YouTubePage.search('CSS selectors');
        await expect(await YouTubePage.searchBox).toHaveValue('CSS selectors');

        await YouTubePage.clearSearch();
        await expect(await YouTubePage.searchBox).toHaveValue('');
    });
});
