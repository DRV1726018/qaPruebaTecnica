class Payment {
    // Payment

    notFinancialInsurance() {
        cy.get(':nth-child(2) > .label > label').click({ force: true })
    }

    avoidChair() {
        cy.get(':nth-child(6) > .accordeon-tab-content > .accordeon-tab-content-title > .col-auto').click({ force: true })
    }

    clickContinue() {
        cy.get('.col-sm-12 > .row > .col-xs-6 > #btnc').click({ force: true })
    }

    advanced() {
        cy.get('[style="margin-top: 10px;"] > [style="padding-top: 0% !important;"] > label').click({ force: true })
    }

    clickContinue() {
        cy.get('#btncont > .btn-continuar').click({ force: true })
    }

    final() {
        cy.get(':nth-child(1) > :nth-child(2) > .btn-continuar').click({ force: true })
    }
}

export default Payment;