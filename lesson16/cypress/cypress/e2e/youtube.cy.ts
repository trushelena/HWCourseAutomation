describe('YouTube Functionality Tests', () => {

    // Переміщаємо перші два кроки у beforeEach
    beforeEach(() => {
        // Step 1: Open YouTube
        cy.visit('https://www.youtube.com/?hl=en');

        // Step 2: Click on Accept All
        cy.get('ytd-button-renderer:nth-child(2) button .yt-spec-touch-feedback-shape__fill').click();
    });

    // Test Case 1: Verify Search functionality
    it('should verify search functionality', () => {
        // Step 3: Enter 'Css selectors' in search input field
        cy.wait(5000); // Затримка на 5 секунд
        cy.get('input[name="search_query"]').should('be.visible');
        cy.get('input[name="search_query"]').type('Css selectors');

        // Step 4: Click Search button
        cy.get('.ytSearchboxComponentClearButton').should('be.visible').click();

        // Step 5: Assert that "About these results" label is shown
        //cy.wait(5000);
        //cy.get('#about-these-results').should('be.visible');

        // Step 6: Click on the clear search button
        cy.wait(5000);
        cy.get('.ytSearchboxComponentClearButton').click();

        // Step 7: Assert that input field is empty
        cy.wait(5000);
        cy.get('input[name="search_query"]').should('have.value', '');
    });

    // Test Case 2: Go from youtube.com to https://music.youtube.com/
    it('should navigate from YouTube to YouTube Music', () => {
        // Step 3: Click on Home button to go to the YouTube home page
        cy.wait(5000);

        cy.get('#guide-button.ytd-masthead').click();
        cy.wait(5000);
        cy.xpath('(//*[@id="endpoint"]/tp-yt-paper-item)[1]').click();

        // Assert that we are on the YouTube home page
        cy.url().should('eq', 'https://www.youtube.com/');

        // Step 4: Click on YouTube Music
        cy.xpath('(//*[@id="endpoint"]/tp-yt-paper-item/yt-formatted-string)[15]').click();

        // Assert that we are on the YouTube Music page
        cy.url().should('eq', 'https://music.youtube.com/');
    });

});
