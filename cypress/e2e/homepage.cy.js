/// <reference types="cypress"/>

beforeEach(() => {
    cy.visit('/')
})

describe('Verify the homepage content, menu navigation and carousel', () => {

    it('Homepage information', () => {
      
        cy.get('nav.navbar.navbar-light.border.border-dark').should('contain', 'Portugal Cities')
        cy.get('span > .fas').should('be.visible')
        cy.get('.navbar-expand-lg')
            .should('contain', 'Home')
            .should('contain', 'Porto')
            .should('contain', 'Braga')
            .should('contain', 'Lisbon')
        cy.get('#carouselExampleCaptions').should('exist')
    })

    it('Homepage menu navigation', () => {
        
        cy.get(':nth-child(2) > .nav-link').click()                                      
        cy.location('pathname').should('eq', '/Portugal-Cities/porto-city-page.html') 
        cy.get('.active > .nav-link').click()
        cy.location('pathname').should('eq', '/Portugal-Cities/index.html')                                    
        cy.get(':nth-child(3) > .nav-link').click()
        cy.location('pathname').should('eq', '/Portugal-Cities/braga-city-page.html')
        cy.get('.active > .nav-link').click()
        cy.location('pathname').should('eq', '/Portugal-Cities/index.html')
        cy.get(':nth-child(4) > .nav-link').click() 
        cy.location('pathname').should('eq', '/Portugal-Cities/lisbon-city-page.html')
        cy.get('.active > .nav-link').click()
        cy.location('pathname').should('eq', '/Portugal-Cities/index.html')
    })

    it('Carousel behavior', () => {

        cy.get('#carouselExampleCaptions')
            .find('.carousel-item.active')
            .should('contain', 'Porto')
            .find('img[src="Cities Pictures/porto1.jpg"]')
            .should('be.visible')
        cy.get('.fas.fa-angle-right').click()
        cy.get('#carouselExampleCaptions')
            .find('.carousel-item.active')
            .should('contain', 'Braga')
            .find('img[src="Cities Pictures/braga1.jpg"]')
            .should('be.visible')
        cy.get('.fas.fa-angle-right').click()
        cy.get('#carouselExampleCaptions')
            .find('.carousel-item.active')
            .should('contain', 'Lisbon')
            .find('img[src="Cities Pictures/lisboa1.jpg"]')
            .should('be.visible')
    })
})