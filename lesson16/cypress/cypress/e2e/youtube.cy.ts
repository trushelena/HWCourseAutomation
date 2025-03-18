describe('YouTube Functionality Tests', () => {
    beforeEach(() => {
        cy.visit('https://www.youtube.com/?hl=en');
        cy.wait(3000);

        cy.get('ytd-button-renderer:nth-child(2) button .yt-spec-touch-feedback-shape__fill').click();
        cy.wait(3000);
    });

    it('should verify search functionality', () => {
        cy.wait(5000);
        cy.get('input[name="search_query"]').should('be.visible');
        cy.wait(5000);
        cy.get('input[name="search_query"]').type('Css selectors');


        cy.get('.ytSearchboxComponentSearchButton').should('be.visible').click();

        cy.wait(5000);
        cy.get('#dismissible', { timeout: 60000 }).should('exist');

        cy.get('#dismissible').should('have.length.greaterThan', 0);
        cy.get('#dismissible').then((elements) => {
            console.log('#dismissible elements are present on the page', elements.length);
        });

        cy.wait(3000);
        cy.get('.ytSearchboxComponentClearButton').should('be.visible').click();

        cy.wait(5000);
        cy.get('input[name="search_query"]').should('have.value', '');
    });

    // Test Case 2: Go from youtube.com to https://music.youtube.com/
    it('should navigate from YouTube to YouTube Music', () => {
        cy.wait(5000);

        cy.get('#guide-button.ytd-masthead').click();
        cy.wait(5000);
        cy.xpath('(//*[@id="endpoint"]/tp-yt-paper-item)[1]').click();

        cy.get('yt-formatted-string').contains('YouTube Music').click();
    });

});
