class flightDate {

    setDateLocator = '#fromDate > .icon-chev'
    goingDateLocator = '#inputOutboundDate > .cont-calendar > .cont-months > .date-picker-wrapper > :nth-child(1) > :nth-child(1) > .month-wrapper > .month1 > tbody > :nth-child(3) > :nth-child(4) > .day'
    commingDateLocator = '#date-window-container > .date-picker-wrapper > :nth-child(1) > :nth-child(1) > .month-wrapper > .month2 > tbody > :nth-child(3) > :nth-child(7) > .day'

    departureDayDateLocator = 'body > div:nth-child(2) > main:nth-child(3) > section:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > table:nth-child(2) > tbody:nth-child(2) > tr:nth-child(3) > td:nth-child(7) > div:nth-child(1)'
    departureMonthDateLocator = 'body > div:nth-child(2) > main:nth-child(3) > section:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > table:nth-child(1) > thead:nth-child(1) > tr:nth-child(1) > th:nth-child(2) > div:nth-child(1) > div:nth-child(1)'
    returnDayDateLocator = 'body > div:nth-child(2) > main:nth-child(3) > section:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(3) > td:nth-child(4) > div:nth-child(1)'
    returnMonthDateLocator = 'body > div:nth-child(2) > main:nth-child(3) > section:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > table:nth-child(2) > thead:nth-child(1) > tr:nth-child(1) > th:nth-child(2) > div:nth-child(1) > div:nth-child(1)'

    // Select the date
    setDate() {
        cy.get(this.setDateLocator).click()
    }

    // Select the departure date
    goingDate() {
        cy.get(this.goingDateLocator).click()
    }

    // Select the return date
    commingDate() {
        cy.get(this.commingDateLocator).click()
    }

    // Verify that the the date is 16 of March 
    verifyDepartureDayDate(expected) {
        cy.get(this.departureDayDateLocator).should('have.text', expected)
    }

    verifyDepartureMonthDate(expected) {
        cy.get(this.departureMonthDateLocator).should('have.text', expected)
    }

    verifyReturnDayDate(expected) {
        cy.get(this.returnDayDateLocator).should('have.text', expected)
    }

    verifyReturnMonthDate(expected) {
        cy.get(this.returnMonthDateLocator).should('have.text', expected)
    }
}

export default flightDate;

