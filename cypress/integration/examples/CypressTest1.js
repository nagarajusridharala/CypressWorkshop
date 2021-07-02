describe('My First Test case', function() {
    it('Visits iodinesoftware site', function() {
    //Visit the iodinesoftware Website
    cy.visit("https://iodinesoftware.com/");

    //Navigate to Careers site
    cy.get('#menu-header-menu.menu>li:nth-child(4)').click();
    cy.get('#menu-header-menu.menu>li:nth-child(4)>ul>li:nth-child(2)').click();

    //verify careers site displayed
    cy.get('h1.p1').should('have.text', 'All we’re missing is you');

    //Go to Quality Assurance job site
    cy.get('h5.font-light').contains('Quality Assurance').click();

    //verify SDET job details page displayed
    cy.get('h2').contains('Software Development Engineer in Test')
    .should('have.text','Software Development Engineer in Test');

    cy.get('div.ResAts__sideBar>div>div>button').click();

    cy.get('button>span.fab-Button__text').contains('Submit Application');

    //Click cancel to go back to SDET job details page
    cy.get('button>span.fab-Button__text').contains('Cancel').click();

    //verify SDET job details page displayed
    cy.get('h2').contains('Software Development Engineer in Test')
    .should('have.text','Software Development Engineer in Test');

    cy.end();
  })
  })