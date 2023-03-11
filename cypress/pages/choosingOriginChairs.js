class choosingOriginChairs {
    // Choosign the origin chairs
    selectChair() {
        cy.get('#anc-data > .container-passenger > :nth-child(1) > .grid-container > :nth-child(5) > .div-pasajero-no-buy-chair').click({ force: true })
    }

    chooseChair() {
        cy.get('#anc-data > .container-passenger > :nth-child(2) > .grid-container > :nth-child(5) > .div-pasajero-no-buy-chair').click({ force: true })
    }

    advanced() {
        cy.get('#btn-nav-outbound > :nth-child(2)').click({ force: true })
    }

    clickPopup() {
        cy.get('.button-popups-infant-left > .btn-block > .bt-wingo-blue-pop-up').click({ force: true })
    }
}

export default choosingOriginChairs;