const LoginPage = require('../pageobjects/login.page');

describe('My Login Test', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');   
        await expect(LoginPage.loginBtn).not.toBeExisting()
    });
    it('lockout user test', async () => {
        await LoginPage.open();
        await LoginPage.login('locked_out_user', 'secret_sauce');   
        await expect(LoginPage.loginBtn).toBeExisting()
        await expect(LoginPage.errorMsg).toBeExisting()
        await expect(LoginPage.errorMsg).toHaveText("Epic sadface: Sorry, this user has been locked out."
)
    });


});


