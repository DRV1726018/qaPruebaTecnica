class continueChoosingChairs {

    chooseChairLocator = '[style="text-align: right"] > .btn-continuar'

    // Continue with the chair
    chooseChair() {
        cy.get(this.chooseChairLocator).click()
    }
}

export default continueChoosingChairs;