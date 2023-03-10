class Origin {

    setOrigin() {
        cy.get('.input-origen').click({ force: true })
    }

    dropOrigin() {
        cy.get('.input-origen > .select-drop > .info-airport > .select > .styledSelect').click({ force: true })
    }

    selectOrigin() {
        cy.get('[data-cod="BOG"]').click()
    }

    verifyOrigin() {
        cy.get('.input-origen > .select-drop > .info-airport > .select > .styledSelect.styledSelectOrigen').should('have.text', 'Bogotá (BOG) El Dorado')
    }
}

export default Origin;
