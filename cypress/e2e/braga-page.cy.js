/// <reference types="cypress"/>

describe('Braga page', () => { 
    
    beforeEach(() => {
        cy.visit('/')
    })

    it('Check Braga first container information', () => {
    
        cy.get(':nth-child(3) > .nav-link').click()
        cy.get('.pb-3 > .container > :nth-child(1)')
            .should('contain', 'Street in the center of Braga')
            .should('contain', 'The streets in the center of Braga are always very organized and clean. During the different seasons of the year the plant beds are always renovated with specific plants of the season, leaving the streets with a beautiful and ornamental color. The bars with terraces are a good option to drink and eat while watching the movement of the city center.')
            .find('img[src="Cities Pictures/braga2.jpg"]')
            .should('be.visible')
    })
        
    it('Check Braga second container information', () => {
    
        cy.get(':nth-child(3) > .nav-link').click()
        cy.get('.pb-3 > .container > :nth-child(2)')
            .should('contain', "Archbishop's Palace")
            .should('contain', "The Archbishop's Palace is one of the most beautiful monuments in Braga. It is located in the city center and for those who like history it is a visit that cannot be missed. The medieval construction allows you to travel back in time, the state of conservation of the structure is excellent and it also has a beautiful garden. Great place to take lots of pictures and spend time.")
            .find('img[src="Cities Pictures/braga3.jpg"]')
            .should('be.visible')
    })
            
    it('Check Braga third container information', () => {
    
        cy.get(':nth-child(3) > .nav-link').click()
        cy.get('.pb-3 > .container > :nth-child(3)')
            .should('contain', 'Sanctuary of Bom Jesus do Monte')
            .should('contain', 'If you go to Braga, you have to visit the Sanctuary of Bom Jesus do Monte. The classic style of the construction of the church is very beautiful. To get to the church the ideal is to go by car. In addition to all the beauty of the church and the region around it, the view of the city is also incredible.')
            .find('img[src="Cities Pictures/braga4.jpg"]')
            .should('be.visible')
    })
    
    it('Check Braga fourth container information', () => {
    
        cy.get(':nth-child(3) > .nav-link').click()
        cy.get('.pb-3 > .container > :nth-child(4)')
            .should('contain', 'Sameiro Church')
            .should('contain', 'A few kilometers from the Santuario do Bom Jesus do Monte, is the Sameiro Church. Another church of classical construction, with a beautiful design. The place is very calm and offers tranquility, and still has an incredible view of the city. It is one of the most famous churches in Portugal.')
            .find('img[src="Cities Pictures/braga5.jpg"]')
            .should('be.visible')
    })

    it('Calculate the average price to visit Braga', () => {

        cy.get(':nth-child(3) > .nav-link').click()
        cy.get('[onclick="Resetbraga()"]').click()

            const AveragePriceForBraga = '45'
            const priceBraga1 = Math.floor(Math.random() * 99) + 1
            const priceBraga2 = Math.floor(Math.random() * 99) + 1
        
        cy.get('#braga1').type(priceBraga1)
        cy.get('#braga2').type(priceBraga2)
        
            const averagePriceBragaResult = ((AveragePriceForBraga * priceBraga1) * priceBraga2)
        
        cy.clickOnCalculateButton()
        cy.get('#alert2 > p')
            .should('contain', `The average price is: ${averagePriceBragaResult}`)
    })

    it('The modal should not close when clicking outside', () => {
            
        cy.get(':nth-child(3) > .nav-link').click()
        cy.get('[onclick="Resetbraga()"]').click()
        cy.get('#staticBackdrop').click()
        cy.get('.modal-content').should('exist')
    })

    it('The modal should close when clicking on the X', () => {
            
        cy.get(':nth-child(3) > .nav-link').click()
        cy.get('[onclick="Resetbraga()"]').click()
        cy.wait(500);
        cy.get('.close > span').click()
        cy.get('.modal-content').should('not.be.visible');
    })

    it('Warning message when the fields are not filled', () => {
            
        cy.get(':nth-child(3) > .nav-link').click()
        cy.get('[onclick="Resetbraga()"]').click()
        cy.clickOnCalculateButton()
        cy.get('#alert2 > p').should('contain', 'Fill the empty fields.')
    })
})
