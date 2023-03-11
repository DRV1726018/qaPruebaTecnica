class Passengers {

    setPassangersLocator = '#selectPasj > .info-airport > .icon-chev'
    addPassangersLocator = ':nth-child(1) > .bts-add > .plus'
    verifyPassengersLocator = '#adultos'

    // Searching for 2 adults
    setPassangers() {
        cy.get(this.setPassangersLocator).click({ force: true })
    }

    addPassangers() {
        cy.get(this.addPassangersLocator).click()
    }

    verifyPassengers() {
        cy.get(this.verifyPassengersLocator).should('have.text', '2')
    }
}

export default Passengers;