describe('YouTube Search Test', () => {
    it('performs search and clears input', () => {
      // Step 1: Open YouTube
      cy.visit('https://www.youtube.com/');
  
      // Step 2: Click on the search input field
      cy.get('.ytSearchboxComponentInputBox').click();
  
      // Step 3: Enter 'Css selectors' in the search input field
      cy.get('.ytSearchboxComponentInputBox').type('Css selectors');
  
      // Step 4: Click on the search button and verify that 'About these results' is shown
      cy.get('.ytSearchboxComponentSearchButton').click();
      cy.get('#about-these-results').should('be.visible');
  
      // Step 5: Click on the clear button and verify the input field is empty
      cy.get('.ytSearchboxComponentClearButtonWrapper').click();
      cy.get('.ytSearchboxComponentInputBox').should('have.value', '');
    });
  });
  