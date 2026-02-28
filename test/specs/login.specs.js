import loginPage from "../pageobjects/login.page";
describe('Testes em app mobile', () => {

    beforeEach(async () => {
        loginPage.abrirMenu()
    });

    afterEach(async () => {
        await browser.relaunchActiveApp()
    });

    it('Deve fazer login com sucesso', async () => {
        loginPage.preencherLogin('teste@teste.com', '12345678')
        expect(await loginPage.mensagemAlerta()).toEqual('You are logged in!')
    });
    it('Deve falhar ao tentar login com email invalido', async () => {
        loginPage.preencherLogin('teste@teste', '12345678')
        await loginPage.mensagemErro('Please enter a valid email address')
    });
    it('Deve falhar ao fazer loggin com senha errada', async () => {
        loginPage.preencherLogin('teste@teste.com', 'senha')
        await loginPage.mensagemErro('Please enter at least 8 characters')
    });
});
