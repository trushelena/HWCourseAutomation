describe('YouTube Functionality Tests', () => {
    beforeEach(() => {
        cy.visit('https://www.youtube.com/?hl=en');

        cy.get('ytd-button-renderer:nth-child(2) button .yt-spec-touch-feedback-shape__fill')
            .click();
    });

    it('should verify search functionality', () => {
        cy.get('input[name="search_query"]')
            .should('be.visible')
            .type('Css selectors');

        cy.get('.ytSearchboxComponentSearchButton')
            .should('be.visible')
            .click();

        cy.get('#dismissible', { timeout: 60000 })
            .should('exist')
            .should('have.length.greaterThan', 0)
            .then((elements) => {
                console.log('#dismissible elements are present on the page', elements.length);
            });

        cy.get('.ytSearchboxComponentClearButton')
            .should('be.visible')
            .click();

        cy.get('input[name="search_query"]').should('have.value', '');
    });

    describe('Navigation from YouTube to YouTube Music', () => {

        it('should navigate from YouTube to YouTube Music', () => {

            cy.window().then((win) => {
                cy.stub(win, 'open').callsFake((url) => {
                    expect(url).to.include('music.youtube.com');
                    return null;
                }).as('popup');
            });

            cy.get('#guide-button.ytd-masthead', { timeout: 60000 })
                .should('be.visible')
                .click();

            cy.xpath('(//*[@id="endpoint"]/tp-yt-paper-item)[1]', { timeout: 120000 })
                .should('be.visible')
                .click();

            cy.window().then((win) => {
                cy.stub(win, 'open').as('popup');
            });

            cy.contains('yt-formatted-string', 'YouTube Music', { timeout: 60000 })
                .should('be.visible')
                .click();

            cy.get('@popup').should('be.called');

            cy.get('@popup').should('have.been.calledOnce');
        });
    });
});

