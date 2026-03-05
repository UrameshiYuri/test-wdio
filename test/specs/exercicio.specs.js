import loginPage from "../pageobjects/login.page";
import exercicioPage from "../pageobjects/exercicio.page";

describe('deve fazer uma conta nova e logar', () => {
    beforeEach(async () => {
        loginPage.abrirMenu()
    });

    afterEach(async () => {
        await browser.relaunchActiveApp()
    });

    it('deve criar conta', async () => {
        await exercicioPage.criarConta('teste@teste.com', '12345678')
        await exercicioPage.mensagemSucessoSignUp('Signed Up!')
        await exercicioPage.confirmarMensagem()
        await loginPage.preencherLogin('teste@login.com', '12345678')
        expect(await loginPage.mensagemAlerta()).toEqual('You are logged in!')
    });
});