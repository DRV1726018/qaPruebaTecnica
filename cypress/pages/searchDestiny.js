class Destiny {

    setDestinyLocator = '#inputDestino'
    selectDestinyLocator = '#comboDestino > [data-cod="CLO"] > .textCity'
    verifyDestinyLocator = '.input-destino > .select-drop > .info-airport > .select > .styledSelect'

    setDestiny() {
        cy.get(this.setDestinyLocator).click({ force: true })
    }

    selectDestiny() {
        cy.get(this.selectDestinyLocator).click({ force: true })
    }

    verifyDestiny(expected) {
        cy.get(this.verifyDestinyLocator).should('have.text', expected)
    }
}

export default Destiny;