Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('Fly BOG to CLO', () => {

    it('Search fly BOG to CLO, 2 Adults, one month of difference', () => {
        cy.visit('https://www.wingo.com')

        // Search Bogota(BOG) as origin
        cy.get('.input-origen').click({ force: true })
        cy.get('.input-origen > .select-drop > .info-airport > .select > .styledSelect').click({ force: true })
        cy.get('[data-cod="BOG"]').click()
        cy.get('.input-origen > .select-drop > .info-airport > .select > .styledSelect.styledSelectOrigen').should('have.text', 'Bogotá (BOG) El Dorado')

        // Search Cali(CAL) as destiny
        cy.get('#inputDestino').click({ force: true })
        cy.get('#comboDestino > [data-cod="CLO"] > .textCity').click({ force: true })
        cy.get('.input-destino > .select-drop > .info-airport > .select > .styledSelect').should('have.text', 'Cali (CLO) Alfonso Bonilla Aragón')

        // Searching for 2 adults
        cy.get('#selectPasj > .info-airport > .icon-chev').click({ force: true })
        cy.get(':nth-child(1) > .bts-add > .plus').click()
        cy.get('#adultos').should('have.text', '2')

        // Select the going date
        cy.get('#fromDate > .icon-chev').click()
        cy.get('#inputOutboundDate > .cont-calendar > .cont-months > .date-picker-wrapper > :nth-child(1) > :nth-child(1) > .month-wrapper > .month1 > tbody > :nth-child(3) > :nth-child(4) > .day').click()
        cy.get('#date-window-container > .date-picker-wrapper > :nth-child(1) > :nth-child(1) > .month-wrapper > .month2 > tbody > :nth-child(3) > :nth-child(7) > .day').click()

        // Search the fly and handle the new tab
        cy.get('.btn-search').click()
    })
})

