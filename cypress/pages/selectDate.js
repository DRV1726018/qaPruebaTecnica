class flyDate {

    setDateLocator = '#fromDate > .icon-chev'
    goingDateLocator = '#inputOutboundDate > .cont-calendar > .cont-months > .date-picker-wrapper > :nth-child(1) > :nth-child(1) > .month-wrapper > .month1 > tbody > :nth-child(3) > :nth-child(4) > .day'
    commingDateLocator = '#date-window-container > .date-picker-wrapper > :nth-child(1) > :nth-child(1) > .month-wrapper > .month2 > tbody > :nth-child(3) > :nth-child(7) > .day'

    // Select the date
    setDate() {
        cy.get(this.setDateLocator).click()
    }

    goingDate() {
        cy.get(this.goingDateLocator).click()
    }

    commingDate() {
        cy.get(this.commingDateLocator).click()
    }
}

export default flyDate;