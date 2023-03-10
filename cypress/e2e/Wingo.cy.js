import Passengers from "../pages/numberPassangers";
import originPrice from "../pages/originPrice";
import Destiny from "../pages/searchDestiny";
import Origin from "../pages/searchOrigin";
import flightDate from "../pages/selectDate";
import destinyPrice from "../pages/destinyPrice";
import continuePersonalization from "../pages/continuePersonalization";
import firstPassenger from "../pages/firstPassenger";
import secondPassenger from "../pages/secondPassenger";
import continueChoosingChairs from "../pages/continueChoosingChairs";
import choosingOriginChairs from "../pages/choosingOriginChairs";
import choosingDestinyChairs from "../pages/choosingDestinyChairs";
import Payment from "../pages/payment";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('Flight BOG to CLO', () => {

    it('Verify the origin, destiny, number of passengers and the date.', () => {
        cy.visit('https://www.wingo.com')

        cy.fixture('data').then((data) => {
            // Search Bogota(BOG) as origin
            const on = new Origin
            on.setOrigin()
            on.dropOrigin()
            on.selectOrigin()
            on.verifyOrigin(data[0].origin)

            // Search Cali(CLO) as destiny
            const dn = new Destiny
            dn.setDestiny()
            dn.selectDestiny()
            dn.verifyDestiny(data[0].destiny)

            // Adding a passanger and verity that there are 2 adults
            const pn = new Passengers;
            pn.setPassangers()
            pn.addPassangers()
            pn.verifyPassengers()

            // Choosing the date and verify that there are at least on month of difference
            const dan = new flightDate;
            dan.setDate()
            dan.goingDate()
            dan.commingDate()
            dan.verifyDepartureDayDate(data[0].departure_day)
            dan.verifyDepartureMonthDate('Marzo‎')
            dan.verifyReturnDayDate(data[0].return_day)
            dan.verifyReturnMonthDate('Abril‎')
        })



        // Search the flight and handle the new tab
        // cy.get('.btn-search').click()
    })

    it('Buying the sits, filling the personal data and make the payment', () => {
        cy.visit('https://booking.wingo.com/es/search/BOG/CLO/2023-03-16/2023-04-16/2/0/0/0/COP/0/0')
        cy.wait(5000)

        // Choosing the origin flight price
        const op = new originPrice
        op.originPrice()

        // Choosing the destiny flight price
        const dp = new destinyPrice
        dp.setPrice()
        dp.choosePrice()

        // Click into continue, the webpage has some loading troubles.
        cy.wait(5000)
        const cP = new continuePersonalization
        cP.continuePersonalization()
        cy.wait(5000)

        // Filling the data of the first passenger
        cy.fixture('data').then((data) => {
            const fp = new firstPassenger
            fp.firstName(data[1].passenger.name)
            fp.lastName(data[1].passenger.lastname)
            fp.selectGender()
            fp.chooseGender()
            fp.continueGender()
            fp.chooseYear()
            fp.chooseMonth()
            fp.chooseDay()
            fp.typeEmail(data[1].passenger.email)
            fp.confirmEmail(data[1].passenger.confirmation_email)
            fp.typePhone(data[1].passenger.phone)
            fp.typeID(data[1].passenger.id)
        })

        // Filling the date of the seccond passenger
        cy.fixture('data').then((data) => {
            const sp = new secondPassenger
            sp.firstName(data[2].passenger.name)
            sp.lastName(data[2].passenger.lastname)
            sp.selectGender()
            sp.chooseGender()
            sp.chooseYear()
            sp.chooseMonth()
            sp.chooseDay()
            sp.typeID(data[2].passenger.id)
        })

        // Click in to continue and avanced to the choosing chairs section
        const ccc = new continueChoosingChairs
        ccc.chooseChair()

        // Choosing the origin flight chairs, the system will assign automatically
        const co = new choosingOriginChairs
        co.selectChair()
        co.chooseChair()
        co.advanced()
        co.clickPopup()

        // Choosing the destiny chairs, the system will asign automatically
        const cd = new choosingDestinyChairs
        cd.selectDestinyChair()
        cd.chooseDestinyChairs()
        cd.advanced()
        cd.clickPopup()

        // Making the payment, and select no assurance.
        const pa = new Payment
        cy.wait(5000)
        pa.notFinancialInsurance()
        pa.avoidChair()
        pa.clickContinue()
        pa.advanced()
        pa.clickContinueButton()
        pa.final()

    })

})

