class firstPassenger {
    // Filling the first passenger 
    // 
    // 
    // 
    // 
    // 
    firstName() {
        cy.get('#name-1-1').type('David', { force: true })
    }

    lastName() {
        cy.get('#lastname-1-1').type('Ramirez', { force: true })
    }

    selectGender() {
        cy.get('#sex-1-1 > .styledSelect').click({ force: true })
    }

    chooseGender() {
        cy.get('#sex-1-1 > .options > [rel="M"]').click({ force: true })
    }

    continueGender() {
        cy.get(':nth-child(2) > app-adult > .card-passenger-form.ng-invalid > .sm-gutter > :nth-child(4) > app-desk-data-control.ng-star-inserted > .w-field')
    }

    chooseYear() {
        cy.get('#\\31 -birthday-0 > :nth-child(1)').select('25: 1999', { force: true })
    }

    chooseMonth() {
        cy.get('#\\31 -birthday-0 > :nth-child(2)').select('13: 0', { force: true })
    }

    chooseDay() {
        cy.get('#\\31 -birthday-0 > :nth-child(3)').select('63: 1', { force: true })
    }
    typeEmail() {
        cy.get('#email-1-1').type('email1@email.com', { force: true })
    }

    confirmEmail() {
        cy.get('#email-confirm-1-1').type('email1@email.com', { force: true })
    }

    typePhone() {
        cy.get('#phone-1-1').type('3111111111', { force: true })
    }

    typeID() {
        cy.get('#numero-1-1').type('11111111', { force: true })
    }
}

export default firstPassenger;