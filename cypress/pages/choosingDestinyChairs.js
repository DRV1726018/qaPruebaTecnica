class choosingDestinyChairs {
    // Choosing the destiny chairs
    selectDestinyChair() {
        cy.get(':nth-child(3) > .ancillajes-data > :nth-child(1) > .container-passenger > :nth-child(1) > .grid-container > :nth-child(5) > .div-pasajero-no-buy-chair').click({ force: true })
    }

    chooseDestinyChairs() {
        cy.get(':nth-child(3) > .ancillajes-data > :nth-child(1) > .container-passenger > :nth-child(2) > .grid-container > :nth-child(5) > .div-pasajero-no-buy-chair').click({ force: true })
    }

    advanced() {
        cy.get('#btn-nav-return > :nth-child(3)').click({ force: true })
    }

    clickPopup() {
        cy.get('.button-popups-infant-left > .btn-block > .bt-wingo-blue-pop-up').click({ force: true })
    }
}

export default choosingDestinyChairs;