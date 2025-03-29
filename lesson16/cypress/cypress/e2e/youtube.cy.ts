import 'cypress-xpath';

// describe('YouTube Search Test', () => {
//     it('performs search and clears input', () => {
//       // Step 1: Open YouTube
//       cy.visit('https://www.youtube.com/?hl=en');

//       cy.get('button[aria-label^="Accept"]').click();
  
//       // Step 2: Click on the search input field
//       cy.get('.ytSearchboxComponentInputBox').click();
  
//       // Step 3: Enter 'Css selectors' in the search input field
//       cy.get('.ytSearchboxComponentInputBox').type('Css selectors');
  
//       // Step 4: Click on the search button and verify that 'About these results' is shown
//       cy.get('.ytSearchboxComponentSearchButton').click();
//       cy.get('#about-these-results').should('be.visible');
  
//       // Step 5: Click on the clear button and verify the input field is empty
//       cy.get('.ytSearchboxComponentClearButtonWrapper').click();
//       cy.get('.ytSearchboxComponentInputBox').should('have.value', '');
//     });

    describe('YouTube Navigation Test', () => {
      it('should navigate through YouTube and open YouTube Music', () => {
        // Step 1: Click on the guide button
        cy.visit('https://www.youtube.com/?hl=en');
        cy.get('button[aria-label^="Accept"]').click();
        cy.get('#guide-button.ytd-masthead').click();
      
    
        // Step 2: Click on the Home button
        cy.xpath("//*[contains(@class, 'ytd-guide-entry-renderer') and @title='Home']").click();
    
        // Assert that the YouTube home page is opened
        cy.url().should('include', 'youtube.com');
    
        // Step 3: Click on the YouTube Music button
        cy.xpath("(//yt-formatted-string[contains(text(), 'YouTube Music')][contains(@class, 'ytd-guide-entry-renderer')])[1]").click();
    
        // Assert that YouTube Music page is opened
        cy.url().should('include', 'music.youtube.com');
      });
    });
    

  