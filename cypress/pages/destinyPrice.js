class destinyPrice {
    // Select the destiny fly price
    setPrice() {
        cy.get('#vuelos-regreso > :nth-child(1) > .card > .row-eq-height > .wingo-bg').click({ force: true })
    }

    choosePrice() {
        cy.get('#vuelos-regreso > .container-selected > .cursor > [loadbundle=""] > :nth-child(1) > .card-list > :nth-child(1) > .card-list-item > .card-footer > .wingo-button').click({ force: true })
    }
}

export default destinyPrice;