class choosingDestinyChairs {

    selectDestinyChairLocator = ':nth-child(3) > .ancillajes-data > :nth-child(1) > .container-passenger > :nth-child(1) > .grid-container > :nth-child(5) > .div-pasajero-no-buy-chair'
    chooseDestinyChairLocator = ':nth-child(3) > .ancillajes-data > :nth-child(1) > .container-passenger > :nth-child(2) > .grid-container > :nth-child(5) > .div-pasajero-no-buy-chair'
    advancedLocator = '#btn-nav-return > :nth-child(3)'
    clickPopupLocator = '.button-popups-infant-left > .btn-block > .bt-wingo-blue-pop-up'

    // Choosing the destiny chairs
    selectDestinyChair() {
        cy.get(this.selectDestinyChairLocator).click({ force: true })
    }

    chooseDestinyChairs() {
        cy.get(this.chooseDestinyChairLocator).click({ force: true })
    }

    advanced() {
        cy.get(this.advancedLocator).click({ force: true })
    }

    clickPopup() {
        cy.get(this.clickPopupLocator).click({ force: true })
    }
}

export default choosingDestinyChairs;