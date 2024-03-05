/// <reference types="cypress"/>

describe('Lisboa page', () => {
    
    beforeEach(() => {
        cy.visit('/')
    })

    it('Check Lisboa first container information', () => {
    
        cy.get(':nth-child(4) > .nav-link').click()
        cy.get('.pb-3 > .container > :nth-child(1)')
            .should('contain', 'Belém Tower')
            .should('contain', 'The Belém Tower is one of the most famous monuments in Portugal and even in the whole of Europe, whoever visits the city of Lisbon must visit the Belém Tower. In addition to being historic, the beauty of the building is also impressive, making it a great place to take many photos.')
            .find('img[src="Cities Pictures/lisboa2.jpg"]')
            .should('be.visible')
    })
        
    it('Check Lisboa second container information', () => {
    
        cy.get(':nth-child(4) > .nav-link').click()
        cy.get('.pb-3 > .container > :nth-child(2)')
            .should('contain', 'Cascais')
            .should('contain', 'The city of Cascais is one of the most beautiful in Lisbon, some say it is even one of the most beautiful cities in Portugal. It is a very clean and organized city, perfect for strolling and enjoying a sunny day. One of the main attractions of the city are its beautiful beaches.')
            .find('img[src="Cities Pictures/lisboa3.jpg"]')
            .should('be.visible')
    })
            
    it('Check Lisboa third container information', () => {
    
        cy.get(':nth-child(4) > .nav-link').click()
        cy.get('.pb-3 > .container > :nth-child(3)')
            .should('contain', 'Estoril Casino')
            .should('contain', 'Casino Estoril is the main casino in Portugal. This famous Casino is located in Estoril, very close to the city of Cascais, it is worth visiting the place and getting to know the house, which is one of the most famous in southern Europe. At night the lights on make the place even more beautiful.')
            .find('img[src="Cities Pictures/lisboa4.jpg"]')
            .should('be.visible')
    })
    
    it('Check Lisboa fourth container information', () => {
    
        cy.get(':nth-child(4) > .nav-link').click()
        cy.get('.pb-3 > .container > :nth-child(4)')
            .should('contain', 'Carcavelos Beach')
            .should('contain', 'Carcavelos beach is one of the main ones in Lisbon. The visit is more interesting on a sunny day, to be able to walk on the sand and have a different view of the whole beach and the surrounding city. It is a beach very frequented by surfers, on days with good waves the beach is very crowded.')
            .find('img[src="Cities Pictures/lisboa5.jpg"]')
            .should('be.visible')
    })

    it('Calculate the average price to visit Lisboa', () => {

        cy.get(':nth-child(4) > .nav-link').click()
        cy.get('[onclick="Resetlisboa()"]').click()

            const averagePriceForLisboa = '65'
            const priceLisboa1 = Math.floor(Math.random() * 99) + 1
            const priceLisboa2 = Math.floor(Math.random() * 99) + 1
        
        cy.get('#lisboa1').type(priceLisboa1)
        cy.get('#lisboa2').type(priceLisboa2)
        
            const averagePriceLisboaResult = ((averagePriceForLisboa * priceLisboa1) * priceLisboa2)
        
        cy.clickOnCalculateButton()
        cy.get('#alert1 > p')
            .should('contain', `The average price is: ${averagePriceLisboaResult}`)
    })

    it('The modal should not close when clicking outside', () => {
            
        cy.get(':nth-child(4) > .nav-link').click()
        cy.get('[onclick="Resetlisboa()"]').click()
        cy.get('#staticBackdrop').click()
        cy.get('.modal-content').should('exist')
    })

    it('The modal should close when clicking on the X', () => {
            
        cy.get(':nth-child(4) > .nav-link').click()
        cy.get('[onclick="Resetlisboa()"]').click()
        cy.wait(500);
        cy.get('.close > span').click()
        cy.get('.modal-content').should('not.be.visible');
    })

    it('Warning message when the fields are not filled', () => {
            
        cy.get(':nth-child(4) > .nav-link').click()
        cy.get('[onclick="Resetlisboa()"]').click()
        cy.clickOnCalculateButton()
        cy.get('#alert1 > p').should('contain', 'Fill the empty fields.')
    })
})