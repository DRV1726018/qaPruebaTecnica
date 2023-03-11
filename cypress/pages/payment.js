class Payment {

    notFinancialInsuranceLocator = ':nth-child(2) > .label > label'
    avoidChairLocator = ':nth-child(6) > .accordeon-tab-content > .accordeon-tab-content-title > .col-auto'
    clickContinueLocator = '.col-sm-12 > .row > .col-xs-6 > #btnc'
    advancedLocator = '[style="margin-top: 10px;"] > [style="padding-top: 0% !important;"] > label'
    clickContinueButtonLocator = '#btncont > .btn-continuar'
    finalLocator = ':nth-child(1) > :nth-child(2) > .btn-continuar'

    // Payment

    notFinancialInsurance() {
        cy.get(this.notFinancialInsuranceLocator).click({ force: true })
    }

    avoidChair() {
        cy.get(this.avoidChairLocator).click({ force: true })
    }

    clickContinue() {
        cy.get(this.clickContinueLocator).click({ force: true })
    }

    advanced() {
        cy.get(this.advancedLocator).click({ force: true })
    }

    clickContinueButton() {
        cy.get(this.clickContinueButtonLocator).click({ force: true })
    }

    final() {
        cy.get(this.finalLocator).click({ force: true })
    }
}

export default Payment;