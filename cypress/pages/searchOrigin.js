class Origin {

    setOriginLocator = '.input-origen'
    dropOriginLocator = '.input-origen > .select-drop > .info-airport > .select > .styledSelect'
    selectOriginLocator = '[data-cod="BOG"]'
    verifyOriginLocator = '.input-origen > .select-drop > .info-airport > .select > .styledSelect.styledSelectOrigen'

    setOrigin() {
        cy.get(this.setOriginLocator).click({ force: true })
    }

    dropOrigin() {
        cy.get(this.dropOriginLocator).click({ force: true })
    }

    selectOrigin() {
        cy.get(this.selectOriginLocator).click()
    }

    verifyOrigin() {
        cy.get(this.verifyOriginLocator).should('have.text', 'Bogotá (BOG) El Dorado')
    }
}

export default Origin;
