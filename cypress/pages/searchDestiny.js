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

    verifyDestiny() {
        cy.get(this.verifyDestinyLocator).should('have.text', 'Cali (CLO) Alfonso Bonilla Aragón')
    }
}

export default Destiny;