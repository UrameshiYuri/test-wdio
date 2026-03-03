import loginPage from "../pageobjects/login.page";
import exercicioPage from "../pageobjects/exercicio.page";

describe('deve fazer uma conta nova e logar', () => {
    beforeEach(async () => {
        loginPage.abrirMenu()
    });

    afterEach(async () => {
    });

    it('cenario de teste', async () => {
        await exercicioPage.signupPage()
        await exercicioPage.criarConta('teste@teste.com', '12345678')
        await loginPage.preencherLogin('teste@teste2.com', '12345677¡8')
        await loginPage.mensagemAlerta()
        //await expect(mensagem).toBeDisplayed()
        await driver.pause(10000)
    });
});