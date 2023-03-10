Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe('Continuation of the test', () => {
    it('Select the lowest prices', () => {
        cy.visit('https://booking.wingo.com/es/search/BOG/CLO/2023-03-16/2023-04-16/2/0/0/0/COP/0/0')
        cy.wait(5000)
        // Select the origin fly price
        cy.get(':nth-child(1) > .card-list-item > .card-footer > .wingo-button').click({ force: true })

        // Select the destiny fly price
        cy.get('#vuelos-regreso > :nth-child(1) > .card > .row-eq-height > .wingo-bg').click({ force: true })
        cy.get('#vuelos-regreso > .container-selected > .cursor > [loadbundle=""] > :nth-child(1) > .card-list > :nth-child(1) > .card-list-item > .card-footer > .wingo-button').click({ force: true })

        // Continue with the personalization
        cy.get('.continue > .btn-continuar').click()
        cy.wait(5000)

        // Filling the first passenger
        cy.get('#name-1-1').type('David', { force: true })
        cy.get('#lastname-1-1').type('Ramirez', { force: true })
        cy.get('#sex-1-1 > .styledSelect').click({ force: true })
        cy.get('#sex-1-1 > .options > [rel="M"]').click({ force: true })
        cy.get(':nth-child(2) > app-adult > .card-passenger-form.ng-invalid > .sm-gutter > :nth-child(4) > app-desk-data-control.ng-star-inserted > .w-field')
        cy.get('#\\31 -birthday-0 > :nth-child(1)').select('25: 1999', { force: true })
        cy.get('#\\31 -birthday-0 > :nth-child(2)').select('13: 0', { force: true })
        cy.get('#\\31 -birthday-0 > :nth-child(3)').select('63: 1', { force: true })
        cy.get('#email-1-1').type('email1@email.com', { force: true })
        cy.get('#email-confirm-1-1').type('email1@email.com', { force: true })
        cy.get('#phone-1-1').type('3111111111', { force: true })
        cy.get('#numero-1-1').type('11111111', { force: true })

        // Filling the second passenger
        cy.get('#name-1-2').type('Jane', { force: true })
        cy.get('#lastname-1-2').type('Doe', { force: true })
        cy.get('#sex-1-2 > .styledSelect').click({ force: true })
        cy.get('#sex-1-2 > .options > [rel="F"]').click({ force: true })
        cy.get('#\\31 -birthday-1 > :nth-child(1)').select('25: 1999', { force: true })
        cy.get('#\\31 -birthday-1 > :nth-child(2)').select('13: 0', { force: true })
        cy.get('#\\31 -birthday-1 > :nth-child(3)').select('63: 1', { force: true })
        cy.get('#numero-1-2').type('11111112', { force: true })

        // Continue with the chair
        cy.get('[style="text-align: right"] > .btn-continuar').click()

        // Choosign the origin chairs
        cy.get('#anc-data > .container-passenger > :nth-child(1) > .grid-container > :nth-child(5) > .div-pasajero-no-buy-chair').click({ force: true })
        cy.get('#anc-data > .container-passenger > :nth-child(2) > .grid-container > :nth-child(5) > .div-pasajero-no-buy-chair').click({ force: true })
        cy.get('#btn-nav-outbound > :nth-child(2)').click({ force: true })
        cy.get('.button-popups-infant-left > .btn-block > .bt-wingo-blue-pop-up').click({ force: true })


        // Choosing the destiny chairs
        cy.get(':nth-child(3) > .ancillajes-data > :nth-child(1) > .container-passenger > :nth-child(1) > .grid-container > :nth-child(5) > .div-pasajero-no-buy-chair').click({ force: true })
        cy.get(':nth-child(3) > .ancillajes-data > :nth-child(1) > .container-passenger > :nth-child(2) > .grid-container > :nth-child(5) > .div-pasajero-no-buy-chair').click({ force: true })
        cy.get('#btn-nav-return > :nth-child(3)').click({ force: true })
        cy.get('.button-popups-infant-left > .btn-block > .bt-wingo-blue-pop-up').click({ force: true })

        // Payment
        cy.get(':nth-child(2) > .label > label').click({ force: true })
        cy.get(':nth-child(6) > .accordeon-tab-content > .accordeon-tab-content-title > .col-auto').click({ force: true })
        cy.get('.col-sm-12 > .row > .col-xs-6 > #btnc').click({ force: true })
        cy.get('[style="margin-top: 10px;"] > [style="padding-top: 0% !important;"] > label').click({ force: true })
        cy.get('#btncont > .btn-continuar').click({ force: true })
        cy.get(':nth-child(1) > :nth-child(2) > .btn-continuar').click({ force: true })
    })

    // it('Filling the personal data', () => {
    //     // Adult 1


    //     // cy.get('#lastname-1-1').type('Ramirez')
    //     // cy.get('.styledSelect').click()
    //     // cy.get('[rel="M"]').click()
    // })
})