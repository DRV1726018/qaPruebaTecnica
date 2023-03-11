class originPrice {

    originPriceLocator = ':nth-child(1) > .card-list-item > .card-footer > .wingo-button'

    // Select the origin fly price
    originPrice() {
        cy.get(this.originPriceLocator).click({ force: true })
    }
}

export default originPrice;