class secondPassenger {

    firstNameLocator = '#name-1-2'
    lastNameLocator = '#lastname-1-2'
    selectGenderLocator = '#sex-1-2 > .styledSelect'
    chooseGenderLocator = '#sex-1-2 > .options > [rel="F"]'
    chooseYearLocator = '#\\31 -birthday-1 > :nth-child(1)'
    chooseMonthLocator = '#\\31 -birthday-1 > :nth-child(2)'
    chooseDayLocator = '#\\31 -birthday-1 > :nth-child(3)'
    typeIDLocator = '#numero-1-2'

    // // Filling the second passenger

    firstName() {
        cy.get(this.firstNameLocator).type('Jane', { force: true })
    }

    lastName() {
        cy.get(this.lastNameLocator).type('Doe', { force: true })
    }

    selectGender() {
        cy.get(this.selectGenderLocator).click({ force: true })
    }

    chooseGender() {
        cy.get(this.chooseGenderLocator).click({ force: true })
    }

    chooseYear() {
        cy.get(this.chooseYearLocator).select('25: 1999', { force: true })
    }

    chooseMonth() {
        cy.get(this.chooseMonthLocator).select('13: 0', { force: true })
    }

    chooseDay() {
        cy.get(this.chooseDayLocator).select('63: 1', { force: true })
    }

    typeID() {
        cy.get(this.typeIDLocator).type('11111112', { force: true })
    }
}

export default secondPassenger;