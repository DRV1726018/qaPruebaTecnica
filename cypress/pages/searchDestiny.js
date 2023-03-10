class Destiny {

    setDestiny() {
        cy.get('#inputDestino').click({ force: true })
    }

    selectDestiny() {
        cy.get('#comboDestino > [data-cod="CLO"] > .textCity').click({ force: true })
    }

    verifyDestiny() {
        cy.get('.input-destino > .select-drop > .info-airport > .select > .styledSelect').should('have.text', 'Cali (CLO) Alfonso Bonilla Aragón')
    }
}

export default Destiny;