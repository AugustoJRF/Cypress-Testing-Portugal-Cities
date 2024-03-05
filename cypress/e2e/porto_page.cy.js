/// <reference types="cypress"/>

describe('Porto page', () => {

    beforeEach(() => {
        cy.visit('/')
    }) 

    it('Check Porto first container information', () => {

        cy.get(':nth-child(2) > .nav-link').click()
        cy.get('.pb-3 > .container > :nth-child(1)')
            .should('contain', 'Morro Garden')
            .should('contain', 'Located in Vila Nova de Gaia, and being one of the main tourist spots in the city of Porto, Jardim do Morro is a pleasant, peaceful place, with lots of green and of course, a spectacular view of the Douro River. It is a great place to have an overview of the city and take lots of photos. A tip is to go in the late afternoon to have the opportunity to watch the sunset.')
            .find('img[src="Cities Pictures/porto2.jpg"]')
            .should('be.visible')
    })
        
    it('Check Porto second container information', () => {

        cy.get(':nth-child(2) > .nav-link').click()
        cy.get('.pb-3 > .container > :nth-child(2)')
            .should('contain', 'Liberty Square')
            .should('contain', 'Located on Avenida dos Aliados, in the center of Porto, Praça da Liberdade stands out for its large and beautiful old buildings. It is where the main events of the city take place, with emphasis on the rise of Christmas lights that attract people from all over Europe and the world. It is easy to reach regardless of where you are in Porto, with the metro and buses being good options for getting around.')
            .find('img[src="Cities Pictures/porto3.jpg"]')
            .should('be.visible')
    })
            
    it('Check Porto third container information', () => {

        cy.get(':nth-child(2) > .nav-link').click()
        cy.get('.pb-3 > .container > :nth-child(3)')
            .should('contain', 'Tower of Clerics')
            .should('contain', 'Much more than a tower in the city center, Torre dos Clérigos is a place that every visitor has to know. In addition to the incredible view of the entire city that you can admire from the top of the tower, it is also interesting to visit the museum and the church, so as to get to know the whole history behind these buildings.')
            .find('img[src="Cities Pictures/porto4.jpg"]')
            .should('be.visible')
    })

    it('Check Porto fourth container information', () => {

        cy.get(':nth-child(2) > .nav-link').click()
        cy.get('.pb-3 > .container > :nth-child(4)')
            .should('contain', 'Trindade Church')
            .should('contain', 'Portugal is the country of beautiful churches, and one of the main ones in the city of Porto is the Church of Trindade. Its architecture enchants everyone who visits. The square around you is also a very nice place to have a coffee and take lots of photos.')
            .find('img[src="Cities Pictures/porto5.jpg"]')
            .should('be.visible')
    })

    it('Calculate the average price to visit Porto', () => {

        cy.get(':nth-child(2) > .nav-link').click()
        cy.get('[onclick="Resetporto()"]').click()

            const averagePriceForPorto = '50'
            const pricePorto1 = Math.floor(Math.random() * 99) + 1
            const pricePorto2 = Math.floor(Math.random() * 99) + 1
        
        cy.get('#porto1').type(pricePorto1)
        cy.get('#porto2').type(pricePorto2)
        
            const averagePricePortoResult = ((averagePriceForPorto * pricePorto1) * pricePorto2)
        
        cy.clickOnCalculateButton()
        cy.get('#alert > p')
            .should('contain', `The average price is: ${averagePricePortoResult}`)
    })

    it('The modal should not close when clicking outside', () => {
            
        cy.get(':nth-child(2) > .nav-link').click()
        cy.get('[onclick="Resetporto()"]').click()
        cy.get('#staticBackdrop').click()
        cy.get('.modal-content').should('exist')
    })

    it('The modal should close when clicking on the X', () => {
            
        cy.get(':nth-child(2) > .nav-link').click()
        cy.get('[onclick="Resetporto()"]').click()
        cy.wait(500)
        cy.get('.close > span').click()
        cy.get('.modal-content').should('not.be.visible');
    })

    it('Warning message when the fields are not filled', () => {
            
        cy.get(':nth-child(2) > .nav-link').click()
        cy.get('[onclick="Resetporto()"]').click()
        cy.clickOnCalculateButton()
        cy.get('#alert > p').should('contain', 'Fill the empty fields.')
    })
})