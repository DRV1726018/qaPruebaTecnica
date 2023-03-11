class firstPassenger {

    firstNameLocator = '#name-1-1'
    lastNameLocator = '#lastname-1-1'
    selectGenderLocator = '#sex-1-1 > .styledSelect'
    chooseGenderLocator = '#sex-1-1 > .options > [rel="M"]'
    continueGenderLocator = ':nth-child(2) > app-adult > .card-passenger-form.ng-invalid > .sm-gutter > :nth-child(4) > app-desk-data-control.ng-star-inserted > .w-field'
    choooseYearLocator = '#\\31 -birthday-0 > :nth-child(1)'
    chooseMonthLocator = '#\\31 -birthday-0 > :nth-child(2)'
    chooseDayLocator = '#\\31 -birthday-0 > :nth-child(3)'
    typeEmailLocator = '#email-1-1'
    confirmEmailLocator = '#email-confirm-1-1'
    typePhoneLocator = '#phone-1-1'
    typeIDLocator = '#numero-1-1'

    // Filling the first passenger 
    firstName() {
        cy.get(this.firstNameLocator).type('David', { force: true })
    }

    lastName() {
        cy.get(this.lastNameLocator).type('Ramirez', { force: true })
    }

    selectGender() {
        cy.get(this.selectGenderLocator).click({ force: true })
    }

    chooseGender() {
        cy.get(this.chooseGenderLocator).click({ force: true })
    }

    continueGender() {
        cy.get(this.continueGenderLocator)
    }

    chooseYear() {
        cy.get(this.choooseYearLocator).select('25: 1999', { force: true })
    }

    chooseMonth() {
        cy.get(this.chooseMonthLocator).select('13: 0', { force: true })
    }

    chooseDay() {
        cy.get(this.chooseDayLocator).select('63: 1', { force: true })
    }
    typeEmail() {
        cy.get(this.typeEmailLocator).type('email1@email.com', { force: true })
    }

    confirmEmail() {
        cy.get(this.confirmEmailLocator).type('email1@email.com', { force: true })
    }

    typePhone() {
        cy.get(this.typePhoneLocator).type('3111111111', { force: true })
    }

    typeID() {
        cy.get(this.typeIDLocator).type('11111111', { force: true })
    }
}

export default firstPassenger;