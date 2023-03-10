class secondPassenger {
    // // Filling the second passenger
    // 
    // 
    // 
    // 
    // 
    firstName() {
        cy.get('#name-1-2').type('Jane', { force: true })
    }

    lastName() {
        cy.get('#lastname-1-2').type('Doe', { force: true })
    }

    selectGender() {
        cy.get('#sex-1-2 > .styledSelect').click({ force: true })
    }

    chooseGender() {
        cy.get('#sex-1-2 > .options > [rel="F"]').click({ force: true })
    }

    chooseYear() {
        cy.get('#\\31 -birthday-1 > :nth-child(1)').select('25: 1999', { force: true })
    }

    chooseMonth() {
        cy.get('#\\31 -birthday-1 > :nth-child(2)').select('13: 0', { force: true })
    }

    chooseDay() {
        cy.get('#\\31 -birthday-1 > :nth-child(3)').select('63: 1', { force: true })
    }

    typeID() {
        cy.get('#numero-1-2').type('11111112', { force: true })
    }
}

export default secondPassenger;