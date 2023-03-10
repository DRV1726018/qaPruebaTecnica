class originPrice {
    // Select the origin fly price
    originPrice() {
        cy.get(':nth-child(1) > .card-list-item > .card-footer > .wingo-button').click({ force: true })
    }
}

export default originPrice;