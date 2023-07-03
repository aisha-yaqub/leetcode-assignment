beforeEach(() => {
    cy.visit('https://leetcode.com/problem-list/challenges-for-new-users/?page=1')
})

describe('Verify page title and heading', ()=> {
    it('Verify the page title', ()=> {
        cy.title().should('eq', 'Challenges for New Users - LeetCode')
    })

    it('Verify the heading', () => {
        cy.get('[title="Challenges for New Users"]').should('have.text', 'Challenges for New Users')
    })
})

describe('Verify number of rows on the page', () => {
    it('Count and Verify number of rows', () => {
        cy.get('div[role="rowgroup"]').find('div.truncate a').its('length').should('be.equal', 8)
    })
})

describe('Verify Acceptance column', () => {
    it('Verify Acceptance column value for a row', () => {
        cy.contains('Middle of the Linked List').parents('div[role="row"]').find('div span').contains('76.1%').should('exist')
    })
})

describe('Verify behavior of different difficulty levels', () => {   
    it('Verify difficulty level Easy', () => {
        // clickDifficultyDropDown is a custom command to click on the Difficulty drop down
        cy.clickDifficultyDropDown()

        // Select difficulty level Easy
        cy.get('.truncate > .text-olive').click()

        // Verify difficulty tag is Easy
        cy.get('.mr-1 .text-olive').should('have.text', 'Easy')

        // Verify difficulty level Easy is included in the URL
        cy.url().should('include', 'difficulty=EASY')

        // Verify number of rows found for difficulty level Easy
        cy.get('div[role="rowgroup"]').find('div.truncate a').its('length').should('be.equal', 8)

        // Verify difficulty level is Easy for all rows
        cy.get('div[role="rowgroup"]').find('.text-olive').each(($element) => {
            cy.wrap($element).should('have.text', 'Easy');
        });

        // Remove difficulty tag
        // crossDifficultyTag is a custom command to click on cross to remove the tag
        cy.crossDifficultyTag()

        // Verify difficulty tag is removed
        cy.get('.mr-1 .text-olive').should('not.exist')

         // Verify difficulty level is not included in the URL
        cy.url().should('not.include', 'difficulty=EASY')

        // Verify number of rows after removing difficulty tag
        cy.get('div[role="rowgroup"]').find('div.truncate a').its('length').should('be.equal', 8)
    })

    it('Verify difficulty level Medium', () => {
        cy.clickDifficultyDropDown()

        // Select difficulty level Medium
        cy.get('.truncate > .text-yellow').click()

        // Verify difficulty tag is Medium
        cy.get('.mr-1 .text-yellow').should('have.text', 'Medium')

        // Verify difficulty level Medium is included in the URL
        cy.url().should('include', 'difficulty=MEDIUM')

        // Verify no rows found for the difficulty level Medium
        cy.get('div[role="rowgroup"]').find('div.truncate a').should('not.exist')

        // Remove difficulty tag
        cy.crossDifficultyTag()

        // Verify difficulty tag is removed
        cy.get('.mr-1 .text-yellow').should('not.exist')

        // Verify difficulty level is not included in the URL
        cy.url().should('not.include', 'difficulty=MEDIUM')

        // Verify number of rows are reset after removing difficulty tag
        cy.get('div[role="rowgroup"]').find('div.truncate a').its('length').should('be.equal', 8)
    })

    it('Verify difficulty level Hard', () => {
        cy.clickDifficultyDropDown()

        // Select difficulty level Hard
        cy.get('.truncate > .text-pink').click()

        // Verify difficulty tag is Hard
        cy.get('.mr-1 .text-pink').should('have.text', 'Hard')
        
        // Verify difficulty level Hard is included in the URL
        cy.url().should('include', 'difficulty=HARD') 

        // Verify no rows found for the difficulty level Hard
        cy.get('div[role="rowgroup"]').find('div.truncate a').should('not.exist')

        // Remove difficulty tag
        cy.crossDifficultyTag() 

        // Verify difficulty tag is removed
        cy.get('.mr-1 .text-pink').should('not.exist')

        // Verify difficulty level is not included in URL
        cy.url().should('not.include', 'difficulty=HARD')

        // Verify number of rows are reset after removing difficulty tag
        cy.get('div[role="rowgroup"]').find('div.truncate a').its('length').should('be.equal', 8)
    })
})

describe('Verify status and reset button behavior', () => {
    it('Verify status Attempted and reset', () => {  
        // Click Status dropdown    
        cy.get('#headlessui-menu-button-\\:Rl5j9d5t6\\:').click()

        // Select status Attempted
        cy.get('.truncate span').contains('Attempted').click()

        // Verify Status tag is Attempted
        cy.get('.mr-1 .ml-1').should('have.text', 'Attempted')

        // Verify status tag Tried is included in the URL
        cy.url().should('include', 'status=TRIED') 

        // Verify no rows found for the status Attempted
        cy.get('div[role="rowgroup"]').find('div.truncate a').should('not.exist')

        // CLick Reset button
        cy.contains('Reset').click()

        // Verify status tag is removed
        cy.get('.mr-1 .ml-1').should('not.exist')

        // Verify status Tried is not included in the URL
        cy.url().should('not.include', 'status=TRIED')

        // Verify number of rows are reset after reseting
        cy.get('div[role="rowgroup"]').find('div.truncate a').its('length').should('be.equal', 8)      
    })   
})