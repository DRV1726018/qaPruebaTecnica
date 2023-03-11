import Passengers from "../pages/numberPassangers";
import originPrice from "../pages/originPrice";
import Destiny from "../pages/searchDestiny";
import Origin from "../pages/searchOrigin";
import flyDate from "../pages/selectDate";
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

describe('Fly BOG to CLO', () => {

    it('Verify that the origin, destiny, number of passengers and the date.', () => {
        cy.visit('https://www.wingo.com')

        // Search Bogota(BOG) as origin
        const on = new Origin
        on.setOrigin()
        on.dropOrigin()
        on.selectOrigin()
        on.verifyOrigin()

        const dn = new Destiny
        dn.setDestiny()
        dn.selectDestiny()
        dn.verifyDestiny()

        const pn = new Passengers;
        pn.setPassangers()
        pn.addPassangers()
        pn.verifyPassengers()

        const dan = new flyDate;
        dan.setDate()
        dan.goingDate()
        dan.commingDate()

        // Search the fly and handle the new tab
        // cy.get('.btn-search').click()
    })

    it('Filling the personal data', () => {
        cy.visit('https://booking.wingo.com/es/search/BOG/CLO/2023-03-16/2023-04-16/2/0/0/0/COP/0/0')
        cy.wait(5000)

        const op = new originPrice
        op.originPrice()

        const dp = new destinyPrice
        dp.setPrice()
        dp.choosePrice()


        cy.wait(5000)
        const cP = new continuePersonalization
        cP.continuePersonalization()

        cy.wait(5000)
        const fp = new firstPassenger
        fp.firstName()
        fp.lastName()
        fp.selectGender()
        fp.chooseGender()
        fp.continueGender()
        fp.chooseYear()
        fp.chooseMonth()
        fp.chooseDay()
        fp.typeEmail()
        fp.confirmEmail()
        fp.typePhone()
        fp.typeID()

        const sp = new secondPassenger
        sp.firstName()
        sp.lastName()
        sp.selectGender()
        sp.chooseGender()
        sp.chooseYear()
        sp.chooseMonth()
        sp.chooseDay()
        sp.typeID()

        const ccc = new continueChoosingChairs
        ccc.chooseChair()

        const co = new choosingOriginChairs
        co.selectChair()
        co.chooseChair()
        co.advanced()
        co.clickPopup()

        const cd = new choosingDestinyChairs
        cd.selectDestinyChair()
        cd.chooseDestinyChairs()
        cd.advanced()
        cd.clickPopup()

        const pa = new Payment
        pa.notFinancialInsurance()
        pa.avoidChair()
        pa.clickContinue()
        pa.advanced()
        pa.clickContinue()
        pa.final()

    })

})

