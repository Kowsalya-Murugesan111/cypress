//test suite name


it.only('orange HRM', function(){
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.get('.orangehrm-dashboard-widget-body > .oxd-grid-3 > :nth-child(1)').click()
    cy.get('.oxd-autocomplete-text-input > input').children()


    // cy.get(':nth-child(6) > .oxd-main-menu-item > .oxd-text').click()
})