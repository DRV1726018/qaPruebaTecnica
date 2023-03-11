class continuePersonalization {

    continuePersonalizationLocator = '.continue > .btn-continuar'
    // Continue with the personalization
    continuePersonalization() {
        cy.get(this.continuePersonalizationLocator).click()
    }
}

export default continuePersonalization;