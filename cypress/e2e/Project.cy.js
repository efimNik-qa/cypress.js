
describe('Тестирование логина и пароля', function () {
    
    it('Валидный логин и пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('be.enabled');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); 
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

        it('Проверка восстановления пароля', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#forgotEmailButton').click();
            cy.get('#mailForgot').type('german@dolnikov.ru');
            cy.get('#restoreEmailButton').click();
            cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); 
            cy.get('#messageHeader').should('be.visible');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })

            it('Верный логин, неверный пароль', function () {
                cy.visit('https://login.qa.studio/');
                cy.get('#loginButton').should('be.disabled');
                cy.get('#mail').type('german@dolnikov.ru');
                cy.get('#loginButton').should('be.disabled');
                cy.get('#pass').type('Userpass123');
                cy.get('#loginButton').should('be.enabled');
                cy.get('#loginButton').click();
                cy.get('#messageHeader').contains('Такого логина или пароля нет'); 
                cy.get('#exitMessageButton > .exitIcon').should('be.visible');
            })
               
                it('Верный пароль, неверный логин', function () {
                    cy.visit('https://login.qa.studio/');
                    cy.get('#loginButton').should('be.disabled');
                    cy.get('#mail').type('Jerman@dolnikov.ru');
                    cy.get('#loginButton').should('be.disabled');
                    cy.get('#pass').type('iLoveqastudio13');
                    cy.get('#loginButton').should('be.enabled');
                    cy.get('#loginButton').click();
                    cy.get('#messageHeader').contains('Такого логина или пароля нет'); 
                    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
                   
                })

                it('Верный пароль, логин без @', function () {
                    cy.visit('https://login.qa.studio/');
                    cy.get('#loginButton').should('be.disabled');
                    cy.get('#mail').type('germandolnikov.ru');
                    cy.get('#loginButton').should('be.disabled');
                    cy.get('#pass').type('iLoveqastudio13');
                    cy.get('#loginButton').should('be.enabled');
                    cy.get('#loginButton').click();
                    cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); 
                })

                it('Строчные буквы в логине', function () {
                    cy.visit('https://login.qa.studio/');
                    cy.get('#loginButton').should('be.disabled');
                    cy.get('#mail').type('GerMan@Dolnikov.ru');
                    cy.get('#loginButton').should('be.disabled');
                    cy.get('#pass').type('iLoveqastudio13');
                    cy.get('#loginButton').should('be.enabled');
                    cy.get('#loginButton').click();
                    cy.get('#messageHeader').contains('Авторизация прошла успешно'); 
                    cy.get('#messageHeader').should('be.visible');
                    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); 
                })
})


