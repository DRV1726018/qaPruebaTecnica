class destinyPrice {

    setPriceLocator = '#vuelos-regreso > :nth-child(1) > .card > .row-eq-height > .wingo-bg'
    choosePriceLocator = '#vuelos-regreso > .container-selected > .cursor > [loadbundle=""] > :nth-child(1) > .card-list > :nth-child(1) > .card-list-item > .card-footer > .wingo-button'

    // Select the destiny fly price
    setPrice() {
        cy.get(this.setPriceLocator).click({ force: true })
    }

    choosePrice() {
        cy.get(this.choosePriceLocator).click({ force: true })
    }
}

export default destinyPrice;