class choosingOriginChairs {

    selectChairLocator = '#anc-data > .container-passenger > :nth-child(1) > .grid-container > :nth-child(5) > .div-pasajero-no-buy-chair'
    chooseChairLocator = '#anc-data > .container-passenger > :nth-child(2) > .grid-container > :nth-child(5) > .div-pasajero-no-buy-chair'
    advancedLocator = '#btn-nav-outbound > :nth-child(2)'
    clickPopupLocator = '.button-popups-infant-left > .btn-block > .bt-wingo-blue-pop-up'

    // Choosign the origin chairs
    selectChair() {
        cy.get(this.selectChairLocator).click({ force: true })
    }

    chooseChair() {
        cy.get(this.chooseChairLocator).click({ force: true })
    }

    advanced() {
        cy.get(this.advancedLocator).click({ force: true })
    }

    clickPopup() {
        cy.get(this.clickPopupLocator).click({ force: true })
    }
}

export default choosingOriginChairs;