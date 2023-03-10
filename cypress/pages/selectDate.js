class flyDate {
    // Select the date
    setDate() {
        cy.get('#fromDate > .icon-chev').click()
    }

    goingDate() {
        cy.get('#inputOutboundDate > .cont-calendar > .cont-months > .date-picker-wrapper > :nth-child(1) > :nth-child(1) > .month-wrapper > .month1 > tbody > :nth-child(3) > :nth-child(4) > .day').click()
    }

    commingDate() {
        cy.get('#date-window-container > .date-picker-wrapper > :nth-child(1) > :nth-child(1) > .month-wrapper > .month2 > tbody > :nth-child(3) > :nth-child(7) > .day').click()
    }
}

export default flyDate;