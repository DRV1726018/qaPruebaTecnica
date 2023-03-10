class Passengers {
    // Searching for 2 adults

    setPassangers() {
        cy.get('#selectPasj > .info-airport > .icon-chev').click({ force: true })
    }

    addPassangers() {
        cy.get(':nth-child(1) > .bts-add > .plus').click()
    }

    verifyPassengers() {
        cy.get('#adultos').should('have.text', '2')
    }
}

export default Passengers;